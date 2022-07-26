import classNames from 'classnames/bind';
import Blog from '../../components/Blog';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('container')}>
            <Blog />
        </div>
    );
}

export default Home;
