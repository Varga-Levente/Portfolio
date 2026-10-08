// Postbuild: writes per-route HTML with the right head tags (for crawlers
// and link previews that don't run JS), a 404.html fallback for unknown
// URLs (serve answers them with a real 404) and build/sitemap.xml.
const fs = require("fs");
const path = require("path");
const { site, getMeta } = require("../src/seo/meta");

const buildDir = path.join(__dirname, "..", "build");
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

const escape = (value) =>
	String(value)
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

const attrs = (obj) =>
	Object.entries(obj)
		.map(([key, value]) => `${key}="${escape(value)}"`)
		.join(" ");

// data-rh lets react-helmet-async replace these tags on navigation.
function renderHead(pagePath) {
	const { title, canonical, meta } = getMeta(pagePath);
	return [
		`<title data-rh="true">${escape(title)}</title>`,
		`<link data-rh="true" rel="canonical" href="${escape(canonical)}">`,
		...meta.map((tag) => `<meta data-rh="true" ${attrs(tag)}>`),
	].join("");
}

function outputFile(pagePath) {
	return pagePath === "/" ? "index.html" : pagePath.slice(1) + ".html";
}

for (const page of site.pages) {
	const html = template.replace(/<title>[\s\S]*?<\/title>/, () => renderHead(page.path));
	if (html === template) throw new Error("No <title> found in build/index.html");
	fs.writeFileSync(path.join(buildDir, outputFile(page.path)), html);
}

// The SPA still loads here and redirects unknown routes to "/".
fs.writeFileSync(path.join(buildDir, "404.html"), template);

const sitemap = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...site.pages.map((page) => `\t<url><loc>${escape(site.siteUrl + page.path)}</loc></url>`),
	"</urlset>",
	"",
].join("\n");
fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemap);

console.log(`SEO: ${site.pages.length} pages, 404.html and sitemap.xml written to build/`);
