import React from 'react';

const Products = ({ product }) => {
    const { title, price_min, price_max, image, usage } = product;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-5 pt-5">
                    <div className="w-full h-60 overflow-hidden rounded-xl">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/800x600?text=No+Image";
                            }}
                        />
                    </div>
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title overflow-hidden text-ellipsis line-clamp-2 h-[3rem] leading-snug">{title}- [{usage}]</h2>
                    <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">$ {price_min}-{price_max}</p>
                    <div className="card-actions w-full">
                        <button className="btn w-full px-6 py-3 rounded-lg text-[#632EE3] font-semibold hover:opacity-90 transition duration-300 shadow-md border border-[#632EE3]">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;