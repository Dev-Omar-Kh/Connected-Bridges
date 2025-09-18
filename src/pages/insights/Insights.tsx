import React from 'react'
import PageTitle from '../../components/titles/PageTitle'
import InsightCard from '../../components/cards/InsightCard'

export default function Insights() {

    return <React.Fragment>

        <section className='space-y-10 pb-20'>

            <PageTitle title={'insights.title'} description={'insights.description'} />


            <div className='common-p-inline grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[780px]:grid-cols-1'>

                <InsightCard />
                <InsightCard />
                <InsightCard />
                <InsightCard />
                <InsightCard />
                <InsightCard />
                <InsightCard />
                <InsightCard />
                <InsightCard />

            </div>

        </section>

    </React.Fragment>

}
