import { TimerblockProps } from './Timerblock.props';
import styles from './Timerblock.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Button, Htag } from '../..';

export const Timerblock = ({ className, ...props }: TimerblockProps): JSX.Element => {
	const [show, setShow] = useState(false)
	const [timeValue, setTimeValue] = useState(0)
	const [timeValueStr, setTimeValueStr] = useState("00:00")
	const [isTicking, setIsTicking] = useState(false)
	const [tickingInterval, setTickingInterval] = useState<NodeJS.Timer>()
  // Start
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(timeout)

  }, [show])

  useEffect(() => {
    var newValue = ""
	if (timeValue >= 3600) {
		newValue += (String)(Math.floor(timeValue / 3600))
		newValue += ":"
	}
	newValue += (String)(Math.floor(timeValue / 600) % 6)
	newValue += (String)(Math.floor(timeValue / 60)%10)
	newValue += ":"
	newValue += (String)(Math.floor((timeValue % 60)/10))
	newValue += (String)(timeValue % 10)
	setTimeValueStr(newValue)

  }, [timeValue])

  const updateTime = (operator: '-' | '+', value: number) => {
	if (operator == '-') {
		setTimeValue(timeVal => {
			if (timeVal >= value) {
				return timeVal - value;
			} else {
				setIsTicking(false);
				return 0;
			}
		}
			)
	} else {
		setTimeValue(timeVal => timeVal + value)
	}
  }
	const startTicking = () => {
		if (!isTicking && timeValue != 0) {
			console.log("Starting!")
			setIsTicking(true);
			const interval = setInterval(() => {
				updateTime('-', 1);
			}, 1000);
			setTickingInterval(interval);
		}
	}
	const stopTicking = () => {
		if (isTicking) {
			setIsTicking(false);
		}
	}
	useEffect(() => {
		if (!isTicking && tickingInterval != null) {
			console.log("Stoping!!")
			clearInterval(tickingInterval);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTicking])

	return (
		<div className={styles.timerblock}>
			<Htag tag="h1">
				Set up timer as you like
			</Htag>
			<div className={styles.timercontent}>
				<div className={styles.timersettings}>
					<div>
						<Button appearance='ghost' onClick={() => {updateTime('-', 1)}}>-</Button>
						<div>1s</div>
						<Button appearance='ghost' onClick={() => {updateTime('+', 1)}}>+</Button>
					</div>
					<div>
						<Button appearance='ghost' onClick={() => {updateTime('-', 60)}}>-</Button>
						<div>1m</div>
						<Button appearance='ghost' onClick={() => {updateTime('+', 60)}}>+</Button>
					</div>
					<div>
						<Button appearance='ghost' onClick={() => {updateTime('-', 600)}}>-</Button>
						<div>10m</div>
						<Button appearance='ghost' onClick={() => {updateTime('+', 600)}}>+</Button>
					</div>
				</div>
				<div className={styles.timervalue}>
					<div>{timeValueStr}</div>
				</div>
				<div className={styles.timerstart}>
					<Button appearance='ghost' onClick={() => {startTicking()}}>
						Start
					</Button>
					<Button appearance='ghost' onClick={() => {stopTicking()}}>
						Stop
					</Button>
				</div>
			</div>
		</div>
	);
};