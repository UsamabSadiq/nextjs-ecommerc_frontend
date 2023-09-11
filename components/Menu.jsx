import React, { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";

const Menu = () => {
    const [open, setOpen] = useState(false)
    const [mobileView, setMobileView] = useState(false)
    // const navItem  = [
    //     {nav: 'Home', route: '/'},
    //     {nav: 'About', route: '/about'},
    //     {nav: 'Contact', route: '/contact'}

    // ]

    // const categoryItem = [
    //     {cat: 'Prooduct1' , quantity: 20},
    //     {cat: 'Prooduct2' , quantity: 40},
    //     {cat: 'Prooduct3' , quantity: 60}

    // ]

    return (
        <>
            <div className="md:hidden">{mobileView ? <FaXmark onClick={() => setMobileView(false)} /> : <FaBars onClick={() => setMobileView(true)} />} </div>
            <div className={`main md:block ${mobileView ? 'z-50 text-black' : 'hidden'}`}>
                <ul className={`flex justify-between gap-4 cursor-pointer ${mobileView ? '-z-20 absolute top-16 w-56 flex flex-col bg-gray-100 hover:bg-gray-200 shadow-md py-1 pl-2' : ""}`}>
                    <li className='text-base font-semibold hover:text-gray-400 uppercase'>Home</li>
                    <li className='text-base font-semibold  hover:text-gray-400 uppercase'>About</li>
                    <li className={`relative text-base font-semibold  hover:text-gray-400 uppercase order-last md:order-none`} onMouseEnter={() => setOpen(true)}>Categories
                        <ul onMouseLeave={() => setOpen(false)} className={`py-2 bg-gray-100 shadow-md w-52 absolute top-7 md:top-11 -z-50  ${open ? 'block' : 'hidden'}`} >
                            <li className='px-2 py-1 h-7 text-sm font-normal hover:bg-gray-200 text-black capitalize'>Product 1 </li>
                            <li className='px-2 py-1 h-7 text-sm font-normal hover:bg-gray-200 text-black capitalize '>Product 2 </li>
                            <li className='px-2 py-1 h-7 text-sm font-normal hover:bg-gray-200 text-black capitalize '>Product 3  </li>

                        </ul>
                    </li>
                    <li className='text-base font-semibold  hover:text-gray-400 uppercase'>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Menu
