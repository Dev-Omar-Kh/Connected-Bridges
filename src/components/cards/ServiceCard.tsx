import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ServiceCardProps = {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
};

export default function ServiceCard({ id, title, description, icon }: ServiceCardProps) {

    const {i18n} = useTranslation();

    return <React.Fragment>

        <Link 
            to={`${ROUTES.SERVICES_ROUTE}/${title.toLowerCase().replace(/ /g, '-')}/${id}`} 
            className='p-5 flex flex-col gap-2.5 rounded-lg bg-[var(--white-color)] group'
        >

            <div className='flex items-center justify-between gap-2.5'>

                <div 
                    className='
                        w-14 min-w-14 h-14 min-h-14 flex items-center justify-center rounded-md 
                        bg-[var(--mid-gray-color)] text-3xl text-[var(--light-blue-color)]
                        group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)] duration-300
                    '
                >
                    {icon}
                </div>

                <div 
                    className='
                        w-8 h-8 min-w-8 min-h-8 flex items-center justify-center rounded-full text-[var(--light-blue-color)]
                        bg-[var(--mid-gray-color)] group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)] duration-300
                    '
                >
                    <ChevronRight className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                </div>

            </div>

            <h4 className='text-xl text-start font-semibold text-[var(--dark-blue-color)]'>{title}</h4>

            <p className='text-sm text-start text-[var(--dark-blue-color)] opacity-80'>{description}</p>

        </Link>

    </React.Fragment>

}
