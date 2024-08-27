import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
    return (
        <>
            <div className="header w-full flex justify-between px-20 py-5 shadow-xl">
                <ul>
                    <li className='cursor-pointer text-3xl font-mono text-yellow-800'>
                        <Link to={'/'}>Luxore</Link>
                    </li>
                </ul>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className=" text-yellow-800 text-xl flex items-center justify-center gap-3">
                    <div className="search__input flex items-center">
                        <input type="text" placeholder='Search..' className='border-b-2 border-yellow-800 focus:outline-none p-1' />
                        <FaSearch className='cursor-pointer' />
                    </div>
                    <CiHeart className='text-3xl cursor-pointer text-red-600' />
                    <div className='absolute right-20 top-0 bg-slate-400 rounded-full p-1 text-base '>3</div>
                    <div className="header__basket">
                        <SlBasket className='cursor-pointer p-1.5 border-2 border-solid border-current rounded-full size-9 box-border' />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Index
