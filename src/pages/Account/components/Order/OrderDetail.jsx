import React from 'react';
import { dataOrder } from '../../../../assets/dataOrder';
import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import { BagIcon } from '../../../../components/Icons';
const cx = classNames.bind(styles);
const OrderDetail = ({ orderID }) => {
    const order = dataOrder.find((order) => order._id === orderID);
    console.log(order);
    return (
        <div className={cx('order-detail')}>
            <div className={cx('order-detail__meta')}>
                <div className={cx('order-detail__meta--left')}>
                    <div className={cx('ord-number')}>
                        <span>Đơn hàng </span>
                        <strong>#{order._id}</strong>
                        <BagIcon />
                    </div>
                    <div className={cx('payment-stt')}>
                        Thanh toán: <strong>Chưa thanh toán</strong>
                    </div>
                    <div className={cx('quantity')}>
                        Số lượng: <strong>2 sản phẩm</strong>
                    </div>
                </div>
                <div className={cx('order-detail__meta--right')}>
                    <p className={cx('shipment-detail')}>
                        <strong>CHI TIẾT GIAO HÀNG</strong>
                        <span>Chờ thanh toán</span>
                    </p>
                    <p className={cx('customer')}>
                        <strong>Đào Văn Nam</strong>- 0333729170
                    </p>
                    <p className={cx('address')}>
                        520/90/19 QL13, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
                    </p>
                </div>
            </div>
            <div className={cx('order-detail__items')}></div>
            <div className={cx('order-detail__summary')}></div>
            <div className={cx('order-detail__actions')}></div>
        </div>
    );
};

export default OrderDetail;
