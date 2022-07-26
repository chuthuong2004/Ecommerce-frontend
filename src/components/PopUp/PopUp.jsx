import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
const cx = classNames.bind(styles);
const PopUp = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <h3>Yêu thích</h3>
                    <h3>Yêu thích</h3>
                    <h3>Yêu thích</h3>
                    <h3>Yêu thích</h3>
                    <h3>Yêu thích</h3>
                    <h3>Yêu thích</h3>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
