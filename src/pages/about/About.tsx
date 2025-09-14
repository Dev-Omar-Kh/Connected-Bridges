import React from 'react';
import PageTitle from '../../components/titles/PageTitle';
import { useTranslation } from 'react-i18next';
import AboutUs from '../../sections/about-us/AboutUs';
import AboutGoalsCard from '../../components/cards/AboutGoalsCard';
import { GoGoal } from 'react-icons/go';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa6';
import Achievements from '../../sections/achievements/Achievements';
// import SectionLayout from '../../layouts/SectionLayout';
// import Clients from '../../sections/our-clients/Clients';
// import Partners from '../../sections/partners/Partners';

const aboutGoals = [

    {
        icon: FaRegEye,
        title: 'overview.about-us.goals.vision.title',
        description: 'overview.about-us.goals.vision.description'
    },

    {
        icon: GoGoal,
        title: 'overview.about-us.goals.mission.title',
        description: 'overview.about-us.goals.mission.description'
    },

    {
        icon: IoDiamondOutline,
        title: 'overview.about-us.goals.values.title',
        description: 'overview.about-us.goals.values.description'
    },

];

export default function About() {

    const { t } = useTranslation();

    return <React.Fragment>

        <section className='space-y-20 pb-20'>

            <PageTitle title={'about.title'} />

            <div className='common-p-inline grid grid-cols-2 gap-5 max-[930px]:grid-cols-1'>

                <AboutUs fullData={true} />

                <div className='space-y-5'>

                    {aboutGoals.map((goal, index) => (
                        <AboutGoalsCard key={index} icon={goal.icon} title={t(goal.title)} description={t(goal.description)} />
                    ))}

                </div>

            </div>

            {/* <SectionLayout className='gap-7.5' title='overview.clients.title'>
                <Clients />
            </SectionLayout> */}

            <Achievements />

            {/* <SectionLayout className='gap-5' title='overview.partners.title'>
                <Partners />
            </SectionLayout> */}

        </section>

    </React.Fragment>

}
