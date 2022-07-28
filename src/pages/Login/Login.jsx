import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon } from '../../components/Icons/Icons';
import styles from './Login.module.scss';
import config from './../../config/';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
const Login = () => {
    const location = useLocation();
    const [activeSignup, setActiveSignup] = useState(false);
    useEffect(() => {
        if (location.pathname === config.routes.login) {
            setActiveSignup(false);
        } else {
            setActiveSignup(true);
        }
    }, [location.pathname]);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('col-lg')}>
                    <div className={cx('customer-actions__greeting')}>
                        <Link to={config.routes.home} className={cx('logo')}>
                            <LogoIcon />
                        </Link>

                        <h1>
                            <span>Xin chào</span>Quý khách
                        </h1>
                    </div>
                </div>
                <div className={cx('col-lg')}>
                    <div className={cx('customer-actions__wrapper')}>
                        <div className={cx('login-n-signup', 'show')}>
                            <div className={cx('nav-links')}>
                                <Link
                                    to={config.routes.login}
                                    onClick={() => setActiveSignup(false)}
                                    className={cx('nav-link', !activeSignup && 'active')}
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    to={config.routes.register}
                                    onClick={() => setActiveSignup(true)}
                                    className={cx('nav-link', activeSignup && 'active')}
                                >
                                    Đăng ký
                                    {/* {activeSignup && <div className={cx('line')}></div>} */}
                                </Link>

                                <div className={cx('line')}></div>
                                {/* {activeSignup ? <div>Đăng ký</div> : <div>Đăng nhập</div>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
