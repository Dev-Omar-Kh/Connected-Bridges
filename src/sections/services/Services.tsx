import React from 'react'
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/cards/ServiceCard';
import { Bell, BrainCircuit, DraftingCompass, GlobeLock, MonitorCog, ShieldCheck } from 'lucide-react';
import { ROUTES } from '../../constants/routes';

export default function Services() {

    const { t } = useTranslation();

    const services = [
        { id: 1, icon: DraftingCompass, title: t('overview.services.design_build_solutions'), link: ROUTES.HOME_ROUTE, description: t('overview.services.design_build_solutions_description') },
        { id: 2, isNew: true, icon: BrainCircuit, title: t('overview.services.ai_surveillance_systems'), link: ROUTES.HOME_ROUTE, description: t('overview.services.ai_surveillance_systems_description') },
        { id: 3, icon: MonitorCog, title: t('overview.services.command_control_centers'), link: ROUTES.HOME_ROUTE, description: t('overview.services.command_control_centers_description') },
        { id: 4, icon: GlobeLock, title: t('overview.services.smart_security_systems'), link: ROUTES.HOME_ROUTE, description: t('overview.services.smart_security_systems_description') },
        { id: 5, icon: Bell, title: t('overview.services.emergency_critical_communications'), link: ROUTES.HOME_ROUTE, description: t('overview.services.emergency_critical_communications_description') },
        { id: 6, isNew: true, icon: ShieldCheck, title: t('overview.services.security_consulting_operations'), link: ROUTES.HOME_ROUTE, description: t('overview.services.security_consulting_operations_description') },
        // { id: 7, icon: BrainCircuit, title: t('overview.services.ai_cross_sector_applications'), link: ROUTES.HOME_ROUTE, description: t('overview.services.ai_cross_sector_applications_description') },
        // { id: 8, icon: BrainCircuit, title: t('overview.services.ai_services'), link: ROUTES.HOME_ROUTE, description: t('overview.services.ai_services_description') },
        // { id: 9, icon: BrainCircuit, title: t('overview.services.feature_oriented_solutions'), link: ROUTES.HOME_ROUTE, description: t('overview.services.feature_oriented_solutions_description') },
    ]

    return <React.Fragment>

        <div className='grid grid-cols-3 gap-5 max-[1075px]:grid-cols-2 max-[660px]:grid-cols-1'>

            {services.map(({ id, title, icon: Icon, description }) => (
                <ServiceCard key={id} id={id} title={title} icon={<Icon />} description={description} />
            ))}

        </div>

    </React.Fragment>

}
