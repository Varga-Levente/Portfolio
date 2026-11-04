import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Arrow } from "./Icons";

const jokes = [
	"This page went out for coffee and never came back.",
	"It works on my machine. Your machine is a different story.",
	"I checked the database, the backups and under the couch. Nothing.",
	"This page was deployed to production. Production disagreed.",
	"The page is in another container.",
	"git checkout this-page: pathspec did not match any file(s).",
	"Somebody ran rm -rf on this one. It wasn't me.",
	"The zero is here, the page is not.",
	"Even the best developers lose a route sometimes.",
	"This is not the page you are looking for. Nobody knows where that one is.",
];

function NotFound() {
	const { pathname } = useLocation();
	const [joke] = useState(() => jokes[Math.floor(Math.random() * jokes.length)]);

	return (
		<section className="notfound">
			<Helmet>
				<title>Page not found – Levente Varga</title>
				<meta name="robots" content="noindex" />
			</Helmet>
			<p className="notfound__code" aria-hidden="true">4<span>0</span>4</p>
			<div className="wrap notfound__body">
				<span className="vl-label vl-eyebrow">{"// error 404"}</span>
				<h1>Page not found<span>.</span></h1>
				<p className="notfound__joke">{joke}</p>
				<p>There is nothing at <code className="vl-label">{pathname}</code>.</p>
				<div className="vl-row">
					<Link className="vl-btn vl-btn--primary" to="/">Back to home <Arrow /></Link>
					<Link className="vl-btn vl-btn--outline" to="/project">View projects</Link>
				</div>
			</div>
		</section>
	);
}

export default NotFound;
