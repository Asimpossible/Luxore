import React from 'react'

const Index: React.FC = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='flex justify-center gap-2 p-10  bg-slate-400'>
            Copyright<span>&copy;</span><span className='font-bold'>{currentYear}</span> My Website. All Rights Reserved.
        </div>
    )
}

export default Index
