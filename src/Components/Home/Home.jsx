import React from 'react';
import leftBg from '../../assets/bg-hero-left.png';
import rightBg from '../../assets/bg-hero-right.png';
import { Link } from 'react-router';
import LatestProducts from '../LatstProducts/LatestProducts';




const Home = () => {






    return (
        <div
            className="relative p-20 bg-gradient-to-r from-[#FFE6FD] to-[#E0F8F5] overflow-hidden"
        >
            {/* Left Background Image */}
            <img
                src={leftBg}
                alt="left decoration"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-40 opacity-80"
            />

            {/* Right Background Image */}
            <img
                src={rightBg}
                alt="right decoration"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-40 opacity-80"
            />

            {/* Main Content */}
            <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold leading-tight">
                    <span className="block">Deal your <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Products</span></span>
                    <span className="block mt-2">in a <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Smart</span>  way !</span>
                </h1>


                <p className="text-lg text-gray-500 text-center mt-7">
                    SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
                </p>

                <label className="input w-full max-w-xs mt-10 mx-auto flex items-center gap-2 rounded-full bg-white border-none shadow-md px-4 py-2">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

                    <input
                        type="search"
                        required
                        placeholder="Search For Products..."
                    />
                </label>

                <div className="flex items-center justify-center mt-10 gap-5">
                    <Link to="/allProducts" ><button className="btn px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  transition duration-300 shadow-md">
                        Watch All Products
                    </button></Link>

                    <Link to="/createProduct"><button className="btn px-6 py-3 rounded-lg text-[#632EE3] font-semibold hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white transition duration-300 shadow-md border border-[#632EE3]">
                        Post a Product
                    </button></Link>
                </div>
            </div>


            
        </div>
    );
};

export default Home;