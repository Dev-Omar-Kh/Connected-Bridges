import React from 'react'
import MainTitle from '../../../../components/titles/MainTitle'
import { useTranslation } from 'react-i18next';
import { BsShieldLock } from 'react-icons/bs';
import { RiRobot2Line } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import AboutCard from '../../../../components/cards/AboutCard';
import { PencilRuler } from 'lucide-react';

export default function AboutUs() {

    const { t } = useTranslation();

    const aboutCards = [

        {
            title: t('overview.about-us.cards.securityTitle'),
            description: t('overview.about-us.cards.securityDescription'),
            icon: <BsShieldLock />
        },
        {
            title: t('overview.about-us.cards.aiTitle'),
            description: t('overview.about-us.cards.aiDescription'),
            icon: <RiRobot2Line />
        },
        {
            title: t('overview.about-us.cards.standardsTitle'),
            description: t('overview.about-us.cards.standardsDescription'),
            icon: <TfiWorld />
        },
        {
            title: t('overview.about-us.cards.designAndBuildTitle'),
            description: t('overview.about-us.cards.designAndBuildDescription'),
            icon: <PencilRuler />
        }

    ];

    return <React.Fragment>

        <section className="common-p-inline mx-auto text-center w-full flex flex-col gap-7.5">

            <MainTitle title='overview.about-us.title' />

            <div className="grid grid-cols-2 gap-5 items-center max-[1077px]:grid-cols-2 max-[770px]:grid-cols-1">

                <div className='flex flex-col gap-5'>

                    <h3 className='flex flex-wrap items-center gap-x-1.5 text-3xl font-semibold max-[515px]:text-2xl'>
                        <span className='text-[var(--light-blue-color)]'>{t('overview.about-us.about')}</span>
                        <p className='text-[var(--dark-blue-color)]'>{t('overview.about-us.about-title')}</p>
                    </h3>

                    <p className='text-lg text-[var(--dark-blue-color)] opacity-80 text-start'>
                        {t('overview.about-us.description')}
                    </p>

                </div>

                <div className='grid grid-cols-2 gap-5 max-[1077px]:grid-cols-1'>

                    {aboutCards.map((card, index) => (
                        <AboutCard key={index} title={card.title} description={card.description} icon={card.icon} />
                    ))}

                </div>

            </div>

        </section>

    </React.Fragment>

}
