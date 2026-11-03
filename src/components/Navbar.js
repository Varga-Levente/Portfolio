import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/project", label: "Projects" },
];

function NavBar() {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

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
				<Link className="logo" to="/" aria-label="Levente Varga, home">VL<i>.</i></Link>
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
