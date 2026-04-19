import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);



    const handleSignOut = () => {
    logOut()
        .then(() => {
           
        })
        .catch(err => console.log(err));
};


    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/allProducts">All Products</NavLink>
                            {
                                user && <>
                                    <NavLink to="/myProducts">My Products</NavLink>
                                    <NavLink to="/myBids">My Bids</NavLink>
                                    <NavLink to="/createProduct">Create Product</NavLink>
                                </>
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Smart<span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Deals
                    </span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/allProducts">All Products</NavLink>
                        {
                            user && <>
                                <NavLink to="/myProducts">My Products</NavLink>
                                <NavLink to="/myBids">My Bids</NavLink>
                                <NavLink to="/createProduct">Create Product</NavLink>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    

                    {
                        user ? <button onClick={handleSignOut} className="btn px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition duration-300 shadow-md">Sign Out</button> : <Link to="/login" className="btn px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition duration-300 shadow-md">Log In</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;