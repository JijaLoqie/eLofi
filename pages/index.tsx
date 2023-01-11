import { useEffect, useState } from "react";
import { Button, Panel, PlayStop } from "../components";

export default function Home() {
	const [background, setBackground] = useState("girl_study2.png");
	const [currentMusic, setCurrentMusic] = useState("South.mp3");
	const [backs, setBacks] = useState<string[]>([]);
	const [contentAppearance, setContentAppearance] = useState("normal");
	useEffect(() => {
		setBacks((wasBacks) => [...wasBacks, "cowboy.png"]);
		setBacks((wasBacks) => [...wasBacks, "girl_lord.png"]);
		setBacks((wasBacks) => [...wasBacks, "girl_study.png"]);
		setBacks((wasBacks) => [...wasBacks, "girl_study2.png"]);
		setBacks((wasBacks) => [...wasBacks, "magician1.png"]);
		setBacks((wasBacks) => [...wasBacks, "magician2.png"]);
		setBacks((wasBacks) => [...wasBacks, "magician3.png"]);
	}, []);

	const handleGoBack = () => {
		console.log("Go back");
		setContentAppearance("normal");
	};
	const handleBackground = () => {
		const i = Math.floor(Math.random() * backs.length);
		setBackground(backs[i]);
	};
	const handleInfo = (newAppearance: string) => {
		if (newAppearance == contentAppearance) {
			handleGoBack();
			return;
		}
		if (newAppearance == `background`) {
			handleBackground();
		}
		setContentAppearance(newAppearance);
	};
	return (
		<main style={{ backgroundImage: `url(/backs/${background})` }}>
			<Panel appearance={contentAppearance} handleBack={handleGoBack}>
				<Button appearance="primary" onClick={() => handleInfo("info")}>
					eLofi
				</Button>
				<Button appearance="primary" onClick={() => handleInfo("music")}>
					music
				</Button>
				<Button appearance="primary" onClick={() => handleInfo("background")}>
					back
				</Button>
				<Button appearance="primary" onClick={() => handleInfo("color")}>color</Button>
				<Button appearance="primary" onClick={() => handleInfo("timer")}>timer</Button>
			</Panel>
			<PlayStop currentMusic={currentMusic} />
		</main>
	);
}