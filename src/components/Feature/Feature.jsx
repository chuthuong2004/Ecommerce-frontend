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
                        <div className={cx('trademark')}>{feature.trademark}</div>
                        <p className={cx('name-product')}>{feature.productName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
