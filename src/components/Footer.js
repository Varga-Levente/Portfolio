import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { XLogo } from "./Icons";
import { socials } from "../data/site";

const icons = { GitHub: FiGithub, X: XLogo, Instagram: FiInstagram };

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="foot">
			<div className="wrap">
				<Link className="logo" to="/" aria-label="Levente Varga, home">VL<i>.</i></Link>
				<span className="vl-label">© {year} Levente Varga · Debrecen</span>
				<nav aria-label="Social">
					{socials.map(({ label, href }) => {
						const Icon = icons[label];
						return (
							<a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
								<Icon />
							</a>
						);
					})}
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
