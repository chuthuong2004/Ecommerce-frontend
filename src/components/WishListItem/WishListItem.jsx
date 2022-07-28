import classNames from 'classnames/bind';
import styles from './WishListItem.module.scss';
import { CloseIcon } from './../Icons/Icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import config from './../../config/index';
const cx = classNames.bind(styles);
const WishListItem = ({ hasSale, itemInCart }) => {
    return (
        <div className={cx('container')}>
            <Link to={config.routes.product} className={cx('image-wrapper')}>
                <img
                    src="https://product.hstatic.net/1000284478/product/01_522151_1_2203dbcb2a6740b3a46926a4714da7e1_large.jpg"
                    alt=""
                />
            </Link>
            <div className={cx('text-wrapper')}>
                <div className={cx('top')}>
                    <Link to={config.routes.trademark} className={cx('brand')}>
                        puma
                    </Link>
                    <div className={cx('close')}>
                        <CloseIcon />
                    </div>
                </div>
                <Link to={config.routes.product} className={cx('product-name')}>
                    PUMA - Áo ba lỗ thể thao nữ Run CLOUDSPUN
                </Link>
                <div className={cx('product-price', { hasSale })}>
                    <span className={cx('price')}>1,199,000đ</span>
                    <del>2,199,000đ</del>
                </div>
                <div className={cx('variant-select')}>
                    <div className={cx('product-variant-color')}>
                        <span>Màu sắc:</span>
                        <span>01</span>
                    </div>
                    <div className={cx('product-variant-size')}>
                        <span>Kích cỡ:</span>
                        <select name="" id="">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </div>
                </div>
                <div className={cx('product-actions')}>
                    {itemInCart ? (
                        <Button disabled small primary children="Đã có trong giỏ hàng" />
                    ) : (
                        <Button small primary children="Chuyển vào giỏ hàng" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default WishListItem;
