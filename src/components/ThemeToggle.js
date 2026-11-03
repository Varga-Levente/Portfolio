import React, { useEffect, useState } from "react";
import { FiSun, FiMonitor, FiMoon } from "react-icons/fi";

const options = [
	{ id: "light", label: "Light theme", icon: FiSun },
	{ id: "system", label: "System theme", icon: FiMonitor },
	{ id: "dark", label: "Dark theme", icon: FiMoon },
];

function readTheme() {
	try {
		return localStorage.getItem("theme") || "system";
	} catch (e) {
		return "system";
	}
}

// public/theme.js applies the saved theme before first paint; this keeps it in sync.
function ThemeToggle() {
	const [theme, setTheme] = useState(readTheme);

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "system") root.removeAttribute("data-theme");
		else root.setAttribute("data-theme", theme);
		try {
			localStorage.setItem("theme", theme);
		} catch (e) {}
	}, [theme]);

	return (
		<div className="vl-toggle" role="group" aria-label="Theme">
			{options.map(({ id, label, icon: Icon }) => (
				<button key={id} type="button" aria-label={label} aria-pressed={theme === id} onClick={() => setTheme(id)}>
					<Icon />
				</button>
			))}
		</div>
	);
}

export default ThemeToggle;
