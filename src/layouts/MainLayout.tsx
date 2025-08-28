import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function MainLayout({children}: {children: React.ReactNode}) {

    return <React.Fragment>

        <Header />

        {children}

        <Footer />

    </React.Fragment>

}
