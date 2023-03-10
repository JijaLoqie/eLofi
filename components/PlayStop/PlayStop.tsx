import { PlayStopProps } from './PlayStop.props';
import styles from './PlayStop.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { useEffect, useRef, useState } from 'react';

export const PlayStop = ({ currentMusic }: PlayStopProps): JSX.Element => {
	const [musicStop, setMusicStop] = useState(true);

	const currentAudio = useRef<HTMLAudioElement | undefined>(
		typeof Audio === "undefined" ? undefined : new Audio(`${currentMusic}`)
	);

	function handleClickPlayStop() {
		if (musicStop) {
			currentAudio.current?.play();
			setMusicStop(false);
		} else {
			currentAudio.current?.pause();
			setMusicStop(true);
		}
	}

	return (
		<Button appearance={(musicStop) ? "primary" : "ghost"} className={cn(
			styles.playstop
		)} onClick={handleClickPlayStop} style={{ borderRadius: `100%` }}>
			{(musicStop) ? "Play" : "Stop"}
		</Button>
	);
};