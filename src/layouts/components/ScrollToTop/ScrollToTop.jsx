import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowTopIcon } from './../../../components/Icons/Icons';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';
const cx = classNames.bind(styles);
const ScrollToTop = () => {
    const [openBackToTop, setOpenBackToTop] = useState(false);
    const scroll = () => {
        // console.log(window.scrollY);
        // setOpenBackToTop(window.scrollY > 90 ? true : false);
        // setOpenBackToTop(window.pageYOffset < 90 ? false : true);
        const scrolled = document.documentElement.scrollTop;
        // console.log(scrolled);
        setOpenBackToTop(scrolled > 90 ? true : false);
    };
    window.addEventListener('scroll', scroll);
    const handleScrollTop = () => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className={cx('back-to-top', openBackToTop ? 'active' : 'not-active')}>
            <div onClick={handleScrollTop} className={cx('icon')}>
                <ArrowTopIcon />
            </div>
        </div>
    );
};

export default ScrollToTop;
