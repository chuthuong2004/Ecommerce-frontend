import React from 'react';
import Slide from './../../../../components/Slide/Slide';
import BlockTitle from './../../../../components/BlockTitle/BlockTitle';
import Feature from './../../../../components/Feature/Feature';
import TradeMarkProduct from './../../../../components/TradeMarkProduct/TradeMarkProduct';
import CategoryContainer from './../../../../components/CategoryContainer/CategoryContainer';
import { categoriesKids, features, slides, trademarkProducts } from './dataKids';
import classNames from 'classnames/bind';
import styles from './Kids.module.scss';
const cx = classNames.bind(styles);
const Kids = () => {
    return (
        <div>
            <img
                className={cx('img-intro-women')}
                src="https://file.hstatic.net/1000284478/file/main_10da49a4066343c5ab6d1e0e6fbba2ac.png"
                alt=""
            />
            <BlockTitle title={"This week's"} strong="highlight" />
            <Feature features={features} />
            <BlockTitle title={'Handpicked'} strong="trends" />
            {trademarkProducts.map((trademarkProduct) => (
                <TradeMarkProduct key={trademarkProduct._id} trademarkProduct={trademarkProduct} />
            ))}
            <CategoryContainer categories={categoriesKids} />
        </div>
    );
};

export default Kids;
