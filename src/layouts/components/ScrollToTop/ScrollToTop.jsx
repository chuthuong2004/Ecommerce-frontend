import { useState } from 'react';
import { ArrowTopIcon } from './../../../components/Icons';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';
const cx = classNames.bind(styles);
const ScrollToTop = () => {
    const [openBackToTop, setOpenBackToTop] = useState(false);
    const scroll = () => {
        const scrolled = document.documentElement.scrollTop;
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
