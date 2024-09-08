import { Advantages, Manufacture, Products, SliderComponent } from '@/shared/components'
import React from 'react'

const Index: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
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
