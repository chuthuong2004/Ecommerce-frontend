import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from './../components/Footer/Footer';
import config from './../../config';
import ScrollToTop from '../components/ScrollToTop';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const { pathname } = useLocation();
    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    useEffect(() => {
        const handleScrollTop = () => {
            document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('render');
        };
        handleScrollTop();
    }, [pathname, query]);
    return (
        <div className={cx('wrapper')}>
            {/* banner */}
            <img
                className={cx('img-banner')}
                src="https://file.hstatic.net/1000284478/file/header_39a72a810505498cbc66e705fece7758.png"
                alt=""
            />
            {/* Header */}
            <ScrollToTop />
            <Header />
            {/* Container */}
            <div className={cx('container')}>
                <div className={cx('content')}> {children} </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
