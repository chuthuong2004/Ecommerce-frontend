import styles from './TradeMarkProduct.module.scss';
import classNames from 'classnames/bind';
import ProductItem from './../ProductItem/ProductItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TradeMarkProductSlide.scss';
import { NextArrowIcon, PrevArrowIcon } from '../Icons';
import Button from './../Button/Button';
import { useState } from 'react';
import config from '../../config';
const cx = classNames.bind(styles);

const TradeMarkProduct = ({ trademarkProduct }) => {
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
        const { className, style, onClick } = props;
        return (
            <div
                className={cx('btn-arrow', 'btn-next', slideEnd && 'active')}
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
                className={cx('btn-arrow', 'btn-prev', className, slideStart && 'active')}
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
        <div className={cx('container')}>
            <img src={trademarkProduct.imgTrademark} alt="" className={cx('trademark-img')} />
            <div className={cx('products-container')}>
                <div className={cx('list-products')}>
                    <Slider className={cx('slider')} {...settings}>
                        {trademarkProduct.products.map((product) => (
                            <ProductItem product={product} key={product?._id} />
                        ))}
                        <div className={cx('btn-all')}>
                            <Button to={config.routes.collections} className={cx('btn')}>
                                Xem tất cả
                            </Button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TradeMarkProduct;
