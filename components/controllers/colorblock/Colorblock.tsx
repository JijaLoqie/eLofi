import { ColorblockProps } from './Colorblock.props';
import styles from './Colorblock.module.css';
import cn from 'classnames';
import { ChangeEvent, useEffect, useState } from 'react';
import { Htag } from '../..';

export const Colorblock = ({ className, ...props }: ColorblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])


	function changeColor(value: string, property: string) {
		document.body.style.setProperty(property, value);
	}

	return (
		<div className={styles.colorblock}>
			<Htag tag="h1">
				Set up color as you like
			</Htag>
			<div className={styles.colorlist}>
				<div>
					<div>Text</div>
					<input id="text" value={document.body.style.getPropertyValue("--text")} type="color" onChange={(color) => {changeColor(color.target.value, "--text")}}/>
				</div>
				<div>
					<div>Primary</div>
					<input id="primary" value={document.body.style.getPropertyValue("--primary")} type="color" onChange={(color) => {changeColor(color.target.value, "--primary")}}/>
				</div>
				<div>
					<div>Primary + Hover</div>
					<input id="primary-hover" value={document.body.style.getPropertyValue("--primary-hover")} type="color" onChange={(that) => {changeColor(that.target.value, "--primary-hover")}}/>
				</div>
			</div>
			<div style={{ textAlign: `center` }}>
				Here you can change the color
			</div>
		</div>
	);
};