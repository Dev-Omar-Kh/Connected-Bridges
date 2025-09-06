import React from 'react'
import Hero from './sections/hero/Hero'
import Clients from './sections/our-clients/Clients'
import Achievements from './sections/achievements/Achievements'
import AboutUs from './sections/about-us/AboutUs'
import Services from './sections/services/Services'
import LastProjects from './sections/last-projects/LastProjects'
import PopularInsights from './sections/popular-insights/PopularInsights'

export default function Home() {

    return <React.Fragment>

        <section className='flex flex-col gap-20 pb-20'>

            <Hero />

            <AboutUs />

            <Clients />

            <Achievements />

            <Services />

            <LastProjects />

            <PopularInsights />

        </section>

    </React.Fragment>

}
