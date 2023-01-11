import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
				[styles.active]: show,
			})}
			{...props}
		>{children}</button>
	);
};