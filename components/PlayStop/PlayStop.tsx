import { PlayStopProps } from './PlayStop.props';
import styles from './PlayStop.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as PlayButt } from "./Polygon.svg"

export const PlayStop = ({ currentMusic }: PlayStopProps): JSX.Element => {
	const [musicStop, setMusicStop] = useState(true);

	const currentAudio = useRef<HTMLAudioElement | undefined>(
		typeof Audio === "undefined" ? undefined : new Audio(`/sounds/${currentMusic}`)
	);
	// var help = new Audio(`/sounds/${currentMusic}`);
	// help.volume = 0

	function handleClickPlayStop() {
		if (musicStop) {
			currentAudio.current?.play();
			setMusicStop(false);
		} else {
			currentAudio.current?.pause();
			setMusicStop(true);
		}
		// setMusicStop(isStoped => !isStoped);
	}

	return (
		<Button appearance={(musicStop) ? "primary" : "ghost"} className={cn(
			styles.playstop
		)} onClick={handleClickPlayStop} style={{ borderRadius: `100%` }}>
			{/* {(musicStop) ? "Play" : "Stop"} */}
			<PlayButt />
		</Button>
	);
};