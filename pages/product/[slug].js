import Image from 'next/image'
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



const ProductDetails = () => {
    const router = useRouter()
    const { slug } = router.query
    // console.log(slug);
    return (
        <>
            <div className='main max-w-[1400px] mx-auto grid grid-cols-2 mt-16 '>
                {/* left Main child */}
                <div className='child1 flex gap-3'>
                    <div className='sm-img flex flex-col gap-2'>
                        <Image src={prod1} height={40} width={40} />
                        <Image src={prod2} height={40} width={40} />
                        <Image src={prod3} height={40} width={40} />
                        <Image src={prod4} height={40} width={40} />
                        <Image src={prod5} height={40} width={40} />
                        <Image src={prod6} height={40} width={40} />
                        <Image src={prod7} height={40} width={40} />

                    </div>
                    <div className='big-img'>
                        <Image src={main} height={600} width={600} />

                    </div>

                </div>

                {/* Right Main child */}

                <div className='child2'>

                    <div className='text'>
                        <h1 className=''>Product Name</h1>
                        <h4 className=''>Short Description</h4>

                        <p className='price'>Rs. 20000</p>
                        <p className='tax'>incl. of Taxes</p>
                        <p className='duty'>[Also includes all applicable duties]</p>

                    </div>

                    <div className='size-box'>
                        <div className='size-text'>
                            <p>Select Size</p>
                            <p>Select Guide</p>

                        </div>

                        <div className='guides-box grid grid-cols-3'>
                            <button className='px-5 py-1 rounded-md'>UK 6</button>
                        </div>
                        <p className='text-red-600 capitalize'>Size Selection is Required..</p>
                    </div>

                    <div className='cart-whislist-btn'>
                        <button className='bg-black text-white rounded-lg capitalize border border-black'>Add to cart</button>
                        <button className=' text-black rounded-lg capitalize'>Add to cart <span> <FaRegHeart size={22} /> </span></button>

                    </div>

                    <div className='prod-desc'>
                        <h3 className='text-base capitalize'>Product details</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate reiciendis quasi veniam facere quisquam sint labore unde numquam fugiat.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>

                </div>

            </div>

            {/* Product card Starts */}
            <div className='max-w-[1400px] mx-auto'>
                <h2 className='text-2xl font-bold  capitalize mt-7 mb-3'>you might also like</h2>

                <div className="card-main my-6 grid grid-cols-1 md:grid-cols-4 gap-6 px-3 md:px-0">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>


            {/* Product card ends */}

        </>
    )
}

export default ProductDetails
