import React from 'react';
import { TruckEmptyIcon } from '../../../../components/Icons';
import EmptyContent from './../../../../components/EmptyContent';
import RecommendedProduct from './../../../../components/RecommendedProduct';

const Order = () => {
    return (
        <div>
            <EmptyContent
                icon={<TruckEmptyIcon />}
                titleBtn="Dạo một vòng xem nào!"
                content1="Không có đơn hàng nào!"
                content2="Hãy mua sắm ngay lúc này để tận hưởng các ưu đãi hấp dẫn chỉ dành riêng cho bạn."
            />
            <RecommendedProduct slideShow={2.5} slideScroll={2} small noMargin />
        </div>
    );
};

export default Order;
