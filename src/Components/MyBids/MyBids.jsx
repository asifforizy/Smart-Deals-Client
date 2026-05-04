import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {

    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bids?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBids(data);
                });
        }
    }, [user]);



    const handleRemove = (_id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bids/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });


                            const remainingBid = bids.filter(bid=> bid._id !==  _id);
                            setBids(remainingBid)
                        }
                        
                    })
            }

        });

    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-6">
                My Bids: <span className="text-purple-600">{bids.length}</span>
            </h1>

            {/* Table */}
            <div className="border border-dashed border-blue-400 p-4 rounded-lg bg-white">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">SL No</th>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Bid Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* Static rows (your design) */}
                        {
                            bids.map((bid, index) =>
                                <tr className="border-b" key={bid._id} >
                                    <td className="py-3">{index + 1}</td>
                                    <td className="flex items-center gap-3 py-3">
                                        <div className="w-10 h-10 bg-gray-300">
                                        </div>
                                        <div>
                                            <p className="font-medium">Orange Juice</p>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                            <div>
                                                <p className="font-medium">{bid.buyer_name}</p>
                                                <p className="text-xs text-gray-500">
                                                    {bid.buyer_email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${bid.bid_price}</td>
                                    <td>
                                        {
                                            bid.status == "pending" ? <span className="bg-yellow-400 text-xs px-3 py-1 rounded-full">
                                                {bid.status}
                                            </span> : <div className="badge badge-success">{bid.status}</div>
                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleRemove(bid._id)} className="border border-red-400 text-red-500 px-3 py-1 text-sm rounded hover:bg-red-500 hover:text-white ">
                                            Remove Bid
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                        {/* Add more static rows if you want */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;