import { Input } from 'components/Input/Input';
import { useOnEnter } from 'hooks/useOnEnter';
import { FC, useCallback, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addCounter } from 'store/counterSlice/slice';

export const PhraseInput: FC = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onAddPhrase = useCallback(() => {
        dispatch(addCounter(value));
        setValue('');
    }, [dispatch, value]);

    const onKeyDown = useOnEnter(onAddPhrase);

    const onChange = useCallback(
        (ev: ChangeEvent<HTMLInputElement>) => setValue(ev.target.value),
        []
    );

    return (
        <Input
            styled
            value={value}
            placeholder="Phrase"
            onBlur={onAddPhrase}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};
