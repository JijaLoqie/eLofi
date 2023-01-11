import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface MusicblockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	list: { songName: string, artist: string, music: { cover: string, song: string } }[],
	handleSetMusic: any
}