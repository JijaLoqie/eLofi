import { ColorblockProps } from './Colorblock.props';
import styles from './Colorblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Htag } from '../..';

export const Colorblock = ({ className, ...props }: ColorblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	return (
		<div className={styles.colorblock}>
			<Htag tag="h1">
				Set up color as you like
			</Htag>
			<div style={{ textAlign: `center` }}>
				Here you can change the color
			</div>
		</div>
	);
};