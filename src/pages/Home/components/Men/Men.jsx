import classNames from 'classnames/bind';
import styles from './Men.module.scss';
import Slide from '../../../../components/Slide/';
import BlockTitle from '../../../../components/BlockTitle';
import Feature from '../../../../components/Feature';
import { categoriesMen, features, slides, trademarkProducts } from './dataMen';
import TradeMarkProduct from '../../../../components/TradeMarkProduct';
import CategoryContainer from '../../../../components/CategoryContainer';
const cx = classNames.bind(styles);
const Men = () => {
    return (
        <div>
            <Slide slides={slides} />
            <BlockTitle title={"This week's"} strong="highlight" />
            <Feature features={features} />
            <BlockTitle title={'Handpicked'} strong="trends" />
            {trademarkProducts.map((trademarkProduct) => (
                <TradeMarkProduct key={trademarkProduct._id} trademarkProduct={trademarkProduct} />
            ))}
            <CategoryContainer categories={categoriesMen} />
        </div>
    );
};

export default Men;
