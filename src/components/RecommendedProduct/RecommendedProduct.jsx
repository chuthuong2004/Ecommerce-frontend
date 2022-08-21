import styles from './RecommendedProduct.module.scss';
import classNames from 'classnames/bind';
import SlideProduct from '../SlideProduct';
import { trademarkProducts } from '../../pages/Home/components/Kids/dataKids';
const cx = classNames.bind(styles);
const RecommendedProduct = ({ slideShow, slideScroll, line = true, small = false, noMargin }) => {
    return (
        <div>
            <div className={cx('product-recommended')}>
                {line && <div className={cx('line')}></div>}
                <div className={cx('container-fluid', small && 'container-slide', noMargin && 'mr-0')}>
                    <SlideProduct
                        className={cx(small && 'slide-product')}
                        slideShow={slideShow}
                        slideScroll={slideScroll}
                        title="Gợi ý cho bạn"
                        products={trademarkProducts[0].products}
                    />
                </div>
            </div>
        </div>
    );
};

export default RecommendedProduct;
