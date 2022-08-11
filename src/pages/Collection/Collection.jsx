import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import { FilterIcon, MinusIcon } from '../../components/Icons';
import Button from './../../components/Button';
import { products } from './dataCollections';
import ProductItem from './../../components/ProductItem';
import { useState } from 'react';
const cx = classNames.bind(styles);
const Collection = () => {
    let { slugCollection } = useParams();
    const [hideFilter, setHideFilter] = useState(false);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <img
                    src="https://file.hstatic.net/1000284478/collection/col_2e69bd4cd74642d8ab271075aaa8cbe3.png"
                    alt=""
                    className={cx('collection-banner')}
                />
                <h1 className={cx('collection-title')}>New Arrival</h1>
                <div className={cx('content')}>
                    <div className={cx('collection-sidebar', hideFilter && 'hide-active')}>
                        <div className={cx('sort-by-filter')}>
                            <div className={cx('title-filter')}>
                                <span>Sếp xếp</span>
                                <MinusIcon />
                            </div>
                            <ul className={cx('sortList')}>
                                <li>
                                    <input type="radio" name="sort" id="popular" />
                                    <label htmlFor="popular">phổ biến nhất</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="new" />
                                    <label htmlFor="new">mới cập nhật</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="bestseller" />
                                    <label htmlFor="bestseller">bán chạy nhất</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="price-decrease" />
                                    <label htmlFor="price-decrease">Giá (cao - thấp)</label>
                                </li>
                                <li>
                                    <input type="radio" name="sort" id="price-increase" />
                                    <label htmlFor="price-increase">Giá (thấp - cao)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('collection-right', hideFilter && 'hide-active')}>
                        <div className={cx('collection-outer-heading')}>
                            <div className={cx('collection-inner-heading')}>
                                <div className={cx('filter-count-total')}>{products.length} sản phẩm</div>
                                <div className={cx('btn-filter-collection')}>
                                    <Button onClick={() => setHideFilter(!hideFilter)} leftIcon={<FilterIcon />}>
                                        <span className={cx('hide-btn')}>{hideFilter ? 'Hiện' : 'Ẩn'}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('collection-list')}>
                            {products.map((product) => (
                                <ProductItem key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
