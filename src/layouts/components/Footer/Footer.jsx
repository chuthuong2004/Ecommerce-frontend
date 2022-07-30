import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import {
    FacebookLiteIcon,
    InstagramIcon,
    LogoIcon,
    MomoIcon,
    ReePayIcon,
    ShopeePayIcon,
    VNPayIcon,
    YoutubeIcon,
    ZaloIcon,
} from './../../../components/Icons/Icons';
import NewsLetterFooter from '../NewsLetterFooter/NewsLetterFooter';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <>
            <NewsLetterFooter />
            <div className={cx('social-footer')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('logo')}>
                        <LogoIcon width="6.9rem" height="3rem" />
                    </div>
                    <ul className={cx('social-links')}>
                        <li>
                            <a href="">
                                <FacebookLiteIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <YoutubeIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={cx('line')}></div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <MomoIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <ZaloIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <ShopeePayIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <VNPayIcon />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <ReePayIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('footer-main_left')}>
                        <div className={cx('col-3')}>
                            <h4 className={cx('footer-main__menu-title')}>Thông tin</h4>
                            <ul className={cx('footer-main__menu-links')}>
                                <li>
                                    <a href="">Giới thiệu Maison</a>
                                </li>
                                <li>
                                    <a href="">Hệ thống cửa hàng</a>
                                </li>
                                <li>
                                    <a href="">Tuyển dụng</a>
                                </li>
                                <li>
                                    <a href="">Thông tin liên hệ</a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="/logoSaleNoti.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col-3')}>
                            <h4 className={cx('footer-main__menu-title')}>Trợ giúp</h4>
                            <ul className={cx('footer-main__menu-links')}>
                                <li>
                                    <a href="">Hướng dẫn tạo tài khoản</a>
                                </li>
                                <li>
                                    <a href="">Phương thức thanh toán</a>
                                </li>
                                <li>
                                    <a href="">Chính sách VIP</a>
                                </li>
                                <li>
                                    <a href="">Chính sách giao hàng</a>
                                </li>
                                <li>
                                    <a href="">Chính sách đổi trả</a>
                                </li>
                                <li>
                                    <a href="">Chính sách bảo mật</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col-3')}>
                            <h4 className={cx('footer-main__menu-title')}>Thanh toán</h4>
                            <ul className={cx('footer-main__menu-links')}>
                                <li>
                                    <a href="">Visa / Mastercard / JCB</a>
                                </li>
                                <li>
                                    <a href="">Internet Banking</a>
                                </li>
                                <li>
                                    <a href="">Quét mã QR</a>
                                </li>
                                <li>
                                    <a href="">Thanh toán khi nhận hàng (COD)</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col-3')}>
                            <h4 className={cx('footer-main__menu-title')}>Giao hàng</h4>
                            <ul className={cx('footer-main__menu-links')}>
                                <li>
                                    <a href="">Tiki Smart Logistics</a>
                                </li>
                                <li>
                                    <a href="">Ahamove</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('footer-main_copy-right')}>
                        <p>© Copyright 2020 MAISON RETAIL MANAGEMENT INTERNATIONAL CORPORATION. All rights reserved.</p>
                        <p>
                            Địa chỉ: 189 - 197, Dương Bá Trạc, Phường 1, Quận 8, TP.Hồ Chí Minh | MST: 0313175103 |
                            Hotline: 1900 252 538
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
