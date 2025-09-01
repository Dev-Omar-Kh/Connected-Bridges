import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import whiteLogo from '../../assets/images/white-logo.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import type { ElementType } from 'react';
import React from 'react';

interface FooterLink {
    label: string;
    icon?: ElementType;
    to?: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    icon: ElementType;
    href: string;
}

export default function Footer() {

    const { t } = useTranslation();

    const footerLinks: FooterSection[] = [
        {
            title: t('footer.office.title'),
            links: [
                { label: t('footer.office.address'), icon: MapPin },
                { label: 'info@connectedbridges.com', icon: Mail },
                { label: '+966 597995933', icon: Phone },
            ]
        },
        {
            title: t('footer.links.title'),
            links: [
                { label: t('footer.links.home'), to: ROUTES.HOME_ROUTE },
                { label: t('footer.links.about_us'), to: ROUTES.ABOUT_ROUTE },
                { label: t('footer.links.services'), to: ROUTES.HOME_ROUTE },
                { label: t('footer.links.projects'), to: ROUTES.HOME_ROUTE },
                { label: t('footer.links.insights'), to: ROUTES.HOME_ROUTE },
            ],
        }
    ]

    const socialLinks: SocialLink[] = [
        { icon: SiFacebook, href: 'https://facebook.com' },
        { icon: SiX, href: 'https://twitter.com' },
        { icon: SiInstagram, href: 'https://instagram.com' },
        { icon: SiLinkedin, href: 'https://linkedin.com' },
    ]

    return <React.Fragment>

        <footer className='bg-[var(--dark-blue-color)] mt-5 text-[var(--light-gray-color)] pt-24 pb-8 common-p-inline sm:px-6 lg:px-16'>

            <div className='container mx-auto'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

                    <div className='space-y-6'>

                        <Link to={ROUTES.HOME_ROUTE}>
                            <img src={whiteLogo} alt="Connected Bridges Logo" className='w-40' />
                        </Link>

                        <p className='leading-relaxed'>
                            {t('footer.description')}
                        </p>

                    </div>

                    {footerLinks.map((section) => (

                        <div key={section.title}>

                            <h3 className='text-xl font-semibold mb-5 relative'>
                                <span className='absolute start-0 -bottom-2 h-0.5 w-12 bg-[var(--light-blue-color)]'></span>
                                {section.title}
                            </h3>

                            <ul className='space-y-4'>
                                {section.links.map((link) => (
                                    <li key={link.label} className='flex items-start gap-3'>
                                        {link.icon && <link.icon size={20} className='text-light-blue mt-1 flex-shrink-0' />}
                                        {link.to ?
                                            <Link to={link.to} className='hover:text-light-blue transition-colors duration-300'>
                                                {link.label}
                                            </Link>
                                            :
                                            <span>{link.label}</span>
                                        }
                                    </li>
                                ))}
                            </ul>

                        </div>

                    ))}

                    {/* Newsletter */}
                    <div className=''>
                        <h3 className='text-xl font-semibold mb-5 relative'>
                            {t('footer.newsletter.title')}
                            <span className='absolute left-0 -bottom-2 h-0.5 w-12 bg-light-blue'></span>
                        </h3>
                        <form className='mt-6 space-y-5'>
                            <div className='relative'>
                                <Mail size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray' />
                                <input
                                    type="email"
                                    placeholder={t('footer.newsletter.placeholder')}
                                    className='w-full bg-transparent border-b border-gray focus:border-light-blue outline-none py-3 px-10 text-white transition-colors duration-300'
                                />
                                <button type='submit' className='absolute right-3 top-1/2 -translate-y-1/2 text-gray hover:text-light-blue transition-colors duration-300'>
                                    <Send size={20} />
                                </button>
                            </div>
                            <div className='flex items-center gap-4 pt-2'>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.href}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='w-10 h-10 rounded-full bg-white/10 hover:bg-light-blue flex items-center justify-center text-white transition-all duration-300'
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </form>
                    </div>

                </div>

                <div className='mt-16 pt-8 border-t border-white/20 text-center text-sugar'>
                    <p>&copy; {new Date().getFullYear()} Connected Bridges. {t('footer.copyright')}</p>
                </div>

            </div>

        </footer>

    </React.Fragment>
}
