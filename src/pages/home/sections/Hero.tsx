import React from 'react'

export default function Hero() {

    return <React.Fragment>

        <section className='relative w-full h-[100dvh] bg-[var(--light-blue-color)] overflow-hidden'>

            <div className='absolute top-0 left-0 w-full h-full bg-[var(--dark-blue-opacity-color)] z-30'></div>

            <video 
                src="https://neom.scene7.com/is/content/neom/20250626_REDEFINING_16X9_4K_MASTER_V9_WEB-3" 
                autoPlay muted loop className='w-full h-full object-cover scale-150' 
            />

        </section>

    </React.Fragment>

}
