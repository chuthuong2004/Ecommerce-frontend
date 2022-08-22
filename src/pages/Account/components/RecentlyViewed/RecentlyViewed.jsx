import React from 'react';
import styles from './RecentlyViewed.module.scss';
import classNames from 'classnames/bind';
import ProductItem from '../../../../components/ProductItem';
import { products } from '../../../Collection/dataCollections';
const cx = classNames.bind(styles);
const RecentlyViewed = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
