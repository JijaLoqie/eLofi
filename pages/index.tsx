import { useEffect, useReducer, useState } from "react";
import { Button, Panel, PlayStop } from "../components";

export default function Home() {



	const [background, setBackground] = useState("girl_study2.png");
	const [currentMusic, setCurrentMusic] = useState("/sounds/South.mp3");
	const [backs, setBacks] = useState<string[]>([]);
	const [musics, setMusics] = useState<
		{ songName: string, artist: string, music: { cover: string, song: string } }[]
	>([]);
	const [contentAppearance, setContentAppearance] = useState("normal");
	useEffect(() => {
		setBacks((wasBacks) => [...wasBacks, "cowboy.png"]);
		setBacks((wasBacks) => [...wasBacks, "girl_lord.png"]);
		setBacks((wasBacks) => [...wasBacks, "girl_study.png"]);
		setBacks((wasBacks) => [...wasBacks, "girl_study2.png"]);
		setBacks((wasBacks) => [...wasBacks, "magician1.png"]);
		setBacks((wasBacks) => [...wasBacks, "magician2.png"]);
		setBacks((wasBacks) => [...wasBacks, "magician3.png"]);
		addNewMusic("South", "HXVRMXN", { cover: "/songCovers/south.jpg", song: "/sounds/South.mp3" });
		addNewMusic("Madara", "HXVRMXN", { cover: "/songCovers/free-flow-flava-madara.jpg", song: "/sounds/free-flow-flava-madara.mp3" });
	}, []);

	const addNewMusic = (songName: string, artist: string, music: { cover: string, song: string }) => {
		setMusics((wasMusics) => [...wasMusics, { songName, artist, music }])
	}
	// close block
	const handleGoBack = () => {
		console.log("Go back");
		setContentAppearance("normal");
	};
	// set random background
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
			<Panel songList={musics} appearance={contentAppearance} handleBack={handleGoBack} handlers={{ handleSetMusic: addNewMusic }}>
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