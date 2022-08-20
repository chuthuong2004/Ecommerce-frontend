import React from 'react';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {
    HelpIcon,
    LocationIcon,
    LogoutIcon,
    MailIcon,
    RoundedIcon,
    TruckIcon,
    UserActiveIcon,
    ValiIcon,
} from '../../components/Icons';
const cx = classNames.bind(styles);
const Account = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('container')}>
                    <div className={cx('col-3')}>
                        <div className={cx('account-avatar')}>
                            <div className={cx('avatar')}>
                                <span className={cx('avatar-name')}>Đ</span>
                                {/* <img
                                    className={cx('img')}
                                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/272272345_1103541183782082_2260967379827568989_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rRUdiX08pJcAX_Zrlyp&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8LBetb9DxxgpkyKoFLwkoH6wqCZJ3DHr_U9Q3gqBAUFQ&oe=63053C8A"
                                    alt=""
                                /> */}
                            </div>
                            <div className={cx('name')}>Xin chào, Văn Thương Đào</div>
                        </div>
                        <div className={cx('sidebar__list')}>
                            <div className={cx('sidebar__item', 'active')}>
                                <UserActiveIcon />
                                <span>Thông tin cá nhân</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <TruckIcon />
                                <span>Đơn hàng</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <LocationIcon />
                                <span>Địa chỉ</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <RoundedIcon />
                                <span>Đã xem gần đây</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <MailIcon />
                                <span>Đăng kí nhận thông báo</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <HelpIcon />
                                <span>Trợ giúp</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <ValiIcon />
                                <span>Trở thành đối tác 2B2</span>
                            </div>
                            <div className={cx('sidebar__item')}>
                                <LogoutIcon />
                                <span>Đăng xuất</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-9')}>
                        <div className={cx('account-info')}>
                            <h1 className={cx('account-page-title')}>thông tin cá nhân</h1>
                            <div className={cx('form')}>
                                <div>
                                    <Input readonly label="Tên" value="Văn Thương" />
                                </div>
                                <div>
                                    <Input readonly label="Tên" value="Đào" />
                                </div>
                                <div>
                                    <Input readonly label="Sinh nhật" placeholder="Nhập ngày tháng năm" />
                                </div>
                                <div>
                                    <Input readonly label="Giới tính" value="Nam" />
                                </div>
                                <div>
                                    <Input readonly label="Số điện thoại" value="0333729170" />
                                </div>
                                <div>
                                    <Input readonly type="email" value="email@example.com" label="Email" />
                                </div>
                                <div className={cx('action')}>
                                    <Button className={cx('btn')} primary large>
                                        Cập nhật thông tin
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
