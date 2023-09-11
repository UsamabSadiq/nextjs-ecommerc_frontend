import { useRouter } from 'next/router'
import ProductCard from '@/components/ProductCard'


const Category = () => {
    const router = useRouter()
    const { slug } = router.query
    // console.log(slug);
    return (
        <>
            <div className='max-w-[1400px] mx-auto'>
                <h2 className='text-2xl font-bold text-center uppercase mt-7'>{slug}</h2>

                <div className="card-main my-6 grid grid-cols-1 md:grid-cols-4 gap-6 px-3 md:px-0">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
        </>
    )
}

export default Category
