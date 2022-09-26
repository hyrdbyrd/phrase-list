import { useCallback, useState } from 'react';

type Fn = () => void;
type SetFn = (v: boolean) => void;

export const useToggle = (val = false): [boolean, Fn, Fn, Fn, SetFn] => {
    const [value, setValue] = useState(val);

    const open = useCallback(() => setValue(true), []);
    const close = useCallback(() => setValue(false), []);
    const toggle = useCallback(() => setValue((e) => !e), []);

    return [value, open, close, toggle, setValue];
};
