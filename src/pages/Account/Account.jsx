import React from 'react';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import config from '../../config';
import AccountInfo from './components/AccountInfo';
import Order from './components/Order';
import Address from './components/Address';
import RecentlyViewed from './components/RecentlyViewed';
import { sidebars } from '../../assets/sidebars';
import { user } from './../../assets/fakeUser';
import { ArrowLeftIcon } from './../../components/Icons';
const cx = classNames.bind(styles);
const Account = () => {
    // const user = {
    //     firstName: 'Đào',
    //     lastName: 'Văn Nam',
    // avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/272272345_1103541183782082_2260967379827568989_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rRUdiX08pJcAX_Zrlyp&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8LBetb9DxxgpkyKoFLwkoH6wqCZJ3DHr_U9Q3gqBAUFQ&oe=63053C8A',
    // };
    const { pathname } = useLocation();
    const { orderID } = useParams();
    let defaultAddress = user.shipmentDetails.find((shipmentDetail) => shipmentDetail.isDefault);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('container')}>
                    <div className={cx('col-3')}>
                        <div className={cx('account-avatar')}>
                            <div className={cx('avatar')}>
                                <span className={cx('avatar-name')}>{defaultAddress.firstName[0]}</span>
                                {user?.avatar && <img className={cx('img')} src={user.avatar} alt="" />}
                            </div>
                            <div
                                className={cx('name')}
                            >{`Xin chào, ${defaultAddress.firstName} ${defaultAddress.lastName}`}</div>
                        </div>
                        <div className={cx('sidebar__list')}>
                            {sidebars.map((sidebar, index) => (
                                <NavLink
                                    end={sidebar.endPath}
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
                                {orderID ? (
                                    <Link
                                        style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                                        to={config.routes.order}
                                    >
                                        <ArrowLeftIcon />
                                        <strong style={{ fontSize: 14, letterSpacing: 1, fontWeight: 700 }}>
                                            Đơn hàng
                                        </strong>
                                    </Link>
                                ) : (
                                    sidebars.find((sidebar) => sidebar.to === pathname).title
                                )}
                            </h1>
                            {pathname === config.routes.account && (
                                <AccountInfo
                                    data={{
                                        ...defaultAddress,
                                        email: user.email,
                                    }}
                                />
                            )}
                            {/* {pathname === config.routes.order && <Order />} */}
                            {pathname.includes(config.routes.order) && <Order />}
                            {pathname === config.routes.address && <Address data={user.shipmentDetails} />}
                            {pathname === config.routes.recentlyViewed && <RecentlyViewed />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
