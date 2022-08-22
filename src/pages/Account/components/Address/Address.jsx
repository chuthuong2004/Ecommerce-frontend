import React from 'react';
import styles from './Address.module.scss';
import classNames from 'classnames/bind';
import { EditIcon, LocationEmptyIcon, PlusStrongIcon } from '../../../../components/Icons';
import Button from '../../../../components/Button';
import EmptyContent from '../../../../components/EmptyContent';
const cx = classNames.bind(styles);
const Address = ({ data = [] }) => {
    return (
        <div className={cx('account-address')}>
            {data && data.length > 0 ? (
                <>
                    <div className={cx('add-address')}>
                        <Button className={cx('btn-add-address')} leftIcon={<PlusStrongIcon color="#ffffff" />} primary>
                            Thêm Địa chỉ
                        </Button>
                    </div>
                    <div className={cx('addresses')}>
                        {data.map((item) => (
                            <div key={item._id} className={cx('address')}>
                                <div className={cx('address-name', item.isDefault && 'default-address')}>
                                    <div className={cx('name')}>
                                        <span>{`${item.firstName} ${item.lastName}`}</span>
                                        <div className={cx('edit-icon')}>
                                            <EditIcon />
                                        </div>
                                    </div>
                                    <div className={cx('btn-default')}>
                                        <Button primary className={cx('btn')}>
                                            Địa chỉ mặc định
                                        </Button>
                                    </div>
                                </div>
                                <p className={cx('phone')}>{item.phone}</p>
                                <p className={cx('delivery-address')}>
                                    {`${item.address}, ${item.ward}, ${item.district}, ${item.province}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <EmptyContent
                    icon={<LocationEmptyIcon />}
                    titleBtn="Thêm địa chỉ"
                    content1="Không có địa chỉ lưu sẵn"
                    content2="Lưu sẵn địa chỉ ở đây để rút ngắn thời gian đặt hàng."
                    iconBtn={<PlusStrongIcon color="#ffffff" />}
                />
            )}
        </div>
    );
};

export default Address;
