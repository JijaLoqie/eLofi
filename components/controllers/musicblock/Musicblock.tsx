import { MusicblockProps } from './Musicblock.props';
import styles from './Musicblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Htag } from '../..';

export const Musicblock = ({ className, ...props }: MusicblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	return (
		<div className={styles.musicblock}>
			<Htag tag="h1">
				Set up music as you like
			</Htag>
			<div></div>
		</div>
	);
};