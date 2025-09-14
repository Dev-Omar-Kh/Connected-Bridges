import React from 'react';
import { useTranslation } from 'react-i18next';

// ====== images ====== //

import bgImg from '../../assets/images/page-title-bg.webp';

type PageTitleProps = {
    title: string;
}

export default function PageTitle({ title }: PageTitleProps) {

    const { t, i18n } = useTranslation();

    return <React.Fragment>

        <div 
            className={`
                relative w-full h-56 from-[var(--light-blue-color)] to-[var(--dark-blue-color)]
                ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
            `}
        >

            <img src={bgImg} alt={title} className='absolute top-0 left-0 w-full h-full object-cover opacity-3' />
            <div className='absolute top-0 left-0 w-full h-full flex items-end justify-start common-p-inline py-5'>
                <h1 className='text-4xl font-bold text-[var(--white-color)]'>{t(title)}</h1>
            </div>

        </div>

    </React.Fragment>

}
