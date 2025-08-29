import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    BadgeInfo, 
    Bell, 
    BrainCircuit, 
    ChevronRight, 
    DraftingCompass, 
    GlobeLock, 
    Handshake, 
    Headset, 
    House, 
    LayoutDashboard, 
    MonitorCog, 
    Newspaper, 
    PencilRuler, 
    ShieldCheck, 
    Users
} from 'lucide-react';
import { dropdownAnimations, getChevronAnimation } from '../../animations/animations';
import { useTranslation } from 'react-i18next';
import TranslateBtn from '../buttons/TranslateBtn';

// ====== import images ====== //
import whiteLogo from '../../assets/images/white-logo.png';
import colorsLogo from '../../assets/images/light-bg-logo.png';

// ====== static-data ====== //

export default function Header() {

    const { t, i18n } = useTranslation();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const naveLinks = [
        {
            id: 1,
            icon: House,
            title: t('header.home'),
            link: ROUTES.HOME_ROUTE
        },
        {
            id: 2,
            icon: BadgeInfo,
            title: t('header.about'),
            link: ROUTES.ABOUT_ROUTE,
            list: [
                { id: 1, icon: BadgeInfo, title: t('header.about_us'), link: ROUTES.ABOUT_ROUTE },
                { id: 2, icon: Handshake, title: t('header.our_partners'), link: ROUTES.ABOUT_ROUTE },
                { id: 3, icon: Users, title: t('header.our_clients'), link: ROUTES.ABOUT_ROUTE },
            ],
        },
        {
            id: 3,
            icon: PencilRuler,
            title: t('header.services'),
            link: ROUTES.SERVICES_ROUTE,
            list: [
                { id: 1, icon: DraftingCompass, title: t('header.design_build_solutions'), link: ROUTES.HOME_ROUTE },
                { id: 2, isNew: true, icon: BrainCircuit, title: t('header.ai_surveillance_systems'), link: ROUTES.HOME_ROUTE },
                { id: 3, icon: MonitorCog, title: t('header.command_control_centers'), link: ROUTES.HOME_ROUTE },
                { id: 4, icon: GlobeLock, title: t('header.smart_security_systems'), link: ROUTES.HOME_ROUTE },
                { id: 5, icon: Bell, title: t('header.emergency_critical_communications'), link: ROUTES.HOME_ROUTE },
                { id: 6, isNew: true, icon: ShieldCheck, title: t('header.security_consulting_operations'), link: ROUTES.HOME_ROUTE },
            ],
        },
        {
            id: 4,
            icon: LayoutDashboard,
            title: t('header.projects'),
            link: ROUTES.PROJECTS_ROUTE
        },
        {
            id: 5,
            icon: Newspaper,
            title: t('header.insights'),
            link: ROUTES.INSIGHTS_ROUTE
        },
        {
            id: 6,
            icon: Headset,
            title: t('header.contact'),
            link: ROUTES.CONTACT_ROUTE
        },
    ];

    return <React.Fragment>

        <header 
            className={`
                w-full py-5 common-p-inline flex items-center justify-between 
                fixed top-0 start-0 z-50 duration-300
                ${isScrolled ? 'bg-[var(--sugar-color)] shadow-lg' : 'bg-transparent'}
            `}
        >

            <Link to={ROUTES.HOME_ROUTE} className='h-16'>
                <img src={isScrolled ? colorsLogo : whiteLogo} alt="logo" className='h-full' />
            </Link>

            <nav>

                <ul className='flex items-center gap-2.5'>

                    {naveLinks.map(link => (

                        link.list ? (

                            <li 
                                className='relative group p-2.5 -m-2.5' key={link.id}
                                onMouseEnter={() => setHoveredItem(link.title)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >

                                <Link 
                                    to={link.link}
                                    className={`
                                        px-4 py-2 flex items-center gap-1 text-base font-medium 
                                        rounded-md cursor-pointer duration-300 
                                        ${hoveredItem === link.title 
                                            ? 'bg-[var(--light-gray-color)] text-[var(--blue-color)]' 
                                            : isScrolled ? 'text-[var(--dark-blue-color)]' : 'text-[var(--white-color)]'
                                        }
                                    `}
                                >
                                    <link.icon size={18} />

                                    <p>{link.title}</p>

                                    <motion.div {...getChevronAnimation(hoveredItem === link.title, i18n.language)}>
                                        <ChevronRight size={18} className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                                    </motion.div>

                                </Link>

                                <AnimatePresence>

                                    {hoveredItem === link.title && (

                                        <motion.div 
                                            className='
                                                absolute nav-btn-hover-top left-[50%] translate-x-[-50%] z-50 
                                                w-auto min-w-max p-4 rounded-2xl bg-[var(--light-gray-color)] shadow-lg
                                                border border-[var(--light-gray-color)] grid grid-cols-1 gap-2.5
                                            '
                                            {...dropdownAnimations.container}
                                        >

                                            {link.list.map(link => (

                                                <Link 
                                                    key={link.id}
                                                    to={link.link} 
                                                    className='
                                                        relative text-base px-4 py-2 rounded-md flex items-center gap-2.5 
                                                        text-[var(--dark-blue-color)] font-semibold bg-[var(--mid-gray-color)]
                                                        duration-300 hover:text-[var(--white-color)] hover:bg-[var(--blue-color)] group/new-link
                                                    '
                                                >
                                                    <link.icon size={20} stroke='currentColor' className='transition-colors duration-300' />
                                                    {link.title}
                                                    {link.isNew && 
                                                        <span 
                                                            className={`
                                                                absolute -top-1 -end-1 bg-[var(--blue-color)] text-[var(--white-color)] px-1 py-0.5 rounded-md text-[8px]
                                                                shadow group-hover/new-link:bg-[var(--light-gray-color)] group-hover/new-link:text-[var(--blue-color)] duration-300
                                                                ${i18n.language === 'ar' ? 'rotate-[-15deg]' : 'rotate-[15deg]'}
                                                            `}
                                                        >
                                                            {t('header.new')}
                                                        </span>
                                                    }
                                                </Link>

                                            ))}

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </li>

                        ) : (

                            <li key={link.id}>

                                <Link 
                                    to={link.link}
                                        className={`
                                        px-4 py-2 flex items-center gap-1 text-base font-medium 
                                        rounded-md cursor-pointer duration-300 
                                        ${isScrolled ? 'text-[var(--dark-blue-color)]' : 'text-[var(--white-color)]'}
                                        hover:bg-[var(--light-gray-color)] hover:text-[var(--blue-color)]
                                    `}
                                >
                                    <link.icon size={18} />
                                    <p>{link.title}</p>
                                </Link>

                            </li>

                        )

                    ))}

                </ul>

            </nav>

            <div className='flex items-center gap-2.5'>
                <TranslateBtn />
            </div>

        </header>

    </React.Fragment>

}
