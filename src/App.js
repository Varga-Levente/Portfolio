import React, { useCallback, useState } from "react";
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

function App() {
	const [loading, setLoading] = useState(true);
	const done = useCallback(() => setLoading(false), []);

	return (
		<Router>
			{loading && <Preloader onDone={done} />}
			<Navbar />
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
		</Router>
	);
}

export default App;
