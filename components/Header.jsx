import Link from "next/link";
import React from "react";
import Menu from "./Menu";

import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
const Header = () => {
    return (
        <>
            <div className="main  sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto grid grid-cols-3 place-items-center bg-gray-100 h-16 relative shadow-lg ">
                    <Link href={"/"}>
                        <img src="/assets/logo.svg" alt="logo" className="h-6 w-16" />
                    </Link>

                    <div className="menu order-first md:order-none">
                        <Menu />
                    </div>

                    <div className="icons flex items-center gap-4 md:gap-6">
                        <div className="cursor-pointer relative">
                            <FaRegHeart size={25} />
                            <span className="absolute -top-3 left-5 text-xs font-semibold text-white bg-red-300 px-1 rounded-full ">2</span>
                        </div>
                        <div className="cursor-pointer relative">
                            <FaCartShopping size={26} />
                            <span className="absolute -top-3 left-5 text-xs font-semibold text-white bg-red-300 px-1 rounded-full ">5</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;
