import { TimerblockProps } from './Timerblock.props';
import styles from './Timerblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Htag } from '../..';

export const Timerblock = ({ className, ...props }: TimerblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	return (
		<div className={styles.timerblock}>
			<Htag tag="h1">
				Set up timer as you like
			</Htag>
			<div style={{ textAlign: `center` }}>
				Here you can change the timer
			</div>
		</div>
	);
};