import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MenuSub.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const MenuSub = ({ subLinks }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('menu-sub')}>
                <div className={cx('menu-sub-lv2')}>
                    {subLinks.map((subLink) => (
                        <ul key={subLink._id}>
                            <h3 className={cx('title')}>{subLink.title}</h3>
                            {subLink.links.map((link) => (
                                <li key={link._id}>
                                    <Link to={link.to}>{link.content}</Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuSub;
