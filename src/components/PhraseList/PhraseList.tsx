import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Phrase } from './Phrase/Phrase';

import cn from 'classnames';

import styles from './PhraseList.module.css';

export interface PhraseListProps {
    className?: string;
}

export const PhraseList: FC<PhraseListProps> = ({ className }) => {
    const list = useSelector((state: RootState) => state.counters.list);

    return (
        <div className={cn(className, styles.list)}>
            <div className={styles.listWrapper}>
                {list.map((phrase) => (
                    <Phrase
                        className={styles.listItem}
                        key={phrase}
                        phrase={phrase}
                    />
                ))}
            </div>
        </div>
    );
};
