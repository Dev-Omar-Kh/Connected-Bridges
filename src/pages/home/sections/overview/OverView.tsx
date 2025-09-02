import React from 'react';
import Clients from './Clients';
import Achievements from './Achievements';

export default function OverView() {

    return <React.Fragment>

        <section className='flex flex-col gap-25 common-p-block'>

            <Clients />

            <Achievements />

        </section>

    </React.Fragment>

}
