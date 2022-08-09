import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { HeartActiveIcon, HeartIcon } from './../Icons/Icons';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
const cx = classNames.bind(styles);
const ProductItem = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isCached, setIsCached] = useState(false);
    const imgRef = useRef();
    const handleOnMouse = (direction) => {
        direction === 'mouseover' ? setIsCached(true) : setIsCached(false);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('product-img')}>
                    <Link
                        onMouseOver={() => handleOnMouse('mouseover')}
                        onMouseOut={() => handleOnMouse('mouseout')}
                        to={config.routes.product}
                    >
                        <img src={product.colors[0].images[0]} alt="" className={cx('img', !isCached && 'is-cached')} />
                        <img
                            src={product.colors[0].images[1]}
                            alt=""
                            className={cx('img', 'lazyloaded', isCached && 'is-cached')}
                        />
                    </Link>
                    {product?.discount > 0 && <div className={cx('discount')}>-{product.discount}%</div>}
                    <div onClick={() => setIsLiked(!isLiked)} className={cx('wishlist', isLiked && 'active')}>
                        <HeartIcon className={cx('heart')} stroke="#ffffff" />
                        <HeartActiveIcon className={cx('heart-active')} />
                    </div>
                </div>
                <div className={cx('banner-product')}>
                    <img
                        src="https://file.hstatic.net/1000284478/file/frame__22__c3a6e45e3424441da3746870f1e77536.png"
                        alt=""
                        className={cx('banner-img')}
                    />
                    <div className={cx('outer-product-color')}>
                        {product.colors.map((color) => (
                            <div key={color._id} className={cx('product-color-loop')}>
                                <img src={color.imgSmall} alt="" className={cx('product-color-img')} />
                            </div>
                        ))}
                    </div>
                </div>
                <Link to={config.routes.product}>
                    <h3 className={cx('trademark-name')}>{product.trademark}</h3>
                    <p className={cx('product-name')}>{product.name}</p>
                </Link>
                <span className={cx('quantity-color')}>{product.colors.length} màu</span>
                <div className={cx('product-price')}>
                    <span className={cx('price', product.discount > 0 && 'hasSale')}>
                        {(product.price - product.price * (product.discount / 100)).toLocaleString('vn-VN')}
                        <span className={cx('td-underline')}>đ</span>
                    </span>
                    {product?.discount > 0 && (
                        <del>
                            {product.price.toLocaleString('vn-VN')}
                            <span className={cx('td-underline')}>đ</span>
                        </del>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
