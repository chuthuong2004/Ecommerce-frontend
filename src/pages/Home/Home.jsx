import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return <div style={{ height: '2000px' }} className={cx('container')}></div>;
}

export default Home;
