import React from 'react'

const Sorting: React.FC = () => {
    return (
        <>
            <div className='selectDiv flex justify-end py-3 my-5 mx-4'>
                <select name="" id="" className='border-none outline-none rounded-lg p-1 text-neutral-600'>
                    <option disabled value="" className=' text-stone-500'>Choose</option>
                    <option value="">Increasing</option>
                    <option value="">Decreasing</option>
                </select>
            </div>
        </>
    )
}

export default Sorting
