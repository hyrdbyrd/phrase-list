import { useSelector } from 'react-redux';
import cn from 'classnames';

import { Inverse } from 'components/Inverse/Inverse';
import { PhraseInput } from 'components/PhraseList/PhraseInput/PhraseInput';
import { PhraseList } from 'components/PhraseList/PhraseList';
import { RootState } from 'store/store';

import styles from './App.module.css';

export const App = () => {
    const isInversed = useSelector(
        (state: RootState) => state.counters.inversed
    );

    return (
        <main className={cn(isInversed && styles.inversed, styles.app)}>
            <Inverse />
            <PhraseInput />
            <PhraseList />
        </main>
    );
};

export default App;
