import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '../../components/Button';
import { BagIconLarge, PointerIcon } from '../../components/Icons';
import Input from '../../components/Input';
import ItemCart from '../../components/ItemCart';
import SocialFooter from './../../layouts/components/SocialFooter';
import Footer from '../../layouts/components/Footer';
import config from '../../config';
import EmptyContent from '../../components/EmptyContent';
import RecommendedProduct from '../../components/RecommendedProduct/RecommendedProduct';
const cx = classNames.bind(styles);
const Cart = () => {
    const cart = null;

    return (
        <div className={cx('wrapper')}>
            {cart ? (
                <>
                    <div className={cx('cart-content')}>
                        <div className={cx('container')}>
                            <div className={cx('cart-listing')}>
                                <div className={cx('cart-listing__header')}>
                                    <input type="checkbox" id="all-item" />
                                    <label htmlFor="all-item">TẤT CẢ SẢN PHẨM</label>
                                </div>
                                <div className={cx('cart-listing__body')}>
                                    <div className={cx('cart-listing__line')}>
                                        <ItemCart checkbox={true} />
                                    </div>
                                    <div className={cx('cart-listing__line')}>
                                        <ItemCart checkbox={true} />
                                    </div>
                                    <div className={cx('cart-listing__line')}>
                                        <ItemCart checkbox={true} />
                                    </div>
                                    <div className={cx('cart-listing__line')}>
                                        <ItemCart checkbox={true} />
                                    </div>
                                    <div className={cx('cart-listing__line')}>
                                        <ItemCart checkbox={true} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart-more-info')}>
                                <div className={cx('cart-note')}>
                                    <div className={cx('text-coupon')}>
                                        <PointerIcon />
                                        <span>Bạn có thể nhập mã giảm giá ở trang thanh toán</span>
                                    </div>
                                    <div className={cx('note-cart')}>
                                        Vui lòng liên hệ 1900252538 hoặc inbox fanpage Maison Online <b>tại đây</b> nếu
                                        Quý khách có yêu cầu đặc biệt với đơn hàng này.
                                    </div>
                                </div>
                                <div className={cx('cart-invoice')}>
                                    <div className={cx('invoice__show')}>
                                        <input type="checkbox" name="" id="invoice" />
                                        <label className={cx('invoice__label')} htmlFor="invoice">
                                            Xuất hóa đơn công ty
                                        </label>
                                        <div className={cx('invoice__form')}>
                                            <div style={{ color: 'red', fontStyle: 'italic' }}>
                                                Lưu ý: Hóa đơn sẽ được xuất bao gồm tổng giá trị đơn hàng (sản phẩm +
                                                phí vận chuyển)
                                            </div>
                                            <div>
                                                <Input label="Tên công ty" />
                                            </div>
                                            <div>
                                                <Input label="Mã số thuế" />
                                            </div>

                                            <div>
                                                <Input label="Địa chỉ" />
                                            </div>

                                            <div>
                                                <Input type="email" label="Email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SocialFooter />
                    <div className={cx('cart-actions')}>
                        <div className={cx('container')}>
                            <div className={cx('cart-actions__total')}>
                                <div className={cx('title')}>
                                    <strong>TẠM TÍNH</strong>
                                    <span> (sản phẩm)</span>
                                </div>
                                <div className={cx('total-price')}>8,450,000₫</div>
                            </div>
                            <div className={cx('cart-actions__btn')}>
                                <div className={cx('btn')}>
                                    <Button
                                        to={config.routes.collections + '/new-arrival'}
                                        large
                                        className={cx('btn-continue')}
                                    >
                                        Tiếp tục mua sắm
                                    </Button>
                                </div>
                                <div className={cx('btn')}>
                                    <Button to={config.routes.payment} large primary>
                                        Thanh toán
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <EmptyContent
                        icon={<BagIconLarge />}
                        titleBtn="Dạo một vòng xem nào"
                        content1="Không có sản phẩm nào!"
                        content2=" Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dấn chỉ dành riêng cho bạn."
                    />
                    <RecommendedProduct />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Cart;
