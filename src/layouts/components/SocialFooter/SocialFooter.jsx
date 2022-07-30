import styles from './SocialFooter.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    FacebookLiteIcon,
    InstagramIcon,
    LogoIcon,
    MomoIcon,
    ReePayIcon,
    ShopeePayIcon,
    VNPayIcon,
    YoutubeIcon,
    ZaloIcon,
} from './../../../components/Icons/Icons';
const cx = classNames.bind(styles);
function SocialFooter() {
    return (
        <div className={cx('social-footer')}>
            <div className={cx('container-fluid')}>
                <div className={cx('logo')}>
                    <LogoIcon width="6.9rem" height="3rem" />
                </div>
                <ul className={cx('social-links')}>
                    <li>
                        <Link to="#">
                            <FacebookLiteIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <InstagramIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <YoutubeIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className={cx('line')}></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <MomoIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <ZaloIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <ShopeePayIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <VNPayIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <ReePayIcon />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SocialFooter;
