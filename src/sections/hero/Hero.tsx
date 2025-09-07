import { Headset, LayoutDashboard } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {

    const { t, i18n } = useTranslation();
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const ctaBtns = [
        {id: 1, label: t('hero.consultation'), href: '/', icon: Headset, variant: 'primary'},
        {id: 2, label: t('hero.projects'), href: '/', icon: LayoutDashboard, variant: 'secondary'},
    ]

    return <React.Fragment>

        <section 
            className={`
                relative w-full h-[100dvh] bg-[var(--light-blue-color)] overflow-hidden
                ${i18n.language === 'en' ? 'max-[515px]:h-[110dvh]' : ''}
            `}
        >

            <div 
                className={`
                    absolute top-0 left-0 right-0 w-full h-full bg-[var(--dark-blue-opacity-color)] z-30 
                    flex items-center justify-center flex-col gap-10 common-p-block common-p-inline
                    ${i18n.language === 'en' ? 'max-[515px]:pt-20' : ''}
                `}
            >

                <h1 
                    className='
                        text-[var(--white-color)] w-full max-w-3xl text-center text-5xl font-bold 
                        tracking-wider max-lg:text-4xl max-md:text-3xl max-sm:text-2xl glowing-text
                    '
                >
                    {t('hero.title')}
                </h1>

                <p className='text-[var(--white-color)] w-full max-w-4xl text-center text-lg max-md:text-base max-sm:text-sm'>
                    {t('hero.description')}
                </p>

                <div className='w-full flex flex-wrap items-center justify-center gap-4'>

                    {ctaBtns.map((ctaBtn) => (
                        <Link 
                            to={ctaBtn.href} key={ctaBtn.id}
                            className={`
                                px-5 py-2.5 rounded-md flex items-center gap-2.5 text-lg max-[555px]:text-base max-[440px]:justify-center
                                duration-300 hover:scale-102 font-semibold glowing-button-animation max-[440px]:w-full max-[350px]:text-sm
                                ${ctaBtn.variant === 'primary' 
                                    ? `
                                        ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} 
                                        from-[var(--light-blue-color)] to-[var(--dark-blue-color)] text-[var(--white-color)]
                                    ` 
                                    : 'bg-[var(--white-color)] text-[var(--blue-color)]'
                                }
                            `}
                        >
                                <ctaBtn.icon size={24} />
                                <p 
                                    className={
                                        ctaBtn.variant !== 'primary' 
                                        ? `
                                            ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} 
                                            from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent
                                        ` 
                                        : ''
                                    }
                                >
                                    {ctaBtn.label}
                                </p>
                        </Link>
                    ))}

                </div>

            </div>

            <div className="absolute inset-0 z-10">
                <video 
                    style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                    src="https://neom.scene7.com/is/content/neom/20250626_REDEFINING_16X9_4K_MASTER_V9_WEB-3" 
                    autoPlay muted loop className='w-full h-full object-cover scale-150'
                />
            </div>

        </section>

    </React.Fragment>

}
