import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from './../components/Footer/Footer';
import config from './../../config';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {/* bannner */}
            <img src="https://file.hstatic.net/1000284478/file/header_39a72a810505498cbc66e705fece7758.png" alt="" />
            {/* Header */}
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
