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

// schema.org data for search engines: the site, its owner and the current page.
function getJsonLd(path) {
	const page = getPage(path);
	const { person } = site;
	const personId = site.siteUrl + "/#person";
	const websiteId = site.siteUrl + "/#website";

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": personId,
				name: person.name,
				url: site.siteUrl,
				image: site.siteUrl + site.image.path,
				jobTitle: person.jobTitle,
				address: {
					"@type": "PostalAddress",
					addressLocality: person.city,
					addressCountry: person.country,
				},
				alumniOf: { "@type": "CollegeOrUniversity", name: person.school },
				knowsAbout: person.knowsAbout,
				sameAs: person.sameAs,
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: site.siteUrl,
				name: site.siteName,
				inLanguage: "en",
				publisher: { "@id": personId },
			},
			{
				"@type": page.path === "/about" ? "ProfilePage" : "WebPage",
				url: site.siteUrl + page.path,
				name: page.title,
				description: page.description,
				isPartOf: { "@id": websiteId },
				about: { "@id": personId },
			},
		],
	};
}

module.exports = { site, getMeta, getJsonLd };
