import classNames from 'classnames/bind';
import styles from './Men.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Slide from '../../../../components/Slide/';
const cx = classNames.bind(styles);
const Men = () => {
    const slides = [
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/main_31948aae340b48a294d6a19761a2a008.png',
        },
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/pedro-nam_3b684b081b924c6d83cd1ab85c21374d.png',
        },
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/mlb-nam_c522f0fab3604317bc8fa0d8b472a62a.png',
        },
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/puma-nam_4072465276d94b74b2346b707993ae1f.png',
        },
    ];
    return (
        <div>
            <Slide slides={slides} />
        </div>
    );
};

export default Men;
