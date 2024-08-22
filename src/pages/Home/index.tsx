import { SliderComponent } from '@/shared/components'
import React from 'react'

const Index: React.FC = () => {
    console.log('Home page downloaded')
    return (
        <>
            <div className='my-10'>
                <SliderComponent />
            </div>
        </>
    )
}

export default Index
