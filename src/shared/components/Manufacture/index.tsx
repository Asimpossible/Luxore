import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='commonDiv h-[662px] flex pt-12 w-full'>
                <div className="leftSide w-3/5">
                    <img className=" w-full h-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="rightSide pl-8 w-2/5 h-full bg-[#dbd9da] flex flex-col justify-center gap-4">
                    <div className="title font-bold text-2xl">BEST PRODUCT MANUFACTURER</div>
                    <div className="desc text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum iusto nesciunt mollitia dolorum provident excepturi. Ex suscipit perferendis molestias, animi expedita rerum a ea.</div>
                </div>
            </div>
        </>
    )
}

export default Index
