import { BackblockProps } from './Backblock.props';
import styles from './Backblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Htag } from '../..';

export const Backblock = ({ className, ...props }: BackblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	return (
		<div className={styles.backblock}>
			<Htag tag="h1">
				Set up background as you like
			</Htag>
			<div style={{ textAlign: `center` }}>
				Here you can change the background
			</div>
		</div>
	);
};