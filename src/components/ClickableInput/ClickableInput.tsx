import {
    FC,
    ChangeEvent,
    HTMLInputTypeAttribute,
    useState,
    useCallback,
    useEffect,
} from 'react';
import cn from 'classnames';

import { useToggle } from 'hooks/useToggle';

import styles from './ClickableInput.module.css';
import { useOnEnter } from 'hooks/useOnEnter';
import { Input } from 'components/Input/Input';
import { Text } from 'components/Text/Text';

export interface ClickableInputProps {
    value?: string | number;
    className?: string;
    type?: HTMLInputTypeAttribute;
    onChange?: (value: string) => void;
}

export const ClickableInput: FC<ClickableInputProps> = (props) => {
    const {
        className,
        value: originalValue,
        type,
        onChange: originalOnChange,
    } = props;

    const [isOpen, open, close] = useToggle();

    const [value, setValue] = useState(
        originalValue !== undefined ? String(originalValue) : ''
    );

    useEffect(() => {
        if (originalValue !== undefined) setValue(String(originalValue));
    }, [originalValue]);

    const onChange = useCallback(
        (ev: ChangeEvent<HTMLInputElement>) => {
            if (type === 'number' && /\D/.test(ev.target.value)) return;
            setValue(ev.target.value);
        },
        [type]
    );

    const onBlur = useCallback(() => {
        originalOnChange?.(value);
        close();
    }, [value, originalOnChange, close]);

    const onKeyDown = useOnEnter(onBlur);

    if (isOpen) {
        return (
            <Input
                autoFocus
                type={type}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className={cn(className, styles.input)}
            />
        );
    }

    return (
        <Text onClick={open} className={cn(className, styles.clickable)}>
            {value}
        </Text>
    );
};
