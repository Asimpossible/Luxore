import { useAppDispatch, useAppSelector } from '@/redux/store'
import { BasketComp } from '@/shared/components';
import { IProduct } from '@/types';
import React from 'react'
import { Link } from 'react-router-dom';
import './Basket.scss'
import { clearBasket } from '@/redux/features/Cart/CartSlice';

const Index: React.FC = () => {
    const { basket, totalPrice } = useAppSelector(state => state.reducer)
    const dispatch = useAppDispatch()
    return (
        <>
            <div className='mt-20 pl-20'>
                <Link to={'/'} className='px-12 '>
                    <button className="cta flex items-center font-semibold">
                        <span className="btnSpan hover-underline-animation"> Go Home </span>
                        <svg className='homeSvg'
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                        >
                            <path
                                id="Path_10"
                                data-name="Path 10"
                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                transform="translate(30)"
                            ></path>
                        </svg>
                    </button></Link>
            </div>
            {
                basket.length > 0 ?
                    <div className='pt-8 flex flex-col gap-10'>
                        <div className='flex justify-around'>
                            <div className="del">
                                <div onClick={() =>
                                    dispatch(clearBasket())
                                }>
                                    Clear Basket
                                </div>
                            </div>
                        </div>

                        {
                            basket?.map((product: IProduct, index) => {
                                return (<BasketComp key={index} product={product} />)
                            }
                            )
                        }
                        <div className='flex justify-around'>
                            <div className='text-2xl mb-12 pl-12 font-bold'>Total Price: <span className='text-red-700'>${totalPrice.toFixed(2)}</span></div>

                        </div>

                    </div> :
                    <h3 className=' cursor-default flex justify-center items-center py-96 text-3xl font-medium'>Basket is empty..</h3>
            }
        </>
    )
}

export default Index
