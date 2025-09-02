import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { clientsData, type ClientLogo } from '../../../../constants/clients';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
}

export default function Clients() {

    const { t, i18n } = useTranslation();
    const isSmallPcScreen = useMediaQuery('(max-width: 1270px)');
    const isTabletScreen = useMediaQuery('(max-width: 840px)');
    const isMobileScreen = useMediaQuery('(max-width: 625px)');

    let chunks;
    let rows;

    if (isMobileScreen) {
        chunks = 4;
        rows = 2;
    } else if (isTabletScreen) {
        chunks = 6;
        rows = 3;
    } else if (isSmallPcScreen) {
        chunks = 8;
        rows = 4;
    } else {
        chunks = 11;
        rows = 6;
    }

    const clientsChunks = chunkArray(clientsData, chunks);

    return <React.Fragment>

        <div className="mx-auto text-center common-p-inline w-full flex flex-col gap-7.5">

            <h2 
                className={`
                    text-4xl font-bold ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} pb-2.5
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent max-[515px]:text-2xl
                `}
            >
                {t('overview.clients.title')}
            </h2>

            <Swiper
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                key={`${i18n.language}-${isSmallPcScreen}`}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="w-full"
            >
                {clientsChunks.map((slideLogos, slideIndex) => (
                    <SwiperSlide key={`${slideIndex}-${slideLogos[0]?.id}`} className='w-full py-2.5'>

                        <div className="flex flex-col items-center justify-center gap-5">

                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                {slideLogos.slice(0, rows).map((logo: ClientLogo) => (
                                    <div 
                                        key={logo.id} 
                                        className="
                                            h-44 w-44 p-4 flex items-center justify-center bg-[var(--white-color)]  rounded-xl overflow-hidden
                                            shadow-md max-[410px]:h-32 max-[410px]:w-32 cursor-pointer
                                        "
                                    >
                                        <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain rounded-xl" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                {slideLogos.slice(rows).map((logo: ClientLogo) => (
                                    <div 
                                        key={logo.id} 
                                        className="
                                            h-44 w-44 p-4 flex items-center justify-center bg-[var(--white-color)] rounded-xl overflow-hidden
                                            shadow-md max-[410px]:h-32 max-[410px]:w-32 cursor-pointer
                                        "
                                    >
                                        <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain rounded-xl" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    </React.Fragment>
}
