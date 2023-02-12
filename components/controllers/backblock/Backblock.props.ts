import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BackblockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	handleRandomBack: () => void;
}