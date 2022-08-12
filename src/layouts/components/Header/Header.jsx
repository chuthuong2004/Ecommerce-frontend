import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import config from './../../../config';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import {
    BagActiveIcon,
    BagIcon,
    HeartActiveIcon,
    HeartIcon,
    LogoIcon,
    SearchIcon,
    UserActiveIcon,
    UserIcon,
} from '../../../components/Icons';
import Button from '../../../components/Button';
import PopUp from '../../../components/PopUp';
import MenuSub from './MenuSub/';
import Search from './Search';
import { headerLinks } from '../../../assets/headerLinks';
const cx = classNames.bind(styles);

function Header() {
    const user = null;
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);
    const [activeWishList, setActiveWishList] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [currentPageYOffset, setCurrentPageYOffset] = useState(0);
    window.onscroll = () => {
        setCurrentPageYOffset(window.pageYOffset);
        setIsScrolled(window.pageYOffset > currentPageYOffset ? false : true);
        // setActiveWishList(false);
        return () => (window.onscroll = null);
    };
    const location = useLocation();
    const handleScrollTop = () => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    useEffect(() => {
        if (location.pathname === config.routes.cart) {
            setActiveProfile(false);
        }
        setActiveWishList(false);
    }, [location.pathname]);
    const handleClickActive = (direction) => {
        if (direction === 'account') {
            setActiveProfile(!activeProfile);
            setActiveWishList(false);
        } else if (direction === 'wishlist') {
            setActiveWishList(!activeWishList);
            setActiveProfile(false);
        }
    };
    const toggleModal = () => {
        setActiveWishList(!activeWishList);
    };
    return (
        <div className={cx('container', isScrolled ? 'sticky' : 'out-top')}>
            {/* banner */}
            <img
                className={cx('img-banner')}
                src="https://file.hstatic.net/1000284478/file/header_39a72a810505498cbc66e705fece7758.png"
                alt=""
            />
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('nav-left')}>
                        <Link to={config.routes.home} className={cx('logo')}>
                            <LogoIcon height="40" />
                        </Link>
                    </div>
                    <div className={cx('nav-center')}>
                        <ul>
                            {headerLinks.map((link, i) => (
                                <HeadlessTippy
                                    key={i}
                                    delay={[0, 10]}
                                    interactive={true}
                                    placement="bottom"
                                    render={(attrs) => {
                                        return (
                                            <div>
                                                <MenuSub subLinks={link.subLinks} tabIndex="-1" {...attrs} />
                                            </div>
                                        );
                                    }}
                                >
                                    <li className={cx(link.class)}>
                                        <Link onClick={() => handleScrollTop()} to={link.to}>
                                            {link.title}
                                        </Link>
                                    </li>
                                </HeadlessTippy>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('nav-right')}>
                        <div onClick={() => setOpenSearch(true)} className={cx('search')}>
                            <SearchIcon width="2rem" height="2rem" />
                            <span>Tìm kiếm</span>
                        </div>
                        {openSearch && <Search handleClose={() => setOpenSearch(false)} />}
                        <div className={cx('profile')}>
                            <HeadlessTippy
                                delay={[0, 50]}
                                interactive={true}
                                visible={activeProfile}
                                placement="bottom"
                                render={(attrs) => {
                                    return user ? (
                                        <PopperWrapper className="popper-user">
                                            <ul className={cx('popper-user')} tabIndex="-1" {...attrs}>
                                                <li>
                                                    <Link to={config.routes.account}>Thông tin tài khoản</Link>
                                                </li>
                                                <li>
                                                    <Link to={config.routes.order}>Đơn hàng</Link>
                                                </li>
                                                <li>
                                                    <Link to={config.routes.address}>Địa chỉ</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/da-xem-gan-day'}>Đã xem gần đây</Link>
                                                </li>
                                                <li>
                                                    <Link to={'#signup-notify'}>Đằng ký nhận thông báo</Link>
                                                </li>
                                                <li>
                                                    <Link to={config.routes.policy}>Trợ giúp</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/tro-thanh-doi-tac'}>Trở thành đối tác B2B</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/log-out'}>Đăng xuất</Link>
                                                </li>
                                            </ul>
                                        </PopperWrapper>
                                    ) : (
                                        <PopperWrapper className="popper-user">
                                            <ul className={cx('popper-user')} tabIndex="-1" {...attrs}>
                                                <li>
                                                    <Link to={config.routes.policy}>Trợ giúp</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/tro-thanh-doi-tac'}>Trở thành đối tác B2B</Link>
                                                </li>
                                            </ul>
                                            <div className={cx('buttons')}>
                                                <Button primary to={config.routes.login}>
                                                    Đăng Nhập
                                                </Button>
                                            </div>
                                            <div className={cx('buttons')}>
                                                <Button primary to={config.routes.register}>
                                                    Tạo Tài Khoản
                                                </Button>
                                            </div>
                                        </PopperWrapper>
                                    );
                                }}
                            >
                                <Tippy
                                    placement="bottom"
                                    delay={100}
                                    content={
                                        <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                                            Tài khoản
                                        </span>
                                    }
                                >
                                    <div
                                        onClick={() => handleClickActive('account')}
                                        className={cx('icons', activeProfile && 'active')}
                                    >
                                        <UserIcon className={cx('icon')} />
                                        <UserActiveIcon className={cx('icon-active')} />
                                    </div>
                                </Tippy>
                            </HeadlessTippy>
                        </div>
                        <div className={cx('wishlist')}>
                            <Tippy
                                placement="bottom"
                                delay={100}
                                content={
                                    <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                                        Yêu thích
                                    </span>
                                }
                            >
                                <div
                                    onClick={() => handleClickActive('wishlist')}
                                    className={cx('icons', activeWishList && 'active')}
                                >
                                    <HeartIcon className={cx('icon')} />
                                    <HeartActiveIcon className={cx('icon-active')} />
                                </div>
                            </Tippy>
                            <PopUp
                                activeWishList={activeWishList}
                                setActiveWishList={setActiveWishList}
                                toggleModal={toggleModal}
                            />
                        </div>
                        <Link onClick={() => handleClickActive('cart')} to={config.routes.cart} className={cx('cart')}>
                            <Tippy
                                placement="bottom"
                                delay={100}
                                content={
                                    <span style={{ fontSize: '13px' }} className={cx('tippy-content')}>
                                        Giỏ hàng
                                    </span>
                                }
                            >
                                <div className={cx('icons', location.pathname === config.routes.cart && 'active')}>
                                    <BagIcon className={cx('icon')} />
                                    <BagActiveIcon className={cx('icon-active')} />
                                    <span
                                        className={cx(
                                            'quantity-item',
                                            location.pathname === config.routes.cart && 'active',
                                        )}
                                    >
                                        12
                                    </span>
                                </div>
                            </Tippy>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
