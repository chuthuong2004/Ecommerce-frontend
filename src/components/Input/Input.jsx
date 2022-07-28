import classNames from 'classnames/bind';
import { EyeIcon, EyeActiveIcon } from '../Icons/Icons';
import styles from './Input.module.scss';
import {} from './../Icons/Icons';
import { useState, useEffect, memo } from 'react';
const cx = classNames.bind(styles);
const Input = ({
    label,
    type = 'text',
    placeholder = `Nhập ${label ? label : 'thông tin vào trường này'}`,
    name = '',
    onChange,
    ...passProps
}) => {
    const [displayed, setDisplayed] = useState(false);
    const handleClickEye = () => {
        setDisplayed(!displayed);
    };
    const props = {
        onChange,
        ...passProps,
    };
    useEffect(() => {
        setDisplayed(false);
    }, [!props.value]);
    return (
        <div className={cx('input-container')}>
            {label && (
                <label className={cx('input-label')} htmlFor="">
                    {label}
                </label>
            )}
            <div className={cx('input')}>
                <input type={displayed ? 'text' : type} name={name} placeholder={placeholder} {...props} />
                {type === 'password' && (
                    <div
                        onClick={props.value ? handleClickEye : null}
                        className={cx('icon-eye', !props.value && 'disabled')}
                    >
                        {displayed ? <EyeActiveIcon /> : <EyeIcon />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(Input);
