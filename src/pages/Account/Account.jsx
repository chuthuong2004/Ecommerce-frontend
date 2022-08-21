import React from 'react';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { NavLink, useLocation } from 'react-router-dom';
import config from '../../config';
import AccountInfo from './components/AccountInfo';
import Order from './components/Order';
import Address from './components/Address';
import RecentlyViewed from './components/RecentlyViewed';
import { sidebars } from '../../assets/sidebars';
const cx = classNames.bind(styles);
const Account = () => {
    const { pathname } = useLocation();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('container')}>
                    <div className={cx('col-3')}>
                        <div className={cx('account-avatar')}>
                            <div className={cx('avatar')}>
                                {/* <span className={cx('avatar-name')}>Đ</span> */}
                                <img
                                    className={cx('img')}
                                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/272272345_1103541183782082_2260967379827568989_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rRUdiX08pJcAX_Zrlyp&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8LBetb9DxxgpkyKoFLwkoH6wqCZJ3DHr_U9Q3gqBAUFQ&oe=63053C8A"
                                    alt=""
                                />
                            </div>
                            <div className={cx('name')}>Xin chào, Văn Thương Đào</div>
                        </div>
                        <div className={cx('sidebar__list')}>
                            {sidebars.map((sidebar, index) => (
                                <NavLink
                                    end
                                    key={index}
                                    to={sidebar.to}
                                    className={(nav) => cx('sidebar__item', { active: nav.isActive })}
                                >
                                    <div className={cx('sidebar__icons')}>
                                        <div className={cx('icon')}>{sidebar.icon}</div>
                                        <div className={cx('icon', 'active')}>{sidebar.iconActive}</div>
                                    </div>
                                    <span>{sidebar.title}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className={cx('col-9')}>
                        <div className={cx('account-info')}>
                            <h1 className={cx('account-page-title')}>
                                {sidebars.find((sidebar) => sidebar.to === pathname).title}
                            </h1>
                            {pathname === config.routes.account && <AccountInfo />}
                            {pathname === config.routes.order && <Order />}
                            {pathname === config.routes.address && <Address />}
                            {pathname === config.routes.recentlyViewed && <RecentlyViewed />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
