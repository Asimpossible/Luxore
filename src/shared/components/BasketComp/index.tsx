import { IBasketCompProps } from '@/types'
import './BasketComp.scss'
import React from 'react'
import { useAppDispatch } from '@/redux/store'
import { removeFromBasket } from '@/redux/features/Cart/CartSlice'

const Index: React.FC<IBasketCompProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="card cursor-default flex items-center justify-around px-5">
                <div className="img w-[18rem] h-72 py-3">
                    <img className='w-full h-full' src={product.image} alt="" />
                </div>
                <div className="desc">
                    <div className="title text-3xl w-96 font-semibold">{product.title}
                        <br /> <br /> Quantity: <span className='text-red-700'>{product.quantity}</span>
                    </div>
                    <div className="price pt-12 text-2xl font-bold text-red-700">$ {product.price}</div>
                </div>
                <div onClick={(e) => {
                    e.preventDefault()
                    dispatch(removeFromBasket(product.id))
                }}>
                    <button className="bin-button">
                        <svg
                            className="bin-top"
                            viewBox="0 0 39 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                            <line
                                x1="12"
                                y1="1.5"
                                x2="26.0357"
                                y2="1.5"
                                stroke="white"
                                strokeWidth="3"
                            ></line>
                        </svg>
                        <svg
                            className="bin-bottom"
                            viewBox="0 0 33 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="path-1-inside-1_8_19" fill="white">
                                <path
                                    d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                ></path>
                            </mask>
                            <path
                                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                fill="white"
                                mask="url(#path-1-inside-1_8_19)"
                            ></path>
                            <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                            <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Index
