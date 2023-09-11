import React from "react";
import { FaFacebookF, FaTwitter, FaSquareYoutube, FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="main bg-black text-white px-3">
                <div className="content max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 pt-5 pb-3">
                    <div className="child-1 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="child1-main col-span-3 md:col-span-1 ">
                            <h2 className="font-oswald text-lg font-medium uppercase my-2">find a store</h2>

                            <ul className="font-oswald text-base font-medium uppercase ">
                                <li className="my-1 py-1">become a partner</li>
                                <li className="my-1 py-1">signup for email</li>
                                <li className="my-1 py-1">feedback</li>
                                <li className="my-1 py-1">student doscount</li>
                            </ul>
                        </div>
                        <div className="child2-main ">
                            <h2 className="font-oswald text-lg font-medium uppercase my-2">get help</h2>

                            <ul className="text-base text-gray-500 font-medium capitalize">
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">order status</li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">delivery</li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">returns </li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">payment option</li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">contatc us</li>
                            </ul>


                        </div>

                        <div className="child3-main  ">
                            <h2 className="font-oswald text-lg font-medium uppercase my-2">About Nike</h2>

                            <ul className="text-base text-gray-500 font-medium capitalize">

                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">News</li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">Careers</li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">Investors </li>
                                <li className="my-1 py-1 hover:text-gray-300 cursor-pointer">Sustaibability</li>
                            </ul>
                        </div>
                    </div>

                    <div className="child-2 flex justify-center items-center gap-5">

                        <div className="icon1 bg-slate-500 rounded-full text-black p-2 hover:text-gray-300">
                            <FaFacebookF size={20} />
                        </div>
                        <div className="icon2 bg-slate-500 rounded-full text-black p-2 hover:text-gray-300">
                            <FaTwitter size={20} />
                        </div>
                        <div className="icon3 bg-slate-500 rounded-full text-black p-2 hover:text-gray-300">
                            <FaSquareYoutube size={20} />
                        </div>
                        <div className="icon4 bg-slate-500 rounded-full text-black p-2 hover:text-gray-300">
                            <FaInstagram size={20} />
                        </div>
                    </div>
                </div>
                {/* bottom footer starts */}

                <div className="main max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
                    <p>  © 2023 Nike, Inc. All Rights Reserved</p>

                    <div className="right-content flex justify-evenly flex-wrap items-center">
                        <p className="capitalize text-gray-500 hover:text-gray-300">guides</p>
                        <p className="capitalize text-gray-500 hover:text-gray-300">terms of sale</p>
                        <p className="capitalize text-gray-500 hover:text-gray-300">terms of use</p>
                        <p className="capitalize text-gray-500 hover:text-gray-300">Privacy Policy</p>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Footer;
