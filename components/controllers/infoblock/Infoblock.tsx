import { InfoblockProps } from './Infoblock.props';
import styles from './Infoblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Htag } from '../..';

export const Infoblock = ({ className, ...props }: InfoblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	return (
		<div className={styles.infoblock}>
			<Htag tag="h1">
				Made by <a href="https://github.com/JijaLoqie">JijaLoqie</a>
			</Htag>
			<div style={{textAlign: `center`}}>
				Hello! My name is Dima and I realy like creating new things related
				to studying
			</div>
		</div>
	);
};