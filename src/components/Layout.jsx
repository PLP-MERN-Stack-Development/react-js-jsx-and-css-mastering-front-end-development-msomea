import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout(){
return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
            <Outlet />
            </main>
            <Footer />
        </div>
    )
}