import React from 'react'
import Slider from 'react-slick'



const Index: React.FC = () => {

    // const sliderRef = React.useRef<Slider | null>(null);

    // const handlePrevClick = () => {
    //     sliderRef.current?.slickPrev();
    // };

    // const handleNextClick = () => {
    //     sliderRef.current?.slickNext();
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
        <div className='w-full max-w-[100vw] box-border overflow-hidden'>
            <Slider {...settings}>
                <div className='slider__element !flex max-w-full'>
                    <div className='contentDiv w-1/2 !flex flex-col items-center justify-center gap-6 bg-[#e3d1c3]'>
                        <div className="title pr-20"><strong className='text-3xl font-mono text-gray-700'>Luxore Running Shoes</strong></div>
                        <div className='aboutDiv text-gray-700 w-[34rem] text-lg'>Experience unmatched comfort and performance. Our lightweight, breathable design and responsive cushioning keep you moving effortlessly, mile after mile. Ready to go the distance? <br /> Step into <strong>Luxore</strong> today!</div>
                        <button>Details</button>
                    </div>
                    <div className="image w-3/4 h-[36rem] bg-cover bg-no-repeat bg-[url('https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5960.jpg')]">
                    </div>
                </div>
                <div className='slider__element !flex max-w-full'>
                    <div className='contentDiv w-1/2 !flex flex-col items-center justify-center gap-6 bg-[#e8e8e8]'>
                        <div className="title pr-20"><strong className='text-3xl font-mono tracking-tight text-gray-700'>Luxore Sport Wear Set</strong></div>
                        <div className='aboutDiv text-gray-700 w-[34rem] text-lg'>Unleash your potential with our premium sportswear set! Crafted for comfort and performance, it features breathable fabric that keeps you cool and stylish during any workout. Whether you're at the gym or out for a run, this sleek fit provides the support you need. Elevate your activewear collection today! Step into <strong>Luxore</strong> today!</div>
                    </div>
                    <div className="image w-3/4 h-[36rem] bg-cover bg-center bg-no-repeat bg-[url('https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/q/k/-original-imagxusjpfyp4mcc.jpeg?q=90&crop=false')]">
                    </div>
                </div>
                <div className='slider__element !flex'>
                    <div className='contentDiv w-1/2 !flex flex-col items-center justify-center gap-6 bg-[#cfd4d3]'>
                        <div className="title pr-20"><strong className='text-3xl font-mono text-gray-700'>Luxore Sport Outerwear</strong></div>
                        <div className='aboutDiv text-gray-700 w-[34rem] text-lg'>Stay stylish and warm with our premium outerwear! Perfect for any weather, our jackets combine comfort and fashion, making them a must-have for your wardrobe. Elevate your look today! <br /> Step into <strong>Luxore</strong> today!</div>
                    </div>
                    <div className="image w-3/4 h-[36rem] bg-cover bg-center bg-no-repeat bg-[url('https://www.zootsports.eu/cdn/shop/products/zoot-sports-run-outerwear-men-s-ltd-run-jacket-40-years-40100726046915.jpg?v=1674821974&width=1920')]">
                    </div>
                </div>
            </Slider >
            {/* <div className='slider__buttons flex justify-between'>
                <button className='cursor-pointer my-10 border-2 p-1 rounded-lg bg-slate-600 text-white' onClick={handlePrevClick}>Prev</button>
                <button className='cursor-pointer my-10 border-2 p-1 rounded-lg bg-slate-600 text-white' onClick={handleNextClick}>Next</button>
            </div> */}
        </div >
    )
}

export default Index