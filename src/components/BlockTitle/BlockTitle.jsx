import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BlockTitle.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const BlockTitle = ({ title, strong }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('block-title')}>{title}</div>
            <strong>{strong}</strong>
        </div>
    );
};
BlockTitle.propTypes = {
    title: PropTypes.string,
    strong: PropTypes.string,
};
export default BlockTitle;
