import React from 'react'
import './Loading.scss'

const Loading: React.FC = () => {
    return (
        <>
            <div className='h-screen flex justify-center items-center'>
                <div className="textWrapper">
                    <p className="text">Loading...</p>
                    <div className="invertbox"></div>
                </div>
            </div>
        </>
    )
}

export default Loading
