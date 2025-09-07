import React from 'react';
import Marquee from 'react-fast-marquee';
import { clientsData } from '../../constants/clients';
import ClientCard from '../../components/cards/ClientCard';
import { useTranslation } from 'react-i18next';

export default function Partners() {

    const { i18n } = useTranslation();

    return <React.Fragment>

        <div dir='ltr' className="relative">
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--light-gray-color)]" />
            <Marquee key={i18n.language} pauseOnHover={true} speed={50}>

                {clientsData.map(logo => (
                    <div key={logo.id} className='p-2.5'>
                        <ClientCard logo={logo} />
                    </div>
                ))}

            </Marquee>
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--light-gray-color)]" />
        </div>

    </React.Fragment>

}
