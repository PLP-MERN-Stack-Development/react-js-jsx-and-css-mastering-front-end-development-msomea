import React from 'react'
import { Link } from 'react-router'
import ThemeToggle from './ThemeToggle'


export default function Navbar(){
return (
    <nav className="w-full border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link to="/" className="text-xl font-bold">Week3Workshop</Link>
                <Link to="/posts" className="text-sm opacity-80">Posts</Link>
            </div>
            <div className="flex items-center gap-3">
                <ThemeToggle />
            </div>
        </div>
    </nav>
)
}