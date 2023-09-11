import HeroBanner from "@/components/HeroBanner";

import ProductCard from "@/components/ProductCard";
export default function Home() {
    return (
        <>

            <HeroBanner />

            <div className="main max-w-[1400px] mx-auto  ">
                {/* heading & paragraph starts */}
                <div className="content text-center my-2">
                    <h2 className="text-xl md:text-2xl font-semibold capitalize mb-1">cushioning for your miles</h2>
                    <p className="text-sm md:text-base text-slate-600 my-1">A lightweight Nike ZoomX misole is combined with increased stack heights to <br /> help provide cushioning during extended stretches of running.  </p>
                </div>
                {/* heading & paragraph ends */}

                {/* products cards starts */}

                <div className="card-main my-6 grid grid-cols-1 md:grid-cols-4 gap-6 px-3 md:px-0">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>

                {/* products cards ends */}

            </div>

        </>
    )
}
