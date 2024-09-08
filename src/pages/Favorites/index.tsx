import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { clearFavorites } from '@/redux/features/Cart/CartSlice'
import '../Basket/Basket.scss'
import { IProduct } from '@/types'

const FavoritesPage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    const favorites = useAppSelector(state => state.reducer.favorites)
    const [expandedTitles, setExpandedTitles] = React.useState<{ [key: string]: boolean }>({})

    const dispatch = useAppDispatch()

    // Loading state and error handling for individual product fetching
    if (favorites.length === 0) return <div className='mt-64 mb-[333px] text-red-700 flex justify-center items-center text-3xl font-bold cursor-default'>No favorite products added...</div>

    const toggleExpanded = (id: number) => {
        setExpandedTitles((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const renderTitle = (title: string, isExpanded: boolean) => {
        const maxLength = 30;
        return isExpanded || title?.length <= maxLength
            ? title
            : `${title?.substring(0, maxLength)}...`
    }

    return (
        <>
            <div className='flex justify-around mt-36'>
                <div className="del">
                    <div onClick={() =>
                        dispatch(clearFavorites())
                    }>
                        Clear Favorites
                    </div>
                </div>
            </div>
            <div className="products flex flex-wrap gap-16 items-center justify-center px-24 mt-16 py-12 overflow-y-auto mb-12">
                {
                    favorites.map((product: IProduct) => {
                        const isExpanded = !!expandedTitles[product?.id]
                        return (
                            <div key={product?.id} className="card h-[27rem] flex flex-col justify-around bg-white rounded-xl p-2 my-2 cursor-pointer shadow-rgba(0, 0, 0, 0.15) w-[240px] pb-3">
                                <div className="cardImg w-full h-44 p-2 bg-white">
                                    <img className='w-full h-full' src={product?.image} alt="" />
                                </div>
                                <div className={`title pt-3 font-bold  ${isExpanded ? 'text-base' : 'text-lg'}`}>
                                    {renderTitle(product?.title as string, isExpanded)}
                                    {product?.title?.length as number > 30 && (
                                        <span onClick={() => toggleExpanded(product?.id as number)} className="cursor-pointer text-blue-500 !text-xl ">
                                            {isExpanded ? <span className='text-lg'> <br />Show less</span> : <span className='text-lg'><br /> Read more</span>}
                                        </span>
                                    )}
                                </div>
                                <Link to={`/products/${product?.id}`} className='flex flex-col justify-around items-center'>
                                    <button className='detailBtn mt-5 mx-2 font-semibold'>
                                        View Details
                                    </button>
                                </Link>
                            </div>)
                    })
                }
            </div>
        </>
    )
}

export default FavoritesPage
