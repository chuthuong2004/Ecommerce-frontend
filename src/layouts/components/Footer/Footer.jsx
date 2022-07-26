import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('row-1')}>
                        <h3 className={cx('title')}>Địa chỉ liên hệ</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon className={cx('icon-contact')} icon={faLocationDot} />
                                <p className={cx('content')}>Quận Gò Vấp</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('icon-contact')} icon={faPhoneAlt} />

                                <p className={cx('content')}>0921 775 630</p>
                            </li>
                        </ul>
                        <h3 className={cx('title')}>Thời gian mở cửa</h3>
                        <p className={cx('content', 'time')}>Thứ Hai - Thứ Sáu ... 8:00 đến 18:00</p>
                        <p className={cx('content', 'time')}>Thứ 7 ............... 9:00 đến 21:00</p>
                        <p className={cx('content', 'time')}>Chủ Nhật ............ 10:00 đến 21:00</p>
                    </div>
                </div>
                <div className={cx('row')}>
                    <h3 className={cx('title')}>Danh mục</h3>
                    <ul>
                        <li>Tin khuyến mãi</li>
                        <li>Tin tuyển dụng</li>
                        <li>Chính sách đổi trả</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Hướng dẫn mua hàng</li>
                    </ul>
                </div>
                <div className={cx('row')}>
                    <h3 className={cx('title')}>Đăng ký</h3>
                    <p className={cx('content')}>Đăng ký để nhận được thông tin mới nhất từ chúng tôi.</p>
                    <div className={cx('form')}>
                        <input type="email" placeholder="Email..." id="" />
                        <button className={cx('btn-signup')}>Đăng ký</button>
                    </div>
                    <div className={cx('icons')}>
                        <Tippy
                            delay={100}
                            placement="top"
                            content={<span className={cx('tippy-social')}>Follow on Facebook</span>}
                        >
                            <div className={cx('icon', 'facebook')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                        </Tippy>
                        <Tippy
                            delay={100}
                            placement="top"
                            content={<span className={cx('tippy-social')}>Follow on Instagram</span>}
                        >
                            <div className={cx('icon', 'instagram')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </Tippy>
                        <Tippy
                            delay={100}
                            placement="top"
                            content={<span className={cx('tippy-social')}>Follow on Twitter</span>}
                        >
                            <div className={cx('icon', 'twitter')}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </Tippy>
                        <Tippy
                            delay={100}
                            placement="top"
                            content={<span className={cx('tippy-social')}>Sen us an email</span>}
                        >
                            <div className={cx('icon', 'email')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                        </Tippy>
                        <Tippy
                            delay={100}
                            placement="top"
                            content={<span className={cx('tippy-social')}>Call us</span>}
                        >
                            <div className={cx('icon', 'phone')}>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                        </Tippy>
                        <Tippy
                            delay={100}
                            placement="top"
                            content={<span className={cx('tippy-social')}>Follow on LinkedIn</span>}
                        >
                            <div className={cx('icon', 'linkedin')}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('row')}>
                    <h3 className={cx('title')}>Tải ngay slyder</h3>
                    <div className={cx('download')}>
                        <img
                            className={cx('img-qr')}
                            src="https://decloset.vn/landingpages/apps/images/download-qr.jpg"
                            alt=""
                        />
                        <div className={cx('download-app')}>
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                                alt=""
                            />
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <p className={cx('content')}>© Bản quyền thuộc về SLYDER</p>
            </div>
        </>
    );
}

export default Footer;
