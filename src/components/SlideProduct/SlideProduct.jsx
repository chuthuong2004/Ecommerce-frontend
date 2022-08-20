import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.scss';
import { useState } from 'react';
import { NextArrowIcon, PrevArrowIcon } from '../Icons';
import styles from './SlideProduct.module.scss';
import classNames from 'classnames/bind';
import ProductItem from './../ProductItem/ProductItem';
import Button from './../Button/Button';
import config from '../../config';
const cx = classNames.bind(styles);
const SlideProduct = ({ products, showBtn = true, title }) => {
    const [slideStart, setSlideStart] = useState(false);
    const [slideEnd, setSlideEnd] = useState(false);
    const [openButtonAll, setOpenButtonAll] = useState(false);
    const handleChange = (currentSlide, nextSlide) => {
        setSlideStart(nextSlide >= settings.slidesToScroll);
        setSlideEnd(nextSlide >= settings.slidesToScroll + settings.slidesToShow);
        console.log({ currentSlide, nextSlide });
        if (nextSlide === 7.5) {
            setOpenButtonAll(true);
        }
    };
    const NextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className={`btn-arrow btn-next btn-arrow-slide-item ${slideEnd && 'active'}`}
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
        const { style, onClick } = props;
        return (
            <div
                className={`btn-arrow btn-prev btn-arrow-slide-item ${slideStart && 'active'}`}
                style={{
                    ...style,
                }}
                onClick={onClick}
            >
                <PrevArrowIcon />
            </div>
        );
    };
    let settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4.5,
        slidesToScroll: 4,
        draggable: true,
        focusOnSelect: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (currentSlide, nextSlide) => handleChange(currentSlide, nextSlide),
    };
    return (
        <div className={cx('list-products')}>
            {title && <h4 className={cx('title')}>{title}</h4>}
            <Slider className={cx('slider', 'slider-list')} {...settings}>
                {products.map((product) => (
                    <ProductItem product={product} key={product?._id} />
                ))}

                <div className={cx('btn-all')}>
                    {showBtn && (
                        <Button to={config.routes.collections} className={cx('btn')}>
                            Xem tất cả
                        </Button>
                    )}
                </div>
            </Slider>
        </div>
    );
};

export default SlideProduct;
