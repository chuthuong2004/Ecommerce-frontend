import React, { useState } from 'react';
import styles from './TabContent.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon } from '../Icons';
const cx = classNames.bind(styles);
const TabContent = ({ contents }) => {
    const [tabSelected, setTabSelected] = useState(contents[0]);
    console.log(tabSelected);
    return (
        <div>
            <div className={cx('tab-header')}>
                <div className={cx('nav-tabs')}>
                    {contents.map((navItem) => (
                        <div
                            key={navItem._id}
                            onClick={() => setTabSelected(navItem)}
                            className={cx('nav-item', tabSelected._id === navItem._id && 'active')}
                        >
                            {navItem.title}
                        </div>
                    ))}
                    <div className={cx('nav-line')}></div>
                </div>
            </div>
            <div className={cx('tab-content')}>
                <div>{tabSelected.content}</div>
            </div>
            <div className={cx('product-desc__show-more', 'd-none')}>
                <span>
                    Xem toàn bộ <ArrowDownIcon />
                </span>
            </div>
        </div>
    );
};

export default TabContent;
