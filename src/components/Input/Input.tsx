import { FC, InputHTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    styled?: boolean;
}

export const Input: FC<InputProps> = ({ className, styled, ...props }) => (
    <input
        {...props}
        className={cn(styles.input, styled && styles.styled, className)}
    />
);
