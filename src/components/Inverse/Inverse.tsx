import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInversed } from 'store/counterSlice/slice';
import { RootState } from 'store/store';

import styles from './Inverse.module.css';

export const Inverse = () => {
    const isInversed = useSelector(
        (state: RootState) => state.counters.inversed
    );
    const dispatch = useDispatch();

    const onClick = useCallback(() => dispatch(toggleInversed()), [dispatch]);

    const src = isInversed
        ? 'https://www.svgrepo.com/show/48929/moon.svg'
        : 'https://www.svgrepo.com/show/16916/sun.svg';

    return (
        <div className={styles.inverse} onClick={onClick}>
            <img alt="theme" src={src} width="48" />
        </div>
    );
};
