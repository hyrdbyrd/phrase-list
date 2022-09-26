import { useCallback, KeyboardEvent } from 'react';

export const useOnEnter = (cb: () => void) =>
    useCallback(
        (ev: KeyboardEvent) => {
            if (ev.code === 'Enter') cb();
        },
        [cb]
    );
