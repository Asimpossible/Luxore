import { Products, SliderComponent, Sorting } from '@/shared/components'
import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='bg-zinc-100'>
                <SliderComponent />
                <Sorting />
                <Products />
            </div>
        </>
    )
}

export default Index
