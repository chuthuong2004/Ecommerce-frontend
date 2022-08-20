import styles from './TradeMarkProduct.module.scss';
import classNames from 'classnames/bind';
import SlideProduct from '../SlideProduct';
const cx = classNames.bind(styles);
const TradeMarkProduct = ({ trademarkProduct, banner = true }) => {
    return (
        <div className={cx('container')}>
            {banner && <img src={trademarkProduct.imgTrademark} alt="" className={cx('trademark-img')} />}
            <div className={cx('products-container')}>
                <SlideProduct products={trademarkProduct.products} />
            </div>
        </div>
    );
};

export default TradeMarkProduct;
