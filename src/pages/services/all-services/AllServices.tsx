import React from 'react';
import PageTitle from '../../../components/titles/PageTitle';
import ServicesCard from '../../../components/cards/ServicesCard';
import { AllServicesData } from '../../../constants/services';

export default function AllServices() {

    return <React.Fragment>

        <section className='space-y-10 pb-20'>

            <PageTitle title={'all-services.title'} description={'all-services.description'} />

            <section className='common-p-inline space-y-5'>
                {AllServicesData.map((service) => (
                    <ServicesCard key={service.id} data={service} />
                ))}
            </section>

        </section>

    </React.Fragment>

}
