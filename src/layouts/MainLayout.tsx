import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

    return <React.Fragment>

        <Header />

        <main className='min-h-[100dvh]'>
            <Outlet />
        </main>

        <Footer />

    </React.Fragment>

}
