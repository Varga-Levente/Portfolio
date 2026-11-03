import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Arrow } from "./Icons";

function NotFound() {
	const { pathname } = useLocation();

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
				<p>There is nothing at <code className="vl-label">{pathname}</code>. The link may be old, or the page has moved.</p>
				<div className="vl-row">
					<Link className="vl-btn vl-btn--primary" to="/">Back to home <Arrow /></Link>
					<Link className="vl-btn vl-btn--outline" to="/project">View projects</Link>
				</div>
			</div>
		</section>
	);
}

export default NotFound;
