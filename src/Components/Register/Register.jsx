import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {

    const { signInWithGoogle } = use(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                    uid: user.uid
                }

                // create user in database
                fetch('http://localhost:3000/users',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("data after user save : ",data);
                })





            })
            .catch(error => {
                console.error(error);
            });
    }






    return (
        <div>
            <div className="hero bg-base-200 min-h-screen px-4">
                <div className="hero-content flex-col w-full">

                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-6">

                        <h1 className="text-4xl text-center font-bold">
                            Register now
                        </h1>

                        <p className="text-center mt-3">
                            Already have an account?{" "}
                            <Link to="/login" className="link text-[#9F62F2] link-hover">
                                Login
                            </Link>
                        </p>

                        <div className="card-body">
                            <fieldset className="fieldset">

                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />

                                <label className="label">Image-URL</label>
                                <input type="text" className="input w-full" placeholder="Image-URL" />

                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />

                                <button className="btn  mt-4 w-full px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition duration-300 shadow-md">
                                    Register
                                </button>

                                <div className="flex items-center gap-3 mt-4">

                                    <div className="flex-1">
                                        <hr className="border-gray-300" />
                                    </div>

                                    <div>
                                        <h1>OR</h1>
                                    </div>

                                    <div className="flex-1">
                                        <hr className="border-gray-300" />
                                    </div>

                                </div>
                                <button onClick={handleGoogleSignIn} className="btn mt-5 bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>

                            </fieldset>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;