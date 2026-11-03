import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { LongArrow } from "../Icons";

// The cover is drawn in CSS from the project's headline, so no screenshots are needed.
function ProjectCover({ project }) {
	const [first, ...rest] = project.headline;
	const last = rest.pop();
	return (
		<div className="vl-project__media">
			<div className={"shot shot--" + project.shot}>
				<span className="shot__bar vl-label"><span>{project.domain}</span><span aria-hidden="true">● ● ●</span></span>
				<b>
					{first}
					{rest.map((line) => <React.Fragment key={line}><br />{line}</React.Fragment>)}
					{last && <><br /><i>{last}</i></>}
				</b>
			</div>
		</div>
	);
}

// Featured card: the whole card is one link.
export function FeaturedProject({ project, index }) {
	const href = project.demo || (project.github && project.github[0]);
	return (
		<a className="vl-project" href={href} target="_blank" rel="noreferrer">
			<ProjectCover project={project} />
			<div className="vl-project__meta">
				<span className="vl-project__num">{String(index + 1).padStart(2, "0")}</span>
				<div>
					<h3 className="vl-project__title">{project.title}</h3>
					<span className="vl-label vl-project__kind">{project.kind}</span>
				</div>
				<span className="vl-project__arrow"><LongArrow /></span>
			</div>
			<div className="vl-tags project-tags">
				{project.tags.map((tag) => <span key={tag} className="vl-tag">{tag}</span>)}
			</div>
		</a>
	);
}

// Card for the projects page: several links, so the card itself is not one.
function ProjectCard({ project }) {
	const github = project.github || [];
	return (
		<article className="vl-project">
			<ProjectCover project={project} />
			<div>
				<h3 className="vl-project__title">{project.title}</h3>
				<span className="vl-label vl-project__kind">{project.kind}</span>
			</div>
			<p className="project-desc">{project.description}</p>
			<div className="vl-tags">
				{project.tags.map((tag) => <span key={tag} className="vl-tag">{tag}</span>)}
			</div>
			<div className="project-links">
				{github.map((href, i) => (
					<a key={href} className="vl-link" href={href} target="_blank" rel="noreferrer">
						<FiGithub /> {github.length > 1 ? "Code " + (i + 1) : "Code"}
					</a>
				))}
				{project.demo && (
					<a className="vl-link" href={project.demo} target="_blank" rel="noreferrer">
						<FiExternalLink /> Visit
					</a>
				)}
				{!github.length && !project.demo && <span className="vl-label vl-project__kind">Private project</span>}
			</div>
		</article>
	);
}

export default ProjectCard;
