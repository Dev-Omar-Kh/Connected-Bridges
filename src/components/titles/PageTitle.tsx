import React from 'react';
import { useTranslation } from 'react-i18next';

// ====== images ====== //

import bgImg from '../../assets/images/page-title-bg.webp';

type PageTitleProps = {
    title: string;
    description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {

    const { t, i18n } = useTranslation();

    return <React.Fragment>

        <section className='space-y-5'>

            <div 
                className={`
                    relative w-full from-[var(--light-blue-color)] to-[var(--dark-blue-color)]
                    ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                    flex items-end justify-start common-p-inline pt-32 pb-5
                `}
            >

                <img src={bgImg} alt={title} className='absolute top-0 left-0 w-full h-full object-cover opacity-3' />
                <h1 className='relative text-4xl font-bold text-[var(--white-color)] tracking-wider glowing-text'>{t(title)}</h1>

            </div>

            {description && <div className='common-p-inline'>
                <h3 className='w-xl text-start max-w-full text-lg text-[var(--dark-blue-color)] opacity-80 font-medium'>
                    {t(description)}
                </h3>
            </div>}

        </section>

    </React.Fragment>

}
