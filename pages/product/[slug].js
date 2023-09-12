import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router'
import { FaRegHeart } from "react-icons/fa6";
import ProductCard from '@/components/ProductCard';

import main from '../../public/assets/product-1.webp'
import prod1 from '../../public/assets/p1.png'
import prod2 from '../../public/assets/p2.png'
import prod3 from '../../public/assets/p3.png'
import prod4 from '../../public/assets/p4.png'
import prod5 from '../../public/assets/p5.png'
import prod6 from '../../public/assets/p6.png'
import prod7 from '../../public/assets/p7.png'
import ProductDetailsMultiBottomSlider from '@/components/ProductDetailsMultiBottomSlider';


const ProductDetails = () => {
    const [sizeSelection, setSizeSelection] = useState("")
    const router = useRouter()
    const { slug } = router.query
    // console.log(slug);

    const smImg = [prod1, prod2, prod3, prod4, prod5, prod6, prod7]

    const guideNum = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]



    return (
        <>
            <div className='main max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-16 px-3 gap-3 '>
                {/* left Main child */}
                <div className='child1 flex flex-col-reverse lg:flex-row gap-3'>

                    <div className='sm-img flex justify-center lg:justify-start lg:flex-col gap-2'>
                        {smImg.map((item, ind) => {
                            return (

                                <Image key={ind} src={item} height={40} width={35} />
                            )
                        })}

                    </div>
                    <div className='big-img'>
                        <Image src={main} height={600} width={500} className='' />

                    </div>

                </div>

                {/* Right Main child */}

                <div className='child2 lg:w-4/5' >

                    <div className='text'>
                        <h1 className='text-2xl font-bold capitalize'>Product Name</h1>
                        <h4 className='text-md font-semibold capitalize mb-3'>Short Description</h4>

                        <p className='price text-md font-semibold mt-3'>MRP: Rs.20000</p>
                        <p className='tax text-slate-400 font-semibold'>incl. of Taxes</p>
                        <p className='duty text-slate-400 font-semibold capitalize'>[Also includes all applicable duties]</p>

                    </div>

                    <div className='size-box mt-8 mb-4'>
                        <div className='size-text flex justify-between mb-4'>
                            <p className='capitalize text-xl font-semibold cursor-pointer'>Select Size</p>
                            <p className='capitalize text-slate-400 text-xl font-semibold cursor-pointer'>Select Guide</p>

                        </div>

                        <div className='guides-box grid grid-cols-3 gap-3'>
                            {
                                guideNum.map((num, ind) => {
                                    return (
                                        <button key={num} onClick={(e) => { setSizeSelection(guideNum[ind].toString()) }} className='py-2 rounded-lg border-2 text-center font-semibold cursor-pointer hover:bg-gray-200 hover:text-slate-500 duration-300'>UK {num}</button>
                                    )
                                })
                            }

                        </div>
                        <p className={`text-red-600 text-sm font-medium capitalize mt-1 ${sizeSelection ? 'hidden' : 'block'} `}>Size Selection is Required..!!</p>
                    </div>

                    <div className='cart-whislist-btn flex flex-col justify-center gap-3 mb-6'>

                        <button className='cursor-pointer rounded-full py-2 capitalize bg-black text-lg text-white hover:text-black hover:bg-white hover:scale-95 duration-300 border border-black '>Add to cart</button>

                        <div className='cursor-pointer flex items-center justify-center gap-2 border border-black rounded-full py-2 hover:scale-95 duration-300'>
                            <button className='text-lg font-semibold capitalize'>Whislist </button>
                            <FaRegHeart size={19} />
                        </div>
                    </div>

                    <div className='prod-desc '>
                        <h3 className='text-lg font-bold capitalize'>Product details</h3>
                        <p className='text-base text-slate-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate reiciendis quasi veniam facere quisquam sint labore unde numquam fugiat.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>

                </div>

            </div>

            {/* Product card Starts */}
            {/* <div className='max-w-[1400px] mx-auto px-3'>

                <div className="card-main my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-0">
                     
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> 


                </div>
            </div> */}

            <div className='max-w-[1400px] mx-auto px-3 mb-5'>
                <h2 className='text-2xl font-bold  capitalize mt-7 mb-3'>you might also like</h2>

                <ProductDetailsMultiBottomSlider />
            </div>


            {/* Product card ends */}

        </>
    )
}

export default ProductDetails
