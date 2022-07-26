import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const Blog = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('card')}>
                    <div className={cx('card-content')}>
                        <div className={cx('image')}>
                            <img
                                src="http://slyder.vn/wp-content/uploads/2020/11/z2172415675801_11f1633413f38656462328fe1797e809.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
