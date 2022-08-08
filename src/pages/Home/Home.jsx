import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useLocation, Link } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import config from './../../config/index';
import Kids from './components/Kids';
import TradeMarkSlide from './../../components/TradeMarkSlide';
const cx = classNames.bind(styles);
function Home() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    return (
        <section className={cx('home-container')}>
            {!query.get('view') && (
                <>
                    <section className={cx('state-banner')}>
                        <div className={cx('state-banner-inner')}>
                            <div className={cx('state-banner-container')}>
                                <Link to={config.routes.women} className={cx('state-banner-item')}>
                                    <div>
                                        <span className={cx('state-banner-title')}>Nữ</span>
                                        <img
                                            className={cx('state-banner-img')}
                                            src="https://file.hstatic.net/1000284478/file/nu-900x800__1__48c1176ad78241858af260fb9f5a6994.png"
                                            alt=""
                                        />
                                        <div className={cx('overlay')}></div>
                                    </div>
                                </Link>
                                <Link to={config.routes.men} className={cx('state-banner-item')}>
                                    <div>
                                        <span className={cx('state-banner-title')}>Nam</span>
                                        <img
                                            className={cx('state-banner-img')}
                                            src="https://file.hstatic.net/1000284478/file/nam-m-700x800__1__f6b4356910d745a392a32701ba8a51f3.png"
                                            alt=""
                                        />
                                        <div className={cx('overlay')}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                </>
            )}
            {query.get('view') === 'men' && <Men />}
            {query.get('view') === 'women' && <Women />}
            {query.get('view') === 'kids' && <Kids />}
            <TradeMarkSlide />
        </section>
    );
}

export default Home;
