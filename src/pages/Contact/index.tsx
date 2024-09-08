import React from 'react'
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";



const Index: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <div className="contact">
                <div className="heading">
                    <div className="w-full h-56 absolute top-24 mb-96 inset-0 bg-cover bg-center transition-opacity duration-300 bg-[url('https://www.redspider.ae/wp-content/uploads/2020/06/ecommerce-seo-tips.jpg')] opacity-90">
                        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-70 hover:opacity-80"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center h-full pt-44 text-white">
                        <h2 className="font-bold text-center cursor-default text-4xl">Contact</h2>
                    </div>
                </div>
                <div className="content flex mx-20 mt-44 mb-8 border-2 border-solid border-gray-400 h-[540px]">
                    <div className="content__left py-8 gap-16 flex flex-col flex-1 items-center justify-center border-r-2 border-solid border-gray-400">
                        <div className="title text-2xl font-Lato font-semibold">Send Us A Message</div>
                        <form className='flex flex-col gap-12'>
                            <div className="emailInput border border-solid border-gray-900 w-96 h-12 flex items-center">
                                <span className='p-1 text-3xl text-gray-400'><MdMailOutline /></span>
                                <input className='focus:outline-none' type="text" placeholder='Your Email Address' />
                            </div>
                            <textarea className='border border-solid border-gray-400 focus:outline-none p-2 !w-96 !min-h-32 !max-h-52 resize-y' placeholder='How can we help?' name="" id=""></textarea>
                            <button type='submit' className='bg-black text-white py-2 w-64 ml-16 text-center rounded-lg'>Submit</button>
                        </form>
                    </div>
                    <div className="content__right flex flex-col justify-center gap-12 items-start py-8 flex-1">
                        <div className="address ml-16  items-center flex gap-5 font-light">
                            <div className="logo text-center"><span className='text-2xl'><CiLocationOn /></span></div>
                            <div className="content">
                                <div className="title text-2xl">Address</div>
                                <div className="desc mt-2 text-sm text-gray-600 w-[240px]">Luxore Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</div>
                            </div>
                        </div>

                        <div className="phone ml-16 items-center flex gap-5 font-light">
                            <div className="logo text-center"><span className='text-2xl'><MdOutlinePhone /></span></div>
                            <div className="content">
                                <div className="title text-2xl">Phone</div>
                                <div className="desc mt-2 w-[240px] text-base text-blue-500 cursor-pointer">+1 800 1236879</div>
                            </div>
                        </div>

                        <div className="phone ml-16 flex items-center gap-5">
                            <div className="logo text-center"><span className='text-2xl'><MdMailOutline /></span></div>
                            <div className="content">
                                <div className="title text-2xl font-light">Sale Support</div>
                                <div className="desc mt-2 w-[240px] text-base text-blue-500 cursor-pointer">contact@example.com</div>
                            </div>
                        </div>

                        <div className="mail"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
