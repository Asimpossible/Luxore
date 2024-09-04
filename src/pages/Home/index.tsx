import { Advantages, Manufacture, Products, SliderComponent } from '@/shared/components'
import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='bg-zinc-100'>
                <SliderComponent />
                <Products />
                <Manufacture />
                <Advantages />
            </div>
        </>
    )
}

export default Index
