import { useGetProductsQuery } from '@/redux/api/Products'
import Loading from '@/shared/components/Loading'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../shared/components/Products/Products.scss'

const Index: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    const { data: products, isLoading, isError } = useGetProductsQuery()
    const [expandedTitles, setExpandedTitles] = React.useState<{ [key: string]: boolean }>({})

    if (isLoading) return <Loading />
    if (isError) return <div>Error fetching data</div>

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
            <div className="popularProducts mt-12 min-h-screen px-20 cursor-default">
                <div className="heading mb-36">
                    <div className="w-full h-56 absolute top-24 mb-96 inset-0 bg-cover bg-center transition-opacity duration-300 bg-[url('https://www.redspider.ae/wp-content/uploads/2020/06/ecommerce-seo-tips.jpg')] opacity-90">
                        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-70 hover:opacity-80"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center h-full pt-32 text-white">
                        <h2 className="font-bold cursor-default text-4xl">Products</h2>
                    </div>
                </div>
                <div className="products flex flex-wrap justify-between py-12 gap-5 overflow-y-auto">
                    {
                        products?.map((item, index) => {
                            const isExpanded = !!expandedTitles[item.id]
                            return (
                                <div key={index} className="card h-[27rem] flex flex-col justify-around bg-white rounded-xl p-2 my-2 cursor-pointer shadow-rgba(0, 0, 0, 0.15) w-[240px] pb-3">
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
