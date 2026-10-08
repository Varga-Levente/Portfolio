import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getMeta } from "../seo/meta";

function Seo() {
	const { pathname } = useLocation();
	const { title, canonical, meta } = getMeta(pathname);

	return (
		<Helmet prioritizeSeoTags>
			<title>{title}</title>
			<link rel="canonical" href={canonical} />
			{meta.map((attrs) => (
				<meta key={attrs.name || attrs.property || "itemprop:" + attrs.itemprop} {...attrs} />
			))}
		</Helmet>
	);
}

export default Seo;
