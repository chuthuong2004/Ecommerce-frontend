import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { ArrowRightIcon, SearchIcon, TruckEmptyIcon } from '../../../../components/Icons';
import EmptyContent from './../../../../components/EmptyContent';
import RecommendedProduct from './../../../../components/RecommendedProduct';
import TabContent from '../../../../components/TabContent';
import Input from '../../../../components/Input';
import { Link, useLocation, useParams } from 'react-router-dom';
import config from '../../../../config';
import { useState } from 'react';
import OrderDetail from './OrderDetail';
import { dataOrder } from '../../../../assets/dataOrder';
const cx = classNames.bind(styles);

const processing = dataOrder.filter((order) => order.orderStatus === 'Processing');
const shipping = dataOrder.filter((order) => order.orderStatus === 'Shipping');
const delivery = dataOrder.filter((order) => order.orderStatus === 'Delivery');
const delivered = dataOrder.filter((order) => order.orderStatus === 'Delivered');
const Order = () => {
    let { orderID } = useParams();
    const { pathname } = useLocation();
    const Content = ({ data }) => {
        console.log(data);
        return (
            <div>
                <div className={cx('orders-search')}>
                    <div className={cx('search-icon')}>
                        <SearchIcon width="20" height="20" color="#868D95" />
                    </div>
                    <input
                        className={cx('search-input')}
                        type="text"
                        placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm"
                    />
                </div>
                <div className={cx('list-orders')}>
                    {data.map((order) => (
                        <Link key={order._id} to={config.routes.order + '/' + order._id} className={cx('order')}>
                            <div className={cx('order__meta')}>
                                <div className={cx('order__code')}>
                                    Đơn hàng <strong>#{order._id}</strong>
                                </div>
                                <div className={cx('order__status')}>
                                    <span>
                                        {order.orderStatus === 'Processing' && 'Đang xử lý'}
                                        {order.orderStatus === 'Shipping' && 'Đang vận chuyển'}
                                        {order.orderStatus === 'Delivery' && 'Đang giao hàng'}
                                        {order.orderStatus === 'Delivered' && 'Đã giao hàng'}
                                        <ArrowRightIcon width="20" height="20" color="#868d95" />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('order__product')}>
                                <div className={cx('product')}>
                                    <div className={cx('image-wrapper')}>
                                        <img
                                            className={cx('image-product')}
                                            src={order.orderItems[0].image}
                                            alt={order.orderItems[0].name}
                                        />
                                    </div>
                                    <div className={cx('text-wrapper')}>
                                        <div className={cx('product-brand')}>PUMA</div>
                                        <div className={cx('product-name')}>{order.orderItems[0].name}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('lq')}>
                                <span>{order.orderItems.length} sản phẩm</span>
                                <strong>{(order.shippingPrice + order.totalPrice).toLocaleString('vn-VN')}₫</strong>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };
    const EmptyOrder = () => (
        <EmptyContent
            icon={<TruckEmptyIcon />}
            titleBtn="Dạo một vòng xem nào!"
            content1="Không có đơn hàng nào!"
            content2="Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dẫn chỉ dành riêng cho bạn."
        />
    );
    const tabHeaders = [
        {
            _id: uuidv4(),
            title: `Đang xử lý ${processing?.length > 0 ? `(${processing?.length})` : ''}`,
            content: processing?.length > 0 && processing ? <Content data={processing} /> : <EmptyOrder />,
        },
        {
            _id: uuidv4(),
            title: `Đang vận chuyển ${shipping?.length > 0 ? `(${shipping?.length})` : ''}`,
            content: shipping?.length > 0 && shipping ? <Content data={shipping} /> : <EmptyOrder />,
        },
        {
            _id: uuidv4(),
            title: `Đang giao hàng ${delivery?.length > 0 ? `(${delivery?.length})` : ''}`,
            content: delivery?.length > 0 && delivery ? <Content data={delivery} /> : <EmptyOrder />,
        },
        {
            _id: uuidv4(),
            title: `Đã giao hàng ${delivered?.length > 0 ? `(${delivered?.length})` : ''}`,
            content: delivered?.length > 0 && delivered ? <Content data={delivered} /> : <EmptyOrder />,
        },
    ];
    return (
        <div>
            {pathname === config.routes.order ? (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <TabContent contents={tabHeaders} />
                    </div>
                    {dataOrder.length === 0 && (
                        <div className={cx('empty-order')}>
                            <RecommendedProduct slideShow={2.5} slideScroll={2} small noMargin />
                        </div>
                    )}
                </div>
            ) : (
                <OrderDetail orderID={orderID} />
            )}
        </div>
    );
};

export default Order;
