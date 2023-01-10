import { AudioHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PlayStopProps extends DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> {
	children?: ReactNode;
	currentMusic: string;
}