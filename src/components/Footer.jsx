import React from 'react'


export default function Footer(){
return (
        <footer className="w-full border-t dark:border-gray-700 mt-8">
            <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-center opacity-80">
                © {new Date().getFullYear()} Week3Workshop — Built with React + Tailwind
            </div>
        </footer>
    )
}