import classNames from 'classnames/bind';
import styles from './Feature.module.scss';
const cx = classNames.bind(styles);
const Feature = ({ features }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('container-fluid')}>
                {features.map((feature) => (
                    <div key={feature._id} className={cx('feature-item')}>
                        <img src={feature.img} alt="" className={cx('lazyloaded')} />
                        <div className={cx('banner-product')}>
                            <img
                                src="https://file.hstatic.net/1000284478/file/frame__22__c3a6e45e3424441da3746870f1e77536.png"
                                alt=""
                                className={cx('banner-img')}
                            />
                        </div>
                        <div className={cx('trademark')}>{feature.trademark}</div>
                        <p className={cx('name-product')}>{feature.productName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
