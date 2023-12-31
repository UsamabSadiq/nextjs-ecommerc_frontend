import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "red",
                position: 'absolute',
                right: "100px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}


const HeroBanner = () => {
    const sliderImg = [
        "/assets/slide-1.png",
        "/assets/slide-2.png",
        "/assets/slide-3.png"
    ]
    const settings = {
        // dots: true,
        infinite: true,
        // speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    // const PrevArrow = (props) => {
    //     const { onClick } = props;
    //     return (
    //       <button
    //         onClick={onClick}
    //         className="!absolute !top-[370px] lg:!top-[150px] !left-4 lg:!-left-16 rotate-180 h-10 w-10 hover:border-[1px] hover:border-white pl-2 rounded-full"
    //       >
    //         <Icon otherclasses="h-10 !hover:fill-black" icon={arrowicon} />
    //       </button>
    //     );
    //   };
    return (
        <>

            <div className='main my-5 px-2'>
                <div className="content max-w-[1400px] mx-auto mt-5">

                    <Slider {...settings} className=''>
                        {
                            sliderImg.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img src={item} alt="" className='mx-auto' />
                                    </div>
                                )
                            })
                        }


                    </Slider>
                </div>
            </div>
        </>
    )
}

export default HeroBanner
