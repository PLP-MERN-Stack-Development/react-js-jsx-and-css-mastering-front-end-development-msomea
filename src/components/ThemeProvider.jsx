
import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function useTheme(){ return useContext(ThemeContext) }

export default function ThemeProvider({ children }){
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved || 'light'
})


useEffect(()=>{
    const root = document.documentElement
    if(theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
}, [theme])


return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
        </ThemeContext.Provider>
    )
}


export function ThemeToggle(){
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-1 border rounded">
            {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
    )
}