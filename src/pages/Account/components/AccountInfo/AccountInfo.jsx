import Input from '../../../../components/Input';
import styles from './AccountInfo.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../../components/Button';
const cx = classNames.bind(styles);
const AccountInfo = () => {
    return (
        <div className={cx('form')}>
            <div>
                <Input disabled label="Tên" value="Văn Thương" />
            </div>
            <div>
                <Input disabled label="Tên" value="Đào" />
            </div>
            <div>
                <Input disabled label="Sinh nhật" placeholder="Nhập ngày tháng năm" />
            </div>
            <div>
                <Input disabled label="Giới tính" value="Nam" />
            </div>
            <div>
                <Input disabled label="Số điện thoại" value="0333729170" />
            </div>
            <div>
                <Input disabled type="email" value="email@example.com" label="Email" />
            </div>
            <div className={cx('action')}>
                <Button className={cx('btn')} primary large>
                    Cập nhật thông tin
                </Button>
            </div>
        </div>
    );
};

export default AccountInfo;
