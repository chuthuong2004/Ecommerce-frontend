import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import { useEffect, useRef, useState } from 'react';
import WishListItem from './../WishListItem/WishListItem';
import Button from './../Button/Button';
import { CloseIcon, HeartFragileIcon } from '../Icons';
const cx = classNames.bind(styles);
const PopUp = ({ activeWishList, toggleModal, setActiveWishList }) => {
    const wishlists = [];
    const modalRef = useRef();
    useEffect(() => {
        if (!activeWishList) {
            const timeout = setTimeout(() => {
                modalRef.current.style.display = 'none';
            }, 850);
            return () => {
                clearTimeout(timeout);
            };
        } else {
            modalRef.current.style.display = 'block';
        }
    }, [activeWishList]);
    return (
        <div ref={modalRef} className={cx('modal', activeWishList ? 'active' : 'no-active')}>
            <div onClick={toggleModal} className={cx('overlay')}></div>
            <div className={cx('modal-content', !activeWishList && 'no-active')}>
                <div onClick={toggleModal} className={cx('close')}>
                    <CloseIcon />
                </div>
                {wishlists ? (
                    <>
                        <h3 className={cx('title')}>Yêu thích</h3>
                        <div className={cx('content')}>
                            <WishListItem hasSale itemInCart />
                            <WishListItem itemInCart />
                            <WishListItem hasSale />
                            <WishListItem />
                        </div>
                        <div className={cx('wishlist-actions')}>
                            <Button primary children="Chuyển tất cả vào giỏ hàng" />
                        </div>
                    </>
                ) : (
                    <div>
                        <div className={cx('empty-wl-first')}>
                            <div className={cx('empty-wl-img')}>
                                <HeartFragileIcon width="10rem" height="10rem" />
                            </div>
                            <div className={cx('empty-wl-text')}>Không có sản phẩm nào !</div>
                            <div className={cx('empty-wl-action')}>
                                <Button large primary children="Dạo một vòng xem nào" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopUp;
