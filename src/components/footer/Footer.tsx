import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return <React.Fragment>

        <h1>{t('footer.title')}</h1>
        <h1>{t('footer.title')}</h1>
        <h1>{t('footer.title')}</h1>
        <h1>{t('footer.title')}</h1>
        <h1>{t('footer.title')}</h1>

    </React.Fragment>

}
