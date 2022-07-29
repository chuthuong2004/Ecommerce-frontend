import classNames from 'classnames/bind';
import { EyeIcon, EyeActiveIcon } from '../Icons/Icons';
import styles from './Input.module.scss';
import { CheckIcon } from './../Icons/Icons';
import { useState, useEffect, memo, useId } from 'react';
const cx = classNames.bind(styles);
const Input = ({
    label,
    type = 'text',
    placeholder = `Nhập ${label ? label : 'thông tin vào trường này'}`,
    name = '',
    error = null,
    onChange,
    ...passProps
}) => {
    const inputCheckbox = useId();
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
        <>
            {type === 'checkbox' ? (
                <div className={cx('checkbox')}>
                    <input type={type} name="" id={inputCheckbox} />
                    <label htmlFor={inputCheckbox}>
                        <span>
                            <CheckIcon className={cx('check-icon')} />
                        </span>

                        {label}
                    </label>
                </div>
            ) : (
                <div className={cx('input-container')}>
                    {label && (
                        <label className={cx('input-label')} htmlFor={name}>
                            {label}
                        </label>
                    )}
                    <div className={cx('input')}>
                        {error?.[name] && (
                            <span className={cx('message-error', 'error')}>
                                {error[name] ? error[name] : 'Bạn không được để trống dòng này'}
                            </span>
                        )}
                        <input
                            type={displayed ? 'text' : type}
                            name={name}
                            id={name}
                            placeholder={placeholder}
                            {...props}
                        />
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
            )}
        </>
    );
};

export default memo(Input);
