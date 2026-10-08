// Shared by the React app (Seo component) and scripts/seo.js (build time).
// Kept as CommonJS so Node can require it without a build step.
const site = require("./pages.json");

function getPage(path) {
	return site.pages.find((page) => page.path === path) || site.pages[0];
}

function getMeta(path) {
	const page = getPage(path);
	const url = site.siteUrl + page.path;
	const image = site.siteUrl + site.image.path;

	return {
		title: page.title,
		canonical: url,
		meta: [
			{ name: "description", content: page.description },
			{ itemprop: "name", content: page.title },
			{ itemprop: "description", content: page.description },
			{ itemprop: "image", content: image },
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: site.siteName },
			{ property: "og:locale", content: site.locale },
			{ property: "og:url", content: url },
			{ property: "og:title", content: page.title },
			{ property: "og:description", content: page.description },
			{ property: "og:image", content: image },
			{ property: "og:image:width", content: String(site.image.width) },
			{ property: "og:image:height", content: String(site.image.height) },
			{ property: "og:image:alt", content: site.image.alt },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: page.title },
			{ name: "twitter:description", content: page.description },
			{ name: "twitter:image", content: image },
		],
	};
}

module.exports = { site, getMeta };
