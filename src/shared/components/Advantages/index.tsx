import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentLine, Ri24HoursLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";



const Index: React.FC = () => {
    return (
        <>
            <div className="advantages bg-[#dbd9da] px-20 py-8 flex justify-center items-center w-full h-[22rem] mt-24">
                <div className="cards w-full h-full flex justify-between">
                    <div className="card w-[320px] h-full shadow-none flex flex-col items-center justify-center">
                        <div className="cardLogo mt-2 w-56 h-32"><FaTruckFast className='w-full h-full text-gray-700' /></div>
                        <div className="cardTitle mt-8 mb-2 text-xl">Fast & Free Delivery</div>
                        <div className="cardDesc text-lg text-gray-400">Free delivery on all orders</div>
                    </div>
                    <div className="card w-[320px] h-full shadow-none flex flex-col items-center justify-center">
                        <div className="cardLogo mt-2 w-56 h-32"><RiSecurePaymentLine className='w-full h-full text-gray-700' /></div>
                        <div className="cardTitle mt-8 mb-2 text-xl">Secure Payment</div>
                        <div className="cardDesc text-lg text-gray-400">Free delivery on all orders</div>
                    </div>
                    <div className="card w-[320px] h-full shadow-none flex flex-col items-center justify-center">
                        <div className="cardLogo mt-2 w-56 h-32"><GiMoneyStack className='w-full h-full text-gray-700' /></div>
                        <div className="cardTitle mt-8 mb-2 text-xl">Money Back Guarantee</div>
                        <div className="cardDesc text-lg text-gray-400">Free delivery on all orders</div>
                    </div>
                    <div className="card w-[320px] h-full shadow-none flex flex-col items-center justify-center">
                        <div className="cardLogo mt-2 w-56 h-32"><Ri24HoursLine className='w-full h-full text-gray-700' /></div>
                        <div className="cardTitle mt-8 mb-2 text-xl">Support Online</div>
                        <div className="cardDesc text-lg text-gray-400">Free delivery on all orders</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
