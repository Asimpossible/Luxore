import { Products, SliderComponent, Sorting } from '@/shared/components'
import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <SliderComponent />
            <Sorting />
            <Products />
        </>
    )
}

export default Index
