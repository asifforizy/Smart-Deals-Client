import React, { use } from 'react';
import Products from './Products';

const LatestProducts = ({ latestProductsPromise }) => {
    const products = use(latestProductsPromise);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-10">
                Recent{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Products
                </span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product => (
                        <Products
                            key={product._id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestProducts;