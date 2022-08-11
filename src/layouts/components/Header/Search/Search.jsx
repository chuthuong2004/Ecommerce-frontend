import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { CloseIcon, LogoIcon, SearchIcon } from '../../../../components/Icons';
import config from '../../../../config';
import Input from '../../../../components/Input';

const cx = classNames.bind(styles);

const Search = ({ handleClose }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('nav-logo')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <LogoIcon height="40" />
                </Link>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('search-header')}>
                    <div className={cx('nav-input')}>
                        <div className={cx('search')}>
                            <div className={cx('search-icon')}>
                                <SearchIcon width="2rem" height="2rem" className={cx('')} />
                            </div>
                            <div className={cx('search-input')}>
                                <Input placeholder="Bạn đang tìm gì..." className={cx('input')} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('nav-close')}>
                        <div onClick={handleClose} className={cx('close')}>
                            Đóng
                            <CloseIcon width="2rem" height="2rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
