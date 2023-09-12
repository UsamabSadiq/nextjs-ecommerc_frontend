import React from 'react'
import Image from 'next/image'
import { FaTrashCan } from "react-icons/fa6";
import prodImg from '../public/assets/product-1.webp'
const CartProduct = () => {

    const sizes = ['1', '2', '3', '4', '5', '6', '7']
    const qty = ['1', '2', '3', '4', '5', '6', '7']


    return (
        <>
            <div className="main border md:flex rounded-lg px-2 gap-3 my-3"> {/* flex */}
                <Image src={prodImg} height={130} width={130} alt='cart-product image' className='pt-1 pb-2 mx-auto' />
                <div className="content w-full">
                    <div className="title_price md:flex justify-between items-center">  {/* flex */}
                        <h3 className="title capitalize text-lg font-bold">prod name</h3>
                        <p className='text-slate-400'>MRP Rs. 50000</p>
                    </div>
                    <p className='category text-slate-400 capitalize'>category name</p>

                    {/* size & QTY dropdown starts */}
                    <div className="bottom_content flex justify-between items-center mt-7"> {/* flex */}
                        <div className="dropdowns md:flex gap-6"> {/* flex */}
                            <div className="sizedrpDown mb-2">

                                <span className='capitalize text-base md:text-lg text-slate-400 font-medium mr-2'>Size</span>
                                <select className='border px-2 font-semibold rounded-md cursor-pointer outline-none'>
                                    {
                                        sizes.map(item => {
                                            return <option key={item}>{item}</option>

                                        })
                                    }

                                </select>
                            </div>

                            <div className="qtydrpDown mt-2">

                                <span className='capitalize text-base md:text-lg text-slate-400 font-medium mr-2'>Quantity</span>
                                <select className='border px-2 font-semibold rounded-md cursor-pointer outline-none'>
                                    {
                                        qty.map(item => {
                                            return <option key={item}>{item}</option>

                                        })
                                    }

                                </select>

                            </div>

                        </div>
                        <FaTrashCan size={18} className='cursor-pointer' />
                    </div>

                    {/* size & QTY dropdown ends */}

                </div>
            </div>
        </>
    )
}

export default CartProduct
