import React from 'react';
import styles from './EmptyContent.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import config from '../../config';
const cx = classNames.bind(styles);
const EmptyContent = ({ icon, titleBtn, content1, content2, iconBtn, noPadding }) => {
    return (
        <div className={cx('empty-content', noPadding && 'pt-0')}>
            <div className={cx('empty-content__image')}>{icon}</div>
            <div>
                <div className={cx('content-1')}>{content1}</div>
                <p className="content-2">{content2}</p>
                <Button
                    to={titleBtn.toLowerCase().includes('dạo một vòng') && config.routes.newArrival}
                    className={cx('btn--content')}
                    leftIcon={iconBtn}
                    primary
                >
                    {titleBtn}
                </Button>
            </div>
        </div>
    );
};

export default EmptyContent;
