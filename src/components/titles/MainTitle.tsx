import React from 'react'
import { useTranslation } from 'react-i18next';

export default function MainTitle({ title }: { title: string }) {

    const { i18n, t } = useTranslation();

    return <React.Fragment>

        <div className='w-full common-p-inline flex items-center justify-center text-center'>

            <h2 
                className={`
                    text-4xl font-bold ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} pb-2.5
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent max-[515px]:text-3xl
                `}
            >
                {t(title)}
            </h2>

        </div>

    </React.Fragment>

}
