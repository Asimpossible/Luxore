import { useGetCategoryDataQuery } from '@/redux/api/Products';
import React from 'react'
import './Products.scss'
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Index: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState(1);
    const [selectedCategory, setSelectedCategory] = React.useState<string>("men's clothing")
    const [expandedTitles, setExpandedTitles] = React.useState<{ [key: string]: boolean }>({})
    const { data: categoryData, isLoading, isError: categoryError } = useGetCategoryDataQuery(selectedCategory)

    if (isLoading) return <Loading />
    if (categoryError) console.log('Error ocurred about category', categoryError)

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    const toggleExpanded = (id: number) => {
        setExpandedTitles((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const renderTitle = (title: string, isExpanded: boolean) => {
        const maxLength = 30;
        return isExpanded || title.length <= maxLength
            ? title
            : `${title.substring(0, maxLength)}...`
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
                <div className="products flex flex-wrap gap-6 justify-between py-12 overflow-y-auto">
                    {
                        categoryData?.map((item, index) => {
                            const isExpanded = !!expandedTitles[item.id]
                            return (
                                <div key={index} className="card h-[27rem] flex flex-col justify-around bg-white rounded-xl p-2 my-2 cursor-pointer w-[240px] pb-3">
                                    <div className="cardImg w-full h-44 p-2 bg-white">
                                        <img className='w-full h-full' src={item.image} alt="" />
                                    </div>
                                    <div className={`title pt-3 font-bold  ${isExpanded ? 'text-base' : 'text-lg'}`}>
                                        {renderTitle(item.title, isExpanded)}
                                        {item.title.length > 30 && (
                                            <span onClick={() => toggleExpanded(item.id)} className="cursor-pointer text-blue-500 !text-xl ">
                                                {isExpanded ? <span className='text-lg'> <br />Show less</span> : <span className='text-lg'><br /> Read more</span>}
                                            </span>
                                        )}
                                    </div>
                                    <Link to={`/products/${item.id}`} className='flex flex-col justify-around items-center'>
                                        <button className='detailBtn mt-5 mx-2 font-semibold'>
                                            View Details
                                        </button>
                                    </Link>
                                </div>)
                        })
                    }
                </div>
                <div>
                </div>
            </div >
        </>
    )
}

export default Index