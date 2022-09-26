import { FC, HTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './Text.module.css';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {}

export const Text: FC<TextProps> = ({ className, ...props }) => (
    <span {...props} className={cn(styles.text, className)} />
);
