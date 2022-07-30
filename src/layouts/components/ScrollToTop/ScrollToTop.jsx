import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowTopIcon } from './../../../components/Icons/Icons';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';
const cx = classNames.bind(styles);
const ScrollToTop = () => {
    const [openBackToTop, setOpenBackToTop] = useState(false);
    window.onscroll = () => {
        setOpenBackToTop(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    const handleScrollTop = () => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    console.log(openBackToTop);
    return (
        <div className={cx('back-to-top', openBackToTop ? 'active' : 'not-active')}>
            <div onClick={handleScrollTop} className={cx('icon')}>
                <ArrowTopIcon />
            </div>
        </div>
    );
};

export default ScrollToTop;
