import React from 'react'


export default function Card({ children, className='' }){
return (
<div className={`p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 ${className}`}>
{children}
</div>
)
}