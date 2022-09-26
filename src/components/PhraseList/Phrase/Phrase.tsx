import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import {
    decPhrase,
    incPhrase,
    PhraseType,
    deleteCounter,
    changePhrase,
    setCountPhrase,
} from 'store/counterSlice/slice';
import { RootState } from 'store/store';

import styles from './Phrase.module.css';
import { ClickableInput } from 'components/ClickableInput/ClickableInput';

export interface PhraseProps {
    phrase: PhraseType;
    className?: string;
}

export const Phrase: FC<PhraseProps> = ({ phrase: id, className }) => {
    const dispatch = useDispatch();
    const { phrase, count } = useSelector(
        (state: RootState) => state.counters.phrases[id]
    );

    const onInc = useCallback(() => {
        dispatch(incPhrase(phrase));
    }, [dispatch, phrase]);

    const onDec = useCallback(() => {
        dispatch(decPhrase(phrase));
    }, [dispatch, phrase]);

    const onDel = useCallback(() => {
        dispatch(deleteCounter(phrase));
    }, [dispatch, phrase]);

    const onChangeCount = useCallback(
        (count: string) => {
            dispatch(setCountPhrase({ phrase, count }));
        },
        [dispatch, phrase]
    );

    const onChangePhrase = useCallback(
        (newPhrase: string) => {
            dispatch(changePhrase({ newPhrase, oldPhrase: phrase }));
        },
        [dispatch, phrase]
    );

    return (
        <div className={cn(styles.phrase, className)}>
            <img
                alt="+"
                width="24"
                className={styles.pointer}
                src="https://www.svgrepo.com/show/135587/minus.svg"
                onClick={onDec}
            />
            <ClickableInput
                value={count}
                type="number"
                className={styles.count}
                onChange={onChangeCount}
            />
            <img
                alt="-"
                width="24"
                className={styles.pointer}
                src="https://www.svgrepo.com/show/157858/plus.svg"
                onClick={onInc}
            />
            <ClickableInput
                value={phrase}
                onChange={onChangePhrase}
                className={styles.phraseText}
            />
            <img
                alt="Delete"
                width="24"
                className={cn(styles.pointer)}
                src="https://www.svgrepo.com/show/387172/close-one.svg"
                onClick={onDel}
            />
        </div>
    );
};
