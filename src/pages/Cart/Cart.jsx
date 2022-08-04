import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Cart = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h1>Đào Văn Thương</h1>
                </div>
                <div>
                    <h1>Nguyễn Thị Hiếu</h1>
                </div>
                <div>
                    <h1>Nguyễn Quốc Trọn</h1>
                </div>
                <div>
                    <h1>Trần Đông Dun</h1>
                </div>
            </Slider>
        </div>
    );
};

export default Cart;
