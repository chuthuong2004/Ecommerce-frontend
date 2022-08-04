import Slider from 'react-slick';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlide.scss';
import { NextArrowIcon, PrevArrowIcon } from '../Icons/Icons';
const cx = classNames.bind(styles);
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('btn-arrow', 'btn-next')}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <NextArrowIcon />
        </div>
    );
};
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('btn-arrow', 'btn-prev', className)}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <PrevArrowIcon />
        </div>
    );
};
const Slide = ({ slides }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        focusOnSelect: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className={cx('slide-container')}>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide._id} className={cx('slide-banner-item')}>
                        <img className={cx('slide-banner-img')} src={slide.img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;
