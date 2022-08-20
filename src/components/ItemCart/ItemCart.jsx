import classNames from 'classnames/bind';
import styles from './ItemCart.module.scss';
import { CloseIcon, MinusIcon, PlusIcon, PlusStrongIcon } from '../Icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import config from '../../config/index';
const cx = classNames.bind(styles);
const ItemCart = ({ hasSale, itemInCart, checkbox }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {checkbox && <input type="checkbox" />}
                <Link to={config.routes.product + '/f82jh2fyi1fiyf2i'} className={cx('image-wrapper')}>
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
                    <Link
                        to={config.routes.product + '/f82jh2fyi1fiyf2i'}
                        className={cx('product-name', checkbox && 'item-cart')}
                    >
                        PUMA - Áo ba lỗ thể thao nữ Running CLOUDSPUN
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

                            {checkbox ? (
                                <div>230</div>
                            ) : (
                                <select name="" id="">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            )}
                        </div>
                    </div>

                    {checkbox ? (
                        <div className={cx('product-quantity')}>
                            <div className={cx('input-number')}>
                                <div className={cx('btn-quantity')}>
                                    <MinusIcon />
                                </div>
                                <span className={cx('input-quantity')}>3</span>
                                <div className={cx('btn-quantity')}>
                                    <PlusStrongIcon />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('product-actions')}>
                            {itemInCart ? (
                                <Button disabled small primary children="Đã có trong giỏ hàng" />
                            ) : (
                                <Button small primary children="Chuyển vào giỏ hàng" />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
