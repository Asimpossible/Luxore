import React from 'react'

const Index: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <div className="about pt-28 
            max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
                <div className="heading  
                max-md:flex max-md:w-screen max-md:justify-center max-md:items-center">
                    <div className="w-full h-56 absolute top-24 mb-96 inset-0 bg-cover bg-center transition-opacity duration-300 bg-[url('https://www.redspider.ae/wp-content/uploads/2020/06/ecommerce-seo-tips.jpg')] opacity-90
                    max-md:w-full
                    ">
                        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-70 hover:opacity-80"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center h-full pt-16 text-white">
                        <h2 className="font-bold text-center cursor-default text-4xl">About Us</h2>
                    </div>
                </div>
                <div className="content py-12 mb-12 mt-36 px-20 s-9/12 grid">
                    <div className="ourstory col-end-1 mr-5">
                        <div className="title text-3xl font-bold mb-8">Our Story</div>
                        <div className="desc w-[40rem] text-base"><span className='font-semibold'>Luxore</span> website is an online platform that allows businesses or individuals to sell products and services over the internet. It provides a digital storefront where customers can browse, select, and purchase items from various categories such as fashion, electronics, home goods, and more. These websites typically include essential features like product listings, shopping carts, secure payment gateways, user accounts, and customer reviews.

                            The primary goal of an e-commerce website is to create a seamless and engaging shopping experience for users. Key functionalities often include product search, filtering options, detailed product descriptions, and high-quality images. Advanced features such as personalized recommendations, promotional offers, and real-time inventory updates enhance the user experience.

                            Behind the scenes, e-commerce platforms often integrate with inventory management systems, customer relationship management (CRM) tools, and analytics to optimize business operations. Security is a critical aspect, with encryption and authentication protocols ensuring safe transactions and protecting user data.

                            In today's digital age, an e-commerce website is essential for businesses looking to expand their reach and operate in a competitive global market. With mobile responsiveness, fast loading times, and user-friendly interfaces, these websites make shopping convenient and accessible 24/7.</div>
                    </div>
                    <div className="img col-start-1 pt-20 px-20 hover:px-10 transition-all duration-500 ">
                        <img className='rounded-xl' src="https://blog.carts.guru/hubfs/Launch%20a%20New%20Product.png" alt="" />
                    </div>
                </div>
                <div className="content mb-12 mt-36 px-20 grid">
                    <div className="img col-start-1 pt-20 px-20 hover:py-10 transition-all duration-500 ">
                        <img className='rounded-xl h-[25rem]' src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg" alt="" />
                    </div>
                    <div className="ourstory col-end-9 mr-5">
                        <div className="title text-3xl font-bold mb-8">Our Mission</div>
                        <div className="desc w-[40rem] text-base">
                            Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                            <p className='text-gray-400 pl-12 border-l-2 mt-12 font-Lato italic'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                                <br /> <br />
                                - Steve Job’s</p>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}

export default Index
