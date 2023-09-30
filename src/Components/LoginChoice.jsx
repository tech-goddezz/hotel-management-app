import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const LoginChoice = () => {

    return (
        <>

            <section className="bg-top bg-[gold]/80 ">
                <div className=" h-[700px] mx-auto py-6 flex justify-center items-center ">
                    <div className="w-[600px] bg-white  m-4 rounded-md  relative overflow-hidden">


                        <div className=" p-40">

                            <div className="flex justify-center text-2xl font-semibold pb-5">
                                LOGIN YOUR ACCOUNT
                            </div>


                            <form action="" className="flex justify-center space-x-4 pb-10 mt-7 -mb-10">
                                <button
                                    className="bg-[#ebcf32] px-10 py-2 border-[#ebcf32] rounded-2xl"
                                >
                                    <Link to='/auth'>
                                    User
                                    </Link>
                                </button>

                                <button
                                    className="bg-[#ebcf32] border-[#ebcf32] px-8 py-2 rounded-2xl"
                                >
                                    <Link to='/adminAuth'>
                                        Admin
                                    </Link>
                                </button>
                            </form>







                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default LoginChoice;    