import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
    Aojo,
    Ceci,
    CharlesKeith,
    CoachTradeMark,
    Dsquared2,
    Gigi,
    Havaianas,
    Lesella,
    Marhenj,
    MaxCo,
    MLB,
    Mujosh,
    Pedro,
    Pinko,
    Puma,
    Skechers,
    TedBaker,
    TheKooples,
    TopMan,
    TopShop,
    WeekendMaxMara,
} from './Logo/LogoTradeMark';
import styles from './TradeMark.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSlick.scss';
const cx = classNames.bind(styles);
const TradeMark = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: cx('container-dots'),
    };

    return (
        <div className={cx('trade-mark')}>
            <div className={cx('trade-mark-wrapper')}>
                <div className={cx('block-title')}>Thương hiệu</div>
                <div className={cx('slides')}>
                    <div className={cx('container')}>
                        <Slider {...settings}>
                            <div className={cx('slide-trademark')}>
                                <Link to={'/'}>
                                    <CoachTradeMark />
                                </Link>
                                <Link to={'/'}>
                                    <Dsquared2 />
                                </Link>
                                <Link to={'/'}>
                                    <WeekendMaxMara />
                                </Link>
                                <Link to={'/'}>
                                    <MaxCo />
                                </Link>
                                <Link to={'/'}>
                                    <Pinko />
                                </Link>
                                <Link to={'/'}>
                                    <TedBaker />
                                </Link>
                                <Link to={'/'}>
                                    <TheKooples />
                                </Link>
                                <Link to={'/'}>
                                    <Lesella />
                                </Link>
                                <Link to={'/'}>
                                    <Puma />
                                </Link>
                                <Link to={'/'}>
                                    <MLB />
                                </Link>
                                <Link to={'/'}>
                                    <Skechers />
                                </Link>
                                <Link to={'/'}>
                                    <Marhenj />
                                </Link>
                                <Link to={'/'}>
                                    <Pedro />
                                </Link>
                                <Link to={'/'}>
                                    <CharlesKeith />
                                </Link>
                                <Link to={'/'}>
                                    <Havaianas />
                                </Link>
                            </div>
                            <div className={cx('slide-trademark')}>
                                <Link to={'/'}>
                                    <Mujosh />
                                </Link>
                                <Link to={'/'}>
                                    <Aojo />
                                </Link>
                                <Link to={'/'}>
                                    <TopShop />
                                </Link>
                                <Link to={'/'}>
                                    <TopMan />
                                </Link>
                                <Link to={'/'}>
                                    <Gigi />
                                </Link>
                                <Link to={'/'}>
                                    <Ceci />
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeMark;
