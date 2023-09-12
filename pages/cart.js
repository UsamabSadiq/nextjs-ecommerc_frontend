import React from 'react'
import CartProduct from '@/components/CartProduct'
// import emptyCart from '../public/assets/empty-cart.jpg'
import Image from 'next/image'

const cart = () => {
    return (
        <>
            <div className='main my-7'>
                <h2 className='text capitalize text-4xl text-center font-bold underline py-5 '>shopping cart</h2>
            </div>

            <div className='max-w-[1400px] mx-auto px-3'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    {/* cart item starts col-1 */}
                    <div className='child-1'>
                        <p className='capitalize text-lg font-semibold'>cart items</p>

                        <CartProduct />

                    </div>
                    {/* cart item ends col-1 */}

                    {/* summary starts col-2 */}
                    <div className='child-2 mt-3 lg:w-[26rem]'>
                        <p className='capitalize text-lg font-semibold'>summary</p>
                        <div className='main_card p-3 bg-gray-200 rounded-md'>
                            <div className='headings flex justify-between mb-5'> {/* flex */}
                                <h3 className='uppercase text-xl font-semibold'>subtotal</h3>
                                <h3 className='capitalize text-xl font-semibold'>rs. 000000</h3>
                            </div>
                            <p className='mt-5 font-medium'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>

                        <button className='w-full my-3 cursor-pointer rounded-full py-2 capitalize bg-black text-lg text-white hover:text-black hover:bg-white hover:scale-95 duration-300 border border-black '>Checkout</button>

                    </div>
                    {/* summary ends col-2 */}
                </div>
            </div>

            {/* empty cart starts */}
            <div className='empty_main flex flex-col items-center'>
                <Image src='/assets/empty-cart.jpg' width={500} height={400} />

                <p className='text-red-600 text-xl font-bold capitalize mt-1'>Cart is empty..!!</p>

            </div>

            {/* empty cart ends */}

        </>
    )
}

export default cart
