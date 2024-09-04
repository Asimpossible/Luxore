import { useGetCategoryDataQuery } from '@/redux/api/Products';
import React from 'react'
import './Products.scss'
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Index: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState(1);
    const [selectedCategory, setSelectedCategory] = React.useState<string>("men's clothing")
    const { data: categoryData, isLoading, isError: categoryError } = useGetCategoryDataQuery(selectedCategory)

    if (isLoading) return <Loading />
    if (categoryError) console.log('Error ocurred about category', categoryError)

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }



    return (
        <>
            <div className="popularProducts min-h-screen px-20 cursor-default">
                <div className="heading flex flex-col justify-center items-center ">
                    <div className="title font-Lato font-semibold flex justify-center text-4xl leading-10 pt-16 pb-5">Popular Products</div>
                    <div className="description font-sans text-gray-500 text-base w-[30rem] text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem facere dolor quo quisquam dicta assumenda. Error repudiandae iusto molestiae!
                    </div>
                </div>
                <div className="categories mt-16 border-b-2 border-solid border-gray-400">
                    <ul className='flex justify-around mb-7'>
                        <li
                            tabIndex={0}
                            className={`focus:border-b-2 focus:pb-2 focus:border-orange-700 cursor-pointer ${activeItem === 1 ? 'border-b-2 border-orange-700 pb-2' : ''
                                }`}
                            onClick={() => {
                                setActiveItem(1)
                                handleCategoryClick("men's clothing")
                            }
                            }
                        >
                            Men's Clothing
                        </li>
                        <li
                            tabIndex={0}
                            className={`focus:border-b-2 focus:pb-2 focus:border-orange-700 cursor-pointer ${activeItem === 2 ? 'border-b-2 border-orange-700 pb-2' : ''
                                }`}
                            onClick={() => {
                                setActiveItem(2)
                                handleCategoryClick("women's clothing")
                            }
                            }
                        >
                            Women's Clothing
                        </li>
                        <li
                            tabIndex={0}
                            className={`focus:border-b-2 focus:pb-2 focus:border-orange-700 cursor-pointer ${activeItem === 3 ? 'border-b-2 border-orange-700 pb-2' : ''
                                }`}
                            onClick={() => {
                                setActiveItem(3)
                                handleCategoryClick('jewelery')
                            }}
                        >
                            Jewellery
                        </li>
                        <li
                            tabIndex={0}
                            className={`focus:border-b-2 focus:pb-2 focus:border-orange-700 cursor-pointer ${activeItem === 4 ? 'border-b-2 border-orange-700 pb-2' : ''
                                }`}
                            onClick={() => {
                                setActiveItem(4)
                                handleCategoryClick('electronics')
                            }}
                        >
                            Electronics
                        </li>
                    </ul>
                </div>
                <div className="products flex flex-wrap justify-between py-12 overflow-y-auto">
                    {
                        categoryData?.map((item, index) => (
                            <div key={index} className="card bg-white rounded-xl p-2 h-full my-2 cursor-pointer shadow-rgba(0, 0, 0, 0.15) w-[240px] pb-3">
                                <Link to={`/products/${item.id}`} className='flex flex-col justify-around items-center'>
                                    <div className="cardImg w-full h-44 p-2 bg-white">
                                        <img className='w-full h-full' src={item.image} alt="" />
                                    </div>
                                    <div className="cardTitle mt-3 text-xl text-center font-bold px-2">{item.title}</div>
                                    <button className='detailBtn mt-5 mx-2 font-semibold'>
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div>
                </div>
            </div >
        </>
    )
}

export default Index