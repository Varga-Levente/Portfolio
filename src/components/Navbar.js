import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/project", label: "Projects" },
];

function NavBar({ onSecret }) {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const taps = useRef({ count: 0, timer: null });

	// Five quick clicks on the logo's dot open the hidden game.
	function tapDot() {
		const t = taps.current;
		t.count += 1;
		clearTimeout(t.timer);
		t.timer = setTimeout(() => { t.count = 0; }, 1500);
		if (t.count >= 5) {
			t.count = 0;
			onSecret();
		}
	}

	useEffect(() => setOpen(false), [pathname]);

	const links = navItems.map((item) => (
		<NavLink key={item.to} to={item.to} end>
			{item.label}
		</NavLink>
	));
	const contact = <Link to="/#contact">Contact</Link>;

	return (
		<header className="nav">
			<div className="wrap">
				<Link className="logo" to="/" aria-label="Levente Varga, home">VL<i onClick={tapDot}>.</i></Link>
				<nav aria-label="Main">
					<ul className="vl-label">
						{links.map((link) => <li key={link.key}>{link}</li>)}
						<li>{contact}</li>
					</ul>
				</nav>
				<div className="nav__end">
					<ThemeToggle />
					<button className="nav__menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="nav-drawer" onClick={() => setOpen(!open)}>
						{open ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</div>
			<nav className="wrap nav__drawer vl-label" id="nav-drawer" aria-label="Mobile" hidden={!open}>
				{links}
				{contact}
			</nav>
		</header>
	);
}

export default NavBar;
