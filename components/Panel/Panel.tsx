import { PanelProps } from "./Panel.props";
import styles from "./Panel.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import { Htag } from "../Htag/Htag";
import { Infoblock } from '../controllers/infoblock/Infoblock';
import { Musicblock } from '../controllers/musicblock/Musicblock';
import { Timerblock } from '../controllers/timerblock/Timerblock';
import { Colorblock } from '../controllers/colorblock/Colorblock';
import { Backblock } from '../controllers/backblock/Backblock';

export const Panel = ({
	children,
	appearance,
	handleBack,
	...props
}: PanelProps): JSX.Element => {
	const [isHovered, setHovered] = useState<boolean>(false);
	const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])
	if (!isHovered) {
		return (
			<div
				onMouseEnter={() => setHovered(true)}
				className={cn(styles.panel, {
					[styles.active] : show,
				})}
				{...props}
			>
				<div>eLofi</div>
			</div>
		);
	}

	// return <div onMouseLeave={() => { handleBack(); setHovered(false); }} className={cn(styles.panel)} {...props}>
	// 	<div className={styles.info}>
	// 		<Htag tag='h1'>Made by <a href='https://github.com/JijaLoqie'>JijaLoqie</a></Htag>
	// 		<p>Hello! My name is dima and I realy like creating new things related to studying</p>
	// 	</div>
	// 	{/* {children} */}
	// </div>;
	return (
		<div
			onMouseLeave={() => {
				handleBack();
				setHovered(false);
			}}
			className={cn(
				styles.panel,
				appearance != "normal" ? styles.info : styles.normal, {
					[styles.active] : show,
				}
			)}
			{...props}
		>
			{
				appearance == "info" ? (
					<Infoblock/>
				) : (appearance == "music") ? (
					<Musicblock/>
				) : (appearance == "background") ? (
					<Backblock/>
				) : (appearance == "color") ? (
					<Colorblock/>
				) : (appearance == "timer") ? (
					<Timerblock/>
				) : <></>}
				<div className={styles.buttons}>
			{children}
			</div>
		</div>
	);
};
