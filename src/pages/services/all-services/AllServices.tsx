import React from 'react';
import PageTitle from '../../../components/titles/PageTitle';
import ServicesCard from '../../../components/cards/ServicesCard';
import { AllServicesData } from '../../../constants/services';
import { useTranslation } from 'react-i18next';

type Service = ReturnType<typeof AllServicesData>[number];

export default function AllServices() {

    const { t } = useTranslation();

    return <React.Fragment>

        <section className='space-y-10 pb-20'>

            <PageTitle title={'all-services.title'} description={'all-services.description'} />

            <section className='common-p-inline space-y-5'>
                {AllServicesData(t).map((service: Service) => (
                    <ServicesCard key={service.id} data={service} />
                ))}
            </section>

        </section>

    </React.Fragment>

}
