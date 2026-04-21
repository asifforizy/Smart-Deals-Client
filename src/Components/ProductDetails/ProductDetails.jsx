import React, { useRef } from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {

    const handleModal = ()=>{
        bidModalRef.current.showModal();

    }



    const bidModalRef = useRef(null);
    const product = useLoaderData();

    if (!product) {
        return <p className="m-10">Loading product...</p>;
    }

    return (
        <div className="  min-h-screen mx-20">

            <div className="mx-auto p-6 ">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        {/* Image */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full  object-cover rounded"
                            />
                        </div>

                        {/* Description */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="font-semibold text-gray-700 mb-2 text-2xl">
                                Product Description
                            </h2>

                            <div className="flex justify-between ">
                                <p><span className='text-[#632EE3]'>Condition: </span>{product.condition}</p>
                                <p><span className='text-[#632EE3]'>Usage: </span>{product.usage} </p>
                            </div>
                            <hr className='text-gray-400 mt-5' />
                            <p className="text-xs text-gray-500 leading-relaxed mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat quaerat obcaecati eligendi itaque, aspernatur accusantium molestiae minus illum iure, ex distinctio delectus, ducimus consequatur fugit? Doloribus fugiat consectetur similique, deserunt minima explicabo sit? Libero distinctio ipsam magnam excepturi earum delectus molestiae quia praesentium illo, consequatur velit vero ut cum fugiat reprehenderit vel, officiis adipisci ab tempora cumque deleniti repellendus corporis! Cupiditate voluptates doloribus illum? Asperiores, minus! Vitae architecto pariatur commodi cumque nesciunt nostrum sunt sequi dolorum ratione excepturi, fuga soluta rem. Quibusdam, ad laboriosam quaerat quam ab necessitatibus, veritatis soluta tempore consequatur inventore aut corrupti repellat vitae fuga laudantium?
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="md:col-span-2 space-y-4">

                        <a href="#"  >
                            &larr; Back To Products
                        </a>

                        <h1 className="text-4xl font-bold text-gray-800">
                            {product.title}
                        </h1>

                        <span className="inline-block bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
                            Art And Hobbies
                        </span>

                        {/* Price */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-green-600 text-xl font-semibold">
                                ${product.price_min} - {product.price_max}
                            </p>
                            <p className="text-xs text-gray-500">
                                Price starts from
                            </p>
                        </div>

                        {/* Product Details */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="font-semibold text-gray-700 mb-2">
                                Product Details
                            </h2>
                            <p className="text-sm text-gray-600">
                                Product ID: {product._id}
                            </p>
                            <p className="text-sm text-gray-600">
                                Posted: {product.created_at}
                            </p>
                        </div>

                        {/* Seller Info */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="font-semibold text-gray-700 mb-3">
                                Seller Information
                            </h2>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium">
                                        {product.seller_name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {product.email}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-3 text-sm text-gray-600 space-y-1">
                                <p><strong>Location:</strong> {product.location}</p>
                                <p><strong>Contact:</strong> {product.seller_contact}</p>
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className="bg-yellow-200 text-yellow-700 px-2 py-0.5 rounded text-xs">
                                        {product.status}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button onClick={handleModal} className="btn w-full px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  transition duration-300 shadow-md">
                            I Want To Buy This Product
                        </button>



                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button  className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                        <dialog ref={bidModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>

                {/* Bids Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Bids For This Products:
                        <span className="text-purple-600"> 03</span>
                    </h2>

                    <div className="mt-4 overflow-x-auto bg-white rounded-lg shadow">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="p-3">SL No</th>
                                    <th className="p-3">Product</th>
                                    <th className="p-3">Seller</th>
                                    <th className="p-3">Bid Price</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">

                                {[1, 2, 3].map((item) => (
                                    <tr key={item}>
                                        <td className="p-3">{item}</td>

                                        <td className="p-3 flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gray-300"></div>
                                            <div>
                                                <p>Orange Juice</p>
                                                <p className="text-xs text-gray-500">$22.5</p>
                                            </div>
                                        </td>

                                        <td className="p-3 flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                            <div>
                                                <p className="text-sm">Sara Chen</p>
                                                <p className="text-xs text-gray-500">
                                                    crafts.by.sara@shop.net
                                                </p>
                                            </div>
                                        </td>

                                        <td className="p-3">$10</td>

                                        <td className="p-3 space-x-2">
                                            <button className="bg-green-100 text-green-600 px-3 py-1 rounded text-xs">
                                                Accept
                                            </button>
                                            <button className="bg-red-100 text-red-600 px-3 py-1 rounded text-xs">
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;