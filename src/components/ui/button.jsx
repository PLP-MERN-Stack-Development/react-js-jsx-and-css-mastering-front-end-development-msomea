import React from 'react'


const variants = {
primary: 'bg-blue-600 hover:bg-blue-700 text-white',
secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
danger: 'bg-red-600 hover:bg-red-700 text-white'
}


export default function Button({ children, variant='primary', className='', ...rest }){
return (
<button className={`px-4 py-2 rounded-md font-medium ${variants[variant]} ${className}`} {...rest}>
{children}
</button>
)
}