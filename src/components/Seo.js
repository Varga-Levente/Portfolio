import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getMeta, getJsonLd } from "../seo/meta";

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
			<script type="application/ld+json">{JSON.stringify(getJsonLd(pathname))}</script>
		</Helmet>
	);
}

export default Seo;
