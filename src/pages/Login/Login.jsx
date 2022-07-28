import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon } from '../../components/Icons/Icons';
import styles from './Login.module.scss';
import config from './../../config/';
import { useState, useEffect, useCallback } from 'react';
import Input from '../../components/Input';

const cx = classNames.bind(styles);
const Login = () => {
    const location = useLocation();
    const [activeSignup, setActiveSignup] = useState(false);
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: '',
    });
    const [dataRegister, setDataRegister] = useState({
        email: '',
        password: '',
        phone: '',
    });
    useEffect(() => {
        if (location.pathname === config.routes.login) {
            setActiveSignup(false);
            setDataRegister({
                email: '',
                password: '',
                phone: '',
            });
        } else {
            setActiveSignup(true);
            setDataLogin({
                email: '',
                password: '',
            });
        }
    }, [location.pathname]);
    const handleChangeLogin = useCallback(
        (e) => {
            setDataLogin({
                ...dataLogin,
                [e.target.name]: e.target.value,
            });
        },
        [dataLogin],
    );
    const handleChangeRegister = useCallback(
        (e) => {
            setDataRegister({
                ...dataRegister,
                [e.target.name]: e.target.value,
            });
        },
        [dataRegister],
    );
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('col-lg')}>
                    <div className={cx('customer-actions__greeting')}>
                        <div className={cx('logo')}>
                            <Link to={config.routes.home}>
                                <LogoIcon />
                            </Link>
                        </div>
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
                                </Link>

                                <div className={cx('line')}></div>
                            </div>
                            <div className="sigin">
                                {activeSignup ? (
                                    <div className={cx('inputs')}>
                                        <div className={cx('register-desc')}>
                                            Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ và số, không bao gồm ký tự đặc
                                            biệt.
                                        </div>
                                        <Input
                                            label="email"
                                            type="email"
                                            name="email"
                                            onChange={handleChangeRegister}
                                            value={dataRegister.email}
                                        />
                                        <Input
                                            label="mật khẩu"
                                            type="password"
                                            name="password"
                                            onChange={handleChangeRegister}
                                            value={dataRegister.password}
                                        />
                                        <Input
                                            label="số điện thoại"
                                            name="phone"
                                            onChange={handleChangeRegister}
                                            value={dataRegister.phone}
                                        />
                                    </div>
                                ) : (
                                    <div className={cx('inputs')}>
                                        <Input
                                            label="email"
                                            type="email"
                                            name="email"
                                            onChange={handleChangeLogin}
                                            value={dataLogin.email}
                                        />
                                        <Input
                                            label="mật khẩu"
                                            type="password"
                                            name="password"
                                            onChange={handleChangeLogin}
                                            value={dataLogin.password}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
