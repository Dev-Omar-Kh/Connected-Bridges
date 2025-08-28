import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const routes = createHashRouter([

    {path: '/', element: <MainLayout><h1>Home</h1></MainLayout>},
    {path: '/about', element: <MainLayout><h1>About</h1></MainLayout>},

])

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
