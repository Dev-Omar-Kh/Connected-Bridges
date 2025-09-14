import React from 'react'
import PageTitle from '../../components/titles/PageTitle'
import { clientsData } from '../../constants/clients'
import ClientCard from '../../components/cards/ClientCard'

export default function Partners() {

    return <React.Fragment>

        <section className='space-y-20 pb-20'>

            <PageTitle title={'our-partners.title'} />

            <div className='common-p-inline grid grid-cols-5 gap-5 max-[815px]:grid-cols-3 max-[510px]:grid-cols-2 max-[510px]:gap-2.5'>

                {clientsData.map((client) => (
                    <ClientCard key={client.id} logo={client} className='!h-full !w-full !min-h-full !min-w-full !max-w-full !max-h-full' />
                ))}

            </div>

        </section>

    </React.Fragment>

}
