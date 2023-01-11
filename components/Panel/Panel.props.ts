import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	appearance: string;
	songList: { songName: string, artist: string, music: { cover: string, song: string } }[],
	isHovered?: boolean;
	handleBack: () => void;
	handlers: { handleSetMusic: any }
}