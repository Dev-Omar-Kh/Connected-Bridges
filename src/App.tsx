import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import { useTranslation } from 'react-i18next';
import Error from './pages/error/Error';

const routes = createHashRouter([

    {path: '/', element: <MainLayout />, children: [
        {index: true, element: <Home />},
    ]},

    {path: '*', element: <Error />}

]);

export default function App() {

    const { i18n } = useTranslation();

    useEffect(() => {

        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;

        document.documentElement.lang = i18n.language;

    }, [i18n.language]);

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}