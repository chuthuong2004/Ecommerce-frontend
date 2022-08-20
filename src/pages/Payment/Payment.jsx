import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
import { ArrowLeftIcon, ArrowRightIcon, LogoIcon } from '../../components/Icons';
import { Link } from 'react-router-dom';
import config from '../../config';
import Input from '../../components/Input/Input';
import Button from './../../components/Button/Button';
const cx = classNames.bind(styles);
const Payment = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('checkout-header')}>
                    <div className={cx('checkout-logo')}>
                        <LogoIcon width="78" height="35" />
                    </div>
                    <div className={cx('breadcrumb')}>
                        <div className={cx('breadcrumb-item')}>
                            1 - <Link to={config.routes.cart}>giỏ hàng</Link>
                            <span>
                                <ArrowRightIcon />
                            </span>
                        </div>
                        <div className={cx('breadcrumb-item', 'breadcrumb-item-current')}>Thông tin giao hàng</div>
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('main')}>
                        <h2 className={cx('title')}>Thông tin giao hàng</h2>
                        <div className={cx('main-content', 'customer-information')}>
                            <div className={cx('logged-in-customer-information')}>
                                <div className={cx('logged-in-customer-information-avatar')}>
                                    <span>Đ</span>
                                    {/* <img
                                        src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-1/272272345_1103541183782082_2260967379827568989_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rRUdiX08pJcAX_Zrlyp&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_urw0YblvJ9C_AaBIwssM_2pk2II948FC5UtSdFkQk3w&oe=6305350C"
                                        alt=""
                                    /> */}
                                </div>
                                <div className={cx('logged-in-customer-information-paragraph')}>
                                    <div className={cx('infor-account')}>
                                        <div className={cx('name')}>Đào Văn Thương</div>
                                        <div className={cx('email')}>(chuthuong1080@gmail.com)</div>
                                    </div>
                                    <div className={cx('logout')}>Đăng xuất</div>
                                </div>
                            </div>
                            <div className={cx('fieldset')}>
                                <Input label="Chọn địa chỉ" />
                                <div className={cx('field-required')}>
                                    <div className={cx('field-input')}>
                                        <Input label="Họ và tên" />
                                    </div>
                                    <div className={cx('field-input')}>
                                        <Input label="Số điện thoại" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-box')}>
                            <div className={cx('field-required')}>
                                <div className={cx('field-input')}>
                                    <Input type="radio" label="Giao tận nơi" />
                                </div>
                                <div className={cx('field-input')}>
                                    <Input type="radio" label="Nhận tại cửa hàng" />
                                </div>
                            </div>
                            <div className={cx('form-location-customer')}>
                                <div className={cx('field-required')}>
                                    <div className={cx('field-input')}>
                                        <Input label="Địa chỉ" />
                                    </div>
                                    <div className={cx('field-input')}>
                                        <Input label="Chọn tỉnh / thành " />
                                    </div>
                                </div>
                                <div className={cx('field-required')}>
                                    <div className={cx('field-input')}>
                                        <Input label="Chọn quận / huyện" />
                                    </div>
                                    <div className={cx('field-input')}>
                                        <Input label="Chọn phường / xã" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('type-address-shipping')}>
                                <div className={cx('field-input')}>
                                    <input type="radio" name="locate" id="home" />
                                    <label htmlFor="home">Nhà</label>
                                </div>
                                <div className={cx('field-input')}>
                                    <input type="radio" name="locate" id="company" />
                                    <label htmlFor="company">Công ty</label>
                                </div>
                            </div>
                            <h2 className={cx('title')}>Phương thức vận chuyển</h2>
                            <div className={cx('content-box')}>
                                <div className={cx('section-content')}>
                                    <div className={cx('radio-wrapper')}>
                                        <input type="radio" id="shipment" />
                                        <label htmlFor="shipment">Giao hàng tiêu chuẩn (3 - 5 ngày)</label>
                                    </div>
                                    <div className={cx('radio-accessory')}>21,000₫</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('sidebar')}>2</div>
                </div>
            </div>
            <div className={cx('checkout-step')}>
                <div className={cx('step-footer')}>
                    <div>
                        <Button className={cx('btn', 'btn-prev-link')} leftIcon={<ArrowLeftIcon />} large>
                            Quay lại giỏ hàng
                        </Button>
                    </div>
                    <div>
                        <Button className={cx('btn')} large primary>
                            Hoàn tất đặt hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
