import classNames from 'classnames/bind';
import styles from './Women.module.scss';
import Slide from '../../../../components/Slide/Slide';
import BlockTitle from '../../../../components/BlockTitle';
import Feature from '../../../../components/Feature';
import TradeMarkProduct from '../../../../components/TradeMarkProduct';
import { categoriesWomen, features, slides, trademarkProducts } from './dataWomen';
import CategoryContainer from '../../../../components/CategoryContainer';
const cx = classNames.bind(styles);
const Women = () => {
    return (
        <div>
            <Slide slides={slides} />
            <img
                className={cx('img-intro-women')}
                src="https://file.hstatic.net/1000284478/file/main__5__1aa6d4e80ce24346b89d98052095556a.png"
                alt=""
            />
            <BlockTitle title={"This week's"} strong="highlight" />
            <Feature features={features} />
            <BlockTitle title={'Handpicked'} strong="trends" />
            {trademarkProducts.map((trademarkProduct) => (
                <TradeMarkProduct key={trademarkProduct._id} trademarkProduct={trademarkProduct} />
            ))}
            <CategoryContainer categories={categoriesWomen} />
        </div>
    );
};
export default Women;
