import React from 'react'
import PageTitle from '../../components/titles/PageTitle'
import ProjectCard from '../../components/cards/ProjectCard'

export default function OurProjects() {

    return <React.Fragment>


        <section className='space-y-10 pb-20'>

            <PageTitle title={'our-projects.title'} description={'our-projects.description'} />

            <div className='common-p-inline grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[780px]:grid-cols-1'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

        </section>

    </React.Fragment>

}
