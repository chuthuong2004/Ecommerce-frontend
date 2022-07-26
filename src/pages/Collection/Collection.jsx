import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import { FilterIcon, MinusIcon, PlusIcon } from '../../components/Icons';
import Button from './../../components/Button';
import { products } from './dataCollections';
import ProductItem from './../../components/ProductItem';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

let scrollTop = 0;
const Collection = () => {
    let { slugCollection } = useParams();
    const [activeFilter, setActiveFilter] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const [openGender, setOpenGender] = useState(false);
    // const [openBrand, setOpenBrand] = useState(false);
    // const [openType, setOpenType] = useState(false);
    // const [openColor, setOpenColor] = useState(false);
    // const [openSize, setOpenSize] = useState(false);
    // const [openMaterial, setOpenMaterial] = useState(false);
    const [isScrollUp, setIsScrollUp] = useState(false);
    useEffect(() => {
        const onScroll = (e) => {
            setIsScrollUp(e.target.documentElement.scrollTop < scrollTop);
            scrollTop = e.target.documentElement.scrollTop;
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <img
                    src="https://file.hstatic.net/1000284478/collection/col_2e69bd4cd74642d8ab271075aaa8cbe3.png"
                    alt=""
                    className={cx('collection-banner')}
                />
                <h1 className={cx('collection-title')}>{slugCollection}</h1>
                <div className={cx('collection-desc')}>
                    <strong>Goodbye Summer</strong>
                    <div>15.08 - 18.08</div>
                    <div>&nbsp;</div>
                    <div>Mai sơn Online tặng bạn</div>
                    <div>&nbsp;</div>

                    <div>
                        <strong style={{ fontSize: 18, textTransform: 'uppercase' }}>
                            01 Kem mắt AHC trị giá 840k
                        </strong>
                    </div>
                    <div>&nbsp;</div>
                    <div>Khi mua hóa đơn bất kỳ từ 2.690K</div>
                    <div>&nbsp;</div>
                    <div className={cx('note')}>
                        <div>
                            <span>Lưu ý:</span>
                        </div>
                        <div>
                            <span>Số lượng quà tặng có hạn</span>
                        </div>
                        <div>
                            <span>Quà tặng sẽ được chuyển tới quý khách sau khi đơn hàng hoàn tất</span>
                        </div>
                        <div>
                            <span>Ưu đãi không áp dụng đồng thời với chương trình khác tại Maison Online</span>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('collection-sidebar', activeFilter && 'active')}>
                        <div className={cx('sort-by-filter', openSort && 'open')}>
                            <div
                                onClick={() => setOpenSort(!openSort)}
                                className={cx(
                                    'title-filter',
                                    'd-flex',
                                    'justify-content-between',
                                    'align-items-center',
                                )}
                            >
                                <span>Sếp xếp</span>
                                {openSort ? <MinusIcon /> : <PlusIcon />}
                            </div>
                            <div className={cx('content-filter', openSort && 'open')}>
                                <ul className={cx('sort-list', 'd-flex', 'fd-column')}>
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
                        <div className={cx('filter-collection-item-list')}>
                            <div className={cx('title-filter')}>
                                <span>Bộ lọc</span>
                            </div>
                            <div className={cx('filter-collection-item', 'gender-filter', openGender && 'open')}>
                                <div
                                    onClick={() => setOpenGender(!openGender)}
                                    className={cx('d-flex', 'justify-content-between', 'align-items-center')}
                                >
                                    <span>Giới tính</span>

                                    {openGender ? <MinusIcon /> : <PlusIcon />}
                                </div>
                                <div className={cx('content-filter', openGender && 'open')}>
                                    <div className={'d-flex'}>
                                        <Button primary>Nữ</Button>
                                        <Button primary>Nam</Button>
                                        <Button primary>Unisex</Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('filter-collection-item', 'brand-filter')}>
                                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                    <span>Thương hiệu</span>
                                    <PlusIcon />
                                </div>
                            </div>
                            <div className={cx('filter-collection-item', 'type-filter')}>
                                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                    <span>Sản phẩm</span>
                                    <PlusIcon />
                                </div>
                            </div>
                            <div className={cx('filter-collection-item', 'color-filter')}>
                                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                    <span>Màu sắc</span>
                                    <PlusIcon />
                                </div>
                            </div>
                            <div className={cx('filter-collection-item', 'size-filter')}>
                                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                    <span>Kích cỡ</span>
                                    <PlusIcon />
                                </div>
                            </div>
                            <div className={cx('filter-collection-item', 'material-filter')}>
                                <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                    <span>Giá</span>
                                    <PlusIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('collection-right', activeFilter && 'active')}>
                        <div className={cx('collection-outer-heading', isScrollUp && 'active')}>
                            <div className={cx('collection-inner-heading')}>
                                <div className={cx('filter-count-total')}>{products.length} sản phẩm</div>
                                <div className={cx('btn-filter-collection')}>
                                    <Button onClick={() => setActiveFilter(!activeFilter)} leftIcon={<FilterIcon />}>
                                        <span className={cx('hide-btn')}>{activeFilter ? 'Hiện' : 'Ẩn'}</span>
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
