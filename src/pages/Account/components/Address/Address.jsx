import React from 'react';
import styles from './Address.module.scss';
import classNames from 'classnames/bind';
import { EditIcon, LocationEmptyIcon, PlusStrongIcon } from '../../../../components/Icons';
import Button from '../../../../components/Button';
import EmptyContent from '../../../../components/EmptyContent';
const cx = classNames.bind(styles);
const Address = () => {
    const address = [];
    return (
        <div className={cx('account-address')}>
            {address && address.length > 0 ? (
                <>
                    <div className={cx('add-address')}>
                        <Button className={cx('btn-add-address')} leftIcon={<PlusStrongIcon color="#ffffff" />} primary>
                            Thêm Địa chỉ
                        </Button>
                    </div>
                    <div className={cx('addresses')}>
                        <div className={cx('address')}>
                            <div className={cx('address-name')}>
                                <div className={cx('name')}>
                                    <span>Thương Đào</span>
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
                            <p className={cx('phone')}>0333729170</p>
                            <p className={cx('delivery-address')}>
                                520/90/19 QL13, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Hồ Chí Minh
                            </p>
                        </div>
                        <div className={cx('address')}>
                            <div className={cx('address-name', 'default-address')}>
                                <div className={cx('name')}>
                                    <span>Thương Đào</span>
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
                            <p className={cx('phone')}>0333729170</p>
                            <p className={cx('delivery-address')}>
                                520/90/19 QL13, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Hồ Chí Minh
                            </p>
                        </div>
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
