import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { FacebookIcon, GoogleIcon, LeftIcon, LogoIcon } from '../../components/Icons/Icons';
import styles from './Login.module.scss';
import config from './../../config/';
import { useState, useEffect, useCallback, useId } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const cx = classNames.bind(styles);
const Login = () => {
    const idCheckbox = useId();
    const location = useLocation();
    const [titleButton, setTitleButton] = useState('đăng nhập');
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
    const [errorInput, setErrorInput] = useState({
        email: '',
        password: '',
        phone: '',
    });
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    useEffect(() => {
        if (location.pathname === config.routes.login) {
            setActiveSignup(false);
            setDataRegister({
                email: '',
                password: '',
                phone: '',
            });
            setTitleButton('đăng nhập');
        } else {
            setActiveSignup(true);
            setDataLogin({
                email: '',
                password: '',
            });
            setTitleButton('tạo tài khoản');
        }
        setErrorInput({
            email: '',
            password: '',
            phone: '',
        });
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
    const checkInputEmpty = (data) => {
        setErrorInput({
            email: !data.email && 'Vui lòng nhập email',
            password:
                (!data.password && 'Vui lòng nhập mật khẩu') ||
                (data.password && data.password.length < 8 && 'Mật khẩu phải có ít nhất 8 ký tự'),
            phone: !data.phone && 'Vui lòng nhập số điện thoại',
        });
        return data.email && data.password && data.password.length >= 8;
    };
    const handleClick = () => {
        const handleLogin = () => {
            checkInputEmpty(dataLogin) && alert('OK');
        };
        const handleRegister = () => {
            checkInputEmpty(dataRegister) && dataRegister.phone && alert('OK res');
        };
        if (location.pathname === config.routes.login) {
            handleLogin();
        } else {
            handleRegister();
        }
    };
    const handleBlur = (e) => {
        setErrorInput({ ...errorInput, [e.target.name]: '' });
    };
    return (
        <section className={cx('login-section')}>
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
                                <span>Xin chào </span>Quý khách
                            </h1>
                        </div>
                    </div>
                    <div className={cx('col-lg')}>
                        <div className={cx('customer-actions__wrapper')}>
                            <div className={cx('customer-actions__form', openForgotPassword && 'show')}>
                                <div className={cx('login-n-signup')}>
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
                                    <div className={cx('customer-login')}>
                                        {activeSignup ? (
                                            <>
                                                <div className={cx('form-desc')}>
                                                    Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ và số, không bao gồm
                                                    ký tự đặc biệt.
                                                </div>
                                                <Input
                                                    label="email"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChangeRegister}
                                                    value={dataRegister.email}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                                <Input
                                                    label="mật khẩu"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChangeRegister}
                                                    value={dataRegister.password}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                                <Input
                                                    label="số điện thoại"
                                                    name="phone"
                                                    onChange={handleChangeRegister}
                                                    value={dataRegister.phone}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <Input
                                                    label="email"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChangeLogin}
                                                    value={dataLogin.email}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                                <Input
                                                    label="mật khẩu"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChangeLogin}
                                                    value={dataLogin.password}
                                                    error={errorInput}
                                                    onBlur={handleBlur}
                                                />
                                            </>
                                        )}
                                        <Input type="checkbox" label="Lưu thông tin đăng nhập" />
                                        {activeSignup && (
                                            <>
                                                <Input type="checkbox" label="Đăng kí nhận thông tin khuyến mãi" />
                                                <div className={cx('form-desc')}>
                                                    Bằng cách tạo tài khoản ở Maison là bạn đồng ý với các{' '}
                                                    <span>Chính sách Bảo mật và Điều khoản - Điều kiện.</span>
                                                </div>
                                            </>
                                        )}
                                        <Button
                                            onClick={handleClick}
                                            className={cx('btn-action')}
                                            large
                                            primary
                                            children={titleButton}
                                        />
                                        {!activeSignup && (
                                            <div className={cx('redirect-form')}>
                                                <span
                                                    onClick={() => setOpenForgotPassword(true)}
                                                    className={cx('redirect-btn')}
                                                >
                                                    Quên mật khẩu?
                                                </span>
                                            </div>
                                        )}
                                        <div className={cx('input-line')}></div>
                                    </div>
                                    <div className={cx('login-n-signup__socials')}>
                                        <div className={cx('btn')}>
                                            <Button
                                                className={cx('btn__facebook')}
                                                large
                                                primary
                                                children="Đăng nhập bằng facebook"
                                                icon={<FacebookIcon width="18" height="18" />}
                                            />
                                        </div>
                                        <div className={cx('btn')}>
                                            <Button
                                                className={cx('btn__google')}
                                                large
                                                primary
                                                children="Đăng nhập bằng google"
                                                icon={<GoogleIcon width="18" height="18" />}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('forgot-password')}>
                                    <div className={cx('forgot-password__top')}>
                                        <h3 className={cx('form-title')}>Quên mật khẩu</h3>
                                        <div className={cx('form-desc')}>
                                            Vui lòng nhập email của bạn ở đây để nhận hướng dẫn đặt lại mật khẩu.
                                        </div>
                                        <Input label="email" type="email" name="email" />
                                        <div className={cx('btn')}>
                                            <Button large primary children="xác thực email" />
                                        </div>
                                        <div className={cx('btn', 'btn-forgot')}>
                                            <Button
                                                onClick={() => setOpenForgotPassword(false)}
                                                leftIcon={<LeftIcon />}
                                                large
                                                children="trở về đăng nhập"
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('register-now')}>
                                        Bạn chưa có tài khoản ?{' '}
                                        <Link to={config.routes.register} onClick={() => setOpenForgotPassword(false)}>
                                            Tạo ngay
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
