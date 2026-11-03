import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function isDark() {
	const theme = document.documentElement.getAttribute("data-theme");
	if (theme) return theme === "dark";
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Follows the theme toggle and the system setting.
function useDarkMode() {
	const [dark, setDark] = useState(isDark);
	useEffect(() => {
		const update = () => setDark(isDark());
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const observer = new MutationObserver(update);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
		media.addEventListener("change", update);
		return () => {
			observer.disconnect();
			media.removeEventListener("change", update);
		};
	}, []);
	return dark;
}

const themes = {
	light: { level0: "#efeae8", level1: "#f3c3c5", level2: "#e57a80", level3: "#c0222b", level4: "#8e151c" },
	dark: { level0: "#1e1a1a", level1: "#4a1013", level2: "#7a161c", level3: "#b81f27", level4: "#f2545b" },
};

function Github() {
	const dark = useDarkMode();

	return (
		<section>
			<div className="vl-section-head"><h2>Days I code</h2><span className="vl-rule" /></div>
			<div className="calendar">
				<GitHubCalendar
					username="Varga-Levente"
					blockSize={13}
					blockMargin={4}
					fontSize={13}
					theme={dark ? themes.dark : themes.light}
					style={{ color: "inherit" }}
				/>
			</div>
		</section>
	);
}

export default Github;
