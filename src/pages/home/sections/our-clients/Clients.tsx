import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { clientsData, type ClientLogo } from '../../../../constants/clients';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import MainTitle from '../../../../components/titles/MainTitle';
import ClientCard from '../../../../components/cards/ClientCard';

function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
}

export default function Clients() {

    const { i18n } = useTranslation();
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

        <section className="mx-auto text-center common-p-inline w-full flex flex-col gap-7.5">

            <MainTitle title='overview.clients.title' />

            <Swiper
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                key={`${i18n.language}-${isSmallPcScreen}`}
                pagination={{clickable: true}}
                spaceBetween={30}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="w-full"
            >
                {clientsChunks.map((slideLogos, slideIndex) => (
                    <SwiperSlide key={`${slideIndex}-${slideLogos[0]?.id}`} className='w-full py-2.5 pb-12.5'>

                        <div className="flex flex-col items-center justify-center gap-5">

                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                {slideLogos.slice(0, rows).map((logo: ClientLogo) => (
                                    <ClientCard key={logo.id} logo={logo} />
                                ))}
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                {slideLogos.slice(rows).map((logo: ClientLogo) => (
                                    <ClientCard key={logo.id} logo={logo} />
                                ))}
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </section>

    </React.Fragment>

}
