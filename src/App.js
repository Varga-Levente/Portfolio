import React, { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Seo from "./components/Seo";
import Preloader from "./components/Pre";
import NotFound from "./components/NotFound";
import SnakeGame from "./components/SnakeGame";

const FADE = 400;

function App() {
	const [loading, setLoading] = useState(true);
	const done = useCallback(() => setLoading(false), []);

	// off → leaving (site fades out) → on (game fades in) → closing (game fades out) → off
	const [game, setGame] = useState("off");
	const timer = useRef();
	const openGame = useCallback(() => {
		setGame("leaving");
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setGame("on"), FADE);
	}, []);
	const closeGame = useCallback(() => {
		setGame("closing");
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setGame("off"), FADE);
	}, []);
	useEffect(() => () => clearTimeout(timer.current), []);
	useEffect(() => {
		document.documentElement.classList.toggle("is-gaming", game !== "off");
	}, [game]);

	const siteHidden = game !== "off";

	return (
		<Router>
			{loading && <Preloader onDone={done} />}
			<div className={"site" + (siteHidden ? " is-hidden" : "")} aria-hidden={siteHidden || undefined}>
				<Navbar onSecret={openGame} />
				<ScrollToTop />
				<Seo />
				<main id="top">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/project" element={<Projects />} />
						<Route path="/about" element={<About />} />
						<Route path="/resume" element={<Navigate to="/" replace />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
			{(game === "on" || game === "closing") && <SnakeGame closing={game === "closing"} onClose={closeGame} />}
		</Router>
	);
}

export default App;
