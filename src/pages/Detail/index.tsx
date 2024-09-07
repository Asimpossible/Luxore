import { useGetProductByIdQuery } from '@/redux/api/Products'
import Loading from '@/shared/components/Loading'
import React from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { addToBasket, addToFavorites, removeFromFavorites } from '@/redux/features/Cart/CartSlice'
import { IProduct } from '@/types'

const Index: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id)
    const { data: products, isLoading, isError } = useGetProductByIdQuery(productId || 0)
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.reducer.favorites)
    const isFavorited = favorites.some((fav: IProduct) => fav.id === products?.id)
    console.log("Is Favorited", isFavorited)
    const [stateQuantity, setQuantity] = React.useState<number>(1)
    const [isTitleExpanded, setIsTitleExpanded] = React.useState(false);
    const [isDescExpanded, setIsDescExpanded] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState<boolean>(true);

    const handleAddToBasket = (product: IProduct) => {
        dispatch(
            addToBasket(
                {
                    title: product?.title as string,
                    description: product?.description as string,
                    category: product?.category as string,
                    id: product?.id as number,
                    image: product?.image as string,
                    price: product?.price as number,
                    rating: product?.rating as { rate: number, count: number },
                    quantity: stateQuantity
                }))
    }

    const handleAddToFavorites = (id: number) => {

        if (isFavorited) {
            dispatch(removeFromFavorites(id))
        }
        else {
            dispatch(addToFavorites(products as IProduct))
        }
        setIsChecked(!isChecked)
    }


    if (isLoading) return <Loading />
    if (isError) return <div>Error loading product...</div>

    //Shorter title text
    const toggleTitleText = () => {
        setIsTitleExpanded(!isTitleExpanded);
    }

    //Shorter description text
    const toggleDescText = () => {
        setIsDescExpanded(!isDescExpanded);
    }

    const increment = () => {
        if (products?.rating?.count && stateQuantity < products?.rating?.count) {
            setQuantity(Number(stateQuantity + 1))
        }
    }

    const decrement = () => {
        if (stateQuantity > 1) {
            setQuantity(Number(stateQuantity) - 1)
        }
    }

    return (
        <>
            <div className='detail pt-[150px] flex justify-center items-center'>
                <div className={`productDiv mb-16 bg-slate-100 cursor-default rounded-xl !w-[60rem] flex ${isTitleExpanded ? "h-[30rem]" : "h-[30rem]"} ${isDescExpanded ? "h-auto" : "h-[30rem]"}`}>
                    <div className="productImg w-[55%] pr-4">
                        <img className='w-full h-full rounded-l-xl' src={products?.image} alt="" />
                    </div>
                    <div className="productDesc py-12 px-5 flex flex-col justify-around items-start">
                        <div className={`title font-bold !w-80  ${isTitleExpanded ? 'text-xl' : 'text-2xl'}`}>
                            {isTitleExpanded ? products?.title : `${products?.title?.slice(0, 30)}...`}
                            <span onClick={toggleTitleText} className="cursor-pointer text-blue-500 !text-xl ">
                                {isTitleExpanded ? <span> <br />Show less</span> : <span><br /> Read more</span>}
                            </span>
                        </div>

                        <div className={`desc !w-96 font-normal text-gray-500 h-auto`}>
                            {isDescExpanded ? products?.description : `${products?.description?.slice(0, 100)}...`}
                            <span onClick={toggleDescText} className="cursor-pointer text-blue-500">
                                {isDescExpanded ? <span> <br />Show less</span> : <span><br /> Read more</span>}
                            </span>
                        </div>

                        <div className="rating">
                            <div className="rate font-medium text-red-600">Rate: {products?.rating.rate}</div>
                            <div className="rate font-medium text-red-600">Count: {products?.rating.count}</div>
                        </div>
                        <div className="countDiv flex justify-center text-xl items-center text-center">
                            <div className='cursor-pointer border roder-solid py-2 px-3 text-center focus:bg-none active:bg-none' onClick={() => increment()}>+</div>
                            <input className='w-10 bg-slate-100 text-center cursor-default pointer-events-none' type="text" value={stateQuantity} readOnly />
                            <div className='cursor-pointer border roder-solid py-2 px-3 text-center' onClick={decrement}>-</div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='addBtn mt-5 rounded-md' onClick={(e) => {
                                e.preventDefault()
                                handleAddToBasket(products as IProduct)
                            }}>
                                <div className="default-btn">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="cart-icon"
                                    >
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path
                                            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                                        ></path>
                                    </svg>
                                    <span>Add to Cart</span>
                                </div>
                                <div className="hover-btn">
                                    <svg
                                        viewBox="0 0 320 512"
                                        width="12.5"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                                            fill="#ffffff"
                                        ></path>
                                    </svg>
                                    <span>{products?.price}</span>
                                </div>
                            </button>

                            <div className='addToFav'>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    id="favorite"
                                    name="favorite-checkbox"
                                    value="favorite-button"
                                    onClick={() => handleAddToFavorites(products?.id as number)}
                                    onChange={() => handleAddToFavorites(products?.id as number)}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="favorite" className="container" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-heart"
                                        style={{
                                            fill: isFavorited ? 'hsl(0deg 100% 50%)' : 'none',
                                            stroke: isFavorited ? 'hsl(0deg 100% 50%)' : 'currentColor',
                                            transition: 'all 0.5s',
                                        }}
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <div className="action" >
                                        <span className={`option-1`} style={{ opacity: isFavorited ? 1 : 0, transform: isFavorited ? 'translate(0, 0)' : 'translate(0, -100%)', transition: 'all 0.5s' }}>
                                            Added to Favorites
                                        </span>
                                        <span className="option-2" style={{ opacity: isFavorited ? 0 : 1, transform: isFavorited ? 'translate(0, 100%)' : 'translate(0, 0)', transition: 'all 0.5s' }}>
                                            Add to Favorites
                                        </span>
                                    </div>
                                </label>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Index

/*
<input
                                    type="checkbox"
                                    checked={isChecked}
                                    id="favorite"
                                    name="favorite-checkbox"
                                    value="favorite-button"
                                    onChange={() => handleAddToFavorites(products?.id as number)}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="favorite" className="container" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-heart"
                                        style={{
                                            fill: isFavorited ? 'hsl(0deg 100% 50%)' : 'none',
                                            stroke: isFavorited ? 'hsl(0deg 100% 50%)' : 'currentColor',
                                            transition: 'all 0.5s',
                                        }}
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <div className="action" >
                                        <span className={`option-1`} style={{ opacity: isFavorited ? 1 : 0, transform: isFavorited ? 'translate(0, 0)' : 'translate(0, -100%)', transition: 'all 0.5s' }}>
                                            Added to Favorites
                                        </span>
                                        <span className="option-2" style={{ opacity: isFavorited ? 0 : 1, transform: isFavorited ? 'translate(0, 100%)' : 'translate(0, 0)', transition: 'all 0.5s' }}>
                                            Add to Favorites
                                        </span>
                                    </div>
                                </label>
*/