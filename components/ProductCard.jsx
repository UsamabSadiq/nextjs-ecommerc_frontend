import React from 'react'
import product from '../public/assets/product-1.webp'
import Image from "next/image";
import Link from 'next/link';
const ProductCard = ({ height, width }) => {
    return (
        <>
            <Link href={'/product/1'}>
                <div className={`card1 hover:scale-105 overflow-hidden duration-300 border-2 w-fit cursor-pointer ${height} ${width}`}>
                    <div className="card-content">
                        <Image src={product} alt={"product image"} />
                        <div className="text px-2 truncate my-2">
                            <p className="text-base font-semibold capitalize">product name</p>
                            <div className="price flex justify-between items-center">
                                <p className="text-sm text-gray-500">Rs.2000 <span className='line-through'>Rs.5000</span> </p>
                                <span className='text-right text-green-300'>20% off</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard
