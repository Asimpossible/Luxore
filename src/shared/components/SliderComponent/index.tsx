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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='slider__element !flex'>
                    <div className="title border-2 border-solid border-red-800 w-7/12">Title</div>
                    <div className="image border-2 border-solid border-blue-900 w-5/12 h-96">Image</div>
                </div>
            </Slider>
            {/* <div className='slider__buttons flex justify-between'>
                <button className='cursor-pointer my-10 border-2 p-1 rounded-lg bg-slate-600 text-white' onClick={handlePrevClick}>Prev</button>
                <button className='cursor-pointer my-10 border-2 p-1 rounded-lg bg-slate-600 text-white' onClick={handleNextClick}>Next</button>
            </div> */}
        </div>
    )
}

export default Index