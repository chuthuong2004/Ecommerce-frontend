import classNames from 'classnames/bind';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './NewsLetterFooter.module.scss';
import { useCallback, useState } from 'react';
const cx = classNames.bind(styles);
const NewsLetterFooter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({ email: '' });
    const handleBlur = (e) => {
        setError({ email: email || e.target.value ? '' : 'Trường này là bắt buộc.' });
    };
    const handleChange = useCallback(
        (e) => {
            setEmail(e.target.value);
        },
        [email],
    );
    const checkError = (email) => {
        setError({ email: !email && 'Vui lòng nhập email.' });
        return email;
    };
    const handleClick = () => {
        checkError(email) && alert('Gửi thành công !');
        checkError(email) && setEmail('');
    };
    console.log(error);
    return (
        <section className={cx('newsletter-footer')}>
            <div className={cx('newsletter-footer_form')}>
                <div className={cx('newsletter-footer_form_left')}>
                    <span>Đăng ký nhận thông báo</span>
                    <p>
                        Để nhận các ưu đãi độc quyền, giảm giá đặc biệt và cập nhật những tin tức thời trang mới nhất.
                    </p>
                    <div className={cx('newsletter-footer_form_left_gender')}>
                        <div className={cx('checkbox')}>
                            <Input type="checkbox" name="gender" value="female" label="Nữ" />
                        </div>
                        <div className={cx('checkbox')}>
                            <Input type="checkbox" name="gender" value="male" label="Nam" />
                        </div>
                    </div>
                </div>
                <div className={cx('newsletter-footer_form_right')}>
                    <div className={cx('input')}>
                        <Input
                            onChange={handleChange}
                            value={email}
                            error={error}
                            onBlur={handleBlur}
                            type="email"
                            name="email"
                            label="địa chỉ email"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div onClick={handleClick} className={cx('btn')}>
                        <Button large primary>
                            gửi & đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterFooter;
