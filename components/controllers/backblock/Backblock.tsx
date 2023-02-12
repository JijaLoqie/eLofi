import { BackblockProps } from './Backblock.props';
import styles from './Backblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Button, Htag } from '../..';

export const Backblock = ({ className, handleRandomBack, ...props }: BackblockProps): JSX.Element => {
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
			<div className={styles.backgroundsettings}>
				<Button appearance='ghost' onClick={() => {handleRandomBack()}}>Random Update</Button>
			</div>
		</div>
	);
};