import styles from './CategoryContainer.module.scss';
import classNames from 'classnames/bind';
import Button from './../Button/Button';
import config from '../../config';
const cx = classNames.bind(styles);
const CategoryContainer = ({ categories }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('categories')}>
                {categories.map((category) => (
                    <div key={category._id} className={cx('category-item')}>
                        <div className={cx('category-img')}>
                            <img src={category.img} alt="" />
                            <div className={cx('content')}>
                                <h2 className={cx('category-name')}>{category.categoryName}</h2>
                                <p className={cx('category-desc')}>{category.categoryDesc}</p>
                                <Button to={config.routes.collections} className={cx('btn-discover')}>
                                    Khám phá
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryContainer;
