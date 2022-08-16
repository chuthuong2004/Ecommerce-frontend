import React from 'react';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import { HeartIcon } from '../../components/Icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const Product = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('images')}>1</div>
                <div className={cx('variants')}>2</div>
                <div className={cx('details')}>
                    <div className={cx('details__text-content')}>
                        <h3 className={cx('details__brand')}>Puma</h3>
                        <h1 className={cx('details__prd-title')}>Áo polo nam thể thao ngắn tay Performance Training</h1>
                        <div className={cx('details__sku')}>Style Code: 521772</div>
                        <div className={cx('details__prd-price')}>
                            <div className={cx('price')}>899,000đ</div>
                        </div>
                    </div>
                    <div className={cx('details__sizes')}>
                        <label className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                            <b>KÍCH CỠ</b>
                            <p>Hướng Dẫn Chọn Size</p>
                        </label>
                        <div className={cx('details__sizes-data')}>
                            <div className={cx('size', 'active')}>
                                <input
                                    type="radio"
                                    className={cx('d-none')}
                                    data-index="0"
                                    data-size="XS"
                                    data-value="XS"
                                    name="product-choose-size"
                                    value="XS"
                                    id="product-choose-size-XS"
                                    data-handle="XS"
                                    data-name="option2"
                                />
                                <label htmlFor="product-choose-size-XS" className={cx('size-sw')}>
                                    XS
                                </label>
                            </div>
                            <div className={cx('size')}>
                                <input
                                    type="radio"
                                    className={cx('d-none')}
                                    data-index="1"
                                    data-size="S"
                                    data-value="S"
                                    name="product-choose-size"
                                    value="S"
                                    id="product-choose-size-S"
                                    data-handle="S"
                                    data-name="option2"
                                />
                                <label htmlFor="product-choose-size-S" className={cx('size-sw')}>
                                    S
                                </label>
                            </div>
                            <div className={cx('size')}>
                                <input
                                    type="radio"
                                    className={cx('d-none')}
                                    data-index="2"
                                    data-size="M"
                                    data-value="M"
                                    name="product-choose-size"
                                    value="M"
                                    id="product-choose-size-M"
                                    data-handle="M"
                                    data-name="option2"
                                />
                                <label htmlFor="product-choose-size-M" className={cx('size-sw')}>
                                    M
                                </label>
                            </div>
                            <div className={cx('size')}>
                                <input
                                    type="radio"
                                    className={cx('d-none')}
                                    data-index="3"
                                    data-size="L"
                                    data-value="L"
                                    name="product-choose-size"
                                    value="L"
                                    id="product-choose-size-L"
                                    data-handle="L"
                                    data-name="option2"
                                />
                                <label htmlFor="product-choose-size-L" className={cx('size-sw')}>
                                    L
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('details__promotion')}>
                        <div className={cx('box-gift-detail')}>Tặng 01 kem mắt AHC cho hóa đơn bất kỳ từ 2690K</div>
                    </div>
                    <div className={cx('details__promotion')}>
                        <div className={cx('box-gift-detail')}>
                            <b>Thanh toán qua Ree-Pay</b>
                            <div>Nhập mã: REEPAY188 Giảm ngay 188K cho hóa đơn từ 1888K</div>
                            <div>Nhập mã: REEPAY88 Giảm ngày 88K cho hóa đơn từ 1088K</div>
                            <div>&nbsp;</div>
                            <b>Thanh toán qua VNPay</b>
                            <div>Nhập mã: QRVIP Giảm ngay 3% tối đa 500K</div>

                            <div>&nbsp;&nbsp;</div>
                            <div>
                                <span style={{ color: '#000000', fontWeight: 'bold' }}>Chi tiết:</span>{' '}
                                <span style={{ color: '#000000', textDecoration: 'underline' }}>Tại đây</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('details__actions_available')}>
                        <div className={cx('btn')}>
                            <Button className={cx('buy-now')} large primary>
                                mua ngay
                            </Button>
                        </div>
                        <div className={cx('btn')}>
                            <Button large primary>
                                thêm vào giỏ
                            </Button>
                        </div>
                        <div className={cx('btn')}>
                            <Button className={cx('add-to-wish')} leftIcon={<HeartIcon />}>
                                thêm vào wishlist
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
