import { MusicblockProps } from './Musicblock.props';
import styles from './Musicblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Htag } from '../..';

export const Musicblock = ({ className, list, handleSetMusic, ...props }: MusicblockProps): JSX.Element => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true)
		}, 100)

		return () => clearTimeout(timeout)

	}, [show])

	const handleChangeMusic = (newSong: { isPrev: boolean, playListIndex: number }) => {
		console.log("changed!")
		handleSetMusic(list[newSong.playListIndex])
	}
	return (
		<div className={styles.musicblock}>
			<Htag tag="h1">
				Set up music as you like
			</Htag>
			<ul className={styles.playlist}>
				{list.map(({ songName, artist, music: { cover, song } }, index) => {
					return (
						<li key={index}
							className={styles.song}
							onClick={() =>
								handleChangeMusic({ isPrev: false, playListIndex: index })
							}
						>
							<div className={styles.song_view_block}>
								<div style={{ backgroundImage: `url(${cover}` }} className={styles.song_image} />
								<div className={styles.song_info}>
									<b className={styles.song_name}>{songName}</b>
									<div className={styles.little_text}>
										<span className={styles.artist_song}>{artist}</span>
										<span className={styles.duration_song}></span>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};