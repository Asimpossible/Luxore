//!Complete the right side of header design 
import React from 'react'
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import './Header.scss'
const Index: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header w-full flex justify-between px-20 py-5 fixed  transition-all duration-[400ms] top-0 left-0 z-50  
            ${isScrolled ? 'bg-bgGray shadow-lg text-black' : 'bg-transparent'}`}>
                <ul>
                    <li className='cursor-pointer text-4xl font-mono font-medium text-yellow-800'>
                        <Link to={'/'}>Luxore</Link>
                    </li>
                </ul>
                <div className="text-slate-200 text-3xl flex items-center justify-center gap-3">
                    <div className="search__input flex items-center">
                        <BiSearch className='cursor-pointer bg-yellow-900 rounded-full items-center p-1 w-9 h-9' />
                    </div>
                    <div className='favorite'>
                        <div className="container">
                            <div className="inner-ring">
                                <div className="button">
                                    <svg
                                        style={{ fill: "rgba(240, 73, 73, 1)" }}
                                        viewBox="0 0 24 24"
                                        height="36"
                                        width="36"
                                        className="heart"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="header__basket items-center cursor-pointer box-border">
                        <button data-quantity="2" className="btn-cart">
                            <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                <title>icon-cart</title>
                                <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                            </svg>
                            <span className="quantity"></span>
                        </button>
                    </div>
                </div>
            </div >
        </>


    )
}

export default Index
