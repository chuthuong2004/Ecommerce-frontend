import classNames from 'classnames/bind';
import styles from './Women.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Slide from '../../../../components/Slide/Slide';
const cx = classNames.bind(styles);
const Women = () => {
    const slides = [
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/main_31948aae340b48a294d6a19761a2a008.png',
        },
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/mlb-nu_84a893335c4e47f79382b617076a97bd.png',
        },
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/pedro-nu_af6275591f30415f8e3ef7eb2b93bbe2.png',
        },
        {
            _id: uuidv4(),
            img: 'https://file.hstatic.net/1000284478/file/puma-nu_092af53d839d4409a313cbf083e2a9d2.png',
        },
    ];
    return (
        <div>
            <Slide slides={slides} />
        </div>
    );
};
export default Women;
