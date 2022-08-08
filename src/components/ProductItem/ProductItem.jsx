import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { HeartActiveIcon, HeartIcon } from './../Icons/Icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
const cx = classNames.bind(styles);
const ProductItem = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('product-img')}>
                    <Link to={config.routes.product}>
                        <img src={product.img} alt="" className={cx('img')} />
                    </Link>
                    {product?.discount > 0 && <div className={cx('discount')}>-{product.discount}%</div>}
                    <div onClick={() => setIsLiked(!isLiked)} className={cx('wishlist', isLiked && 'active')}>
                        <HeartIcon className={cx('heart')} stroke="#ffffff" />
                        <HeartActiveIcon className={cx('heart-active')} />
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
