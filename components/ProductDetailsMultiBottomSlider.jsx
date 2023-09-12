import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from './ProductCard';


const ProductDetailsMultiBottomSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const sliderCount = ['1', '2', '3', '4', '5']
    return (
        <>
            <Slider {...settings} >
                {
                    sliderCount.map(item => {
                        return (
                            <div key={item}>
                                <ProductCard height={'h-fit'} width={'lg:w-[80%]'} hidden={'hidden'} />
                            </div>
                        )
                    })
                }


            </Slider>
        </>
    )
}

export default ProductDetailsMultiBottomSlider
