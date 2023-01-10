import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	appearance: string;
	isHovered?: boolean;
	handleBack: () => void;
}