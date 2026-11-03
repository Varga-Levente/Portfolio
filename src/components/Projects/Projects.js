import React from "react";
import ProjectCard from "./ProjectCards";
import { projects } from "../../data/site";

function Projects() {
	return (
		<div className="wrap">
			<header className="page-head">
				<span className="vl-label vl-eyebrow">{"// projects"}</span>
				<h1>All projects<span>.</span></h1>
				<p>My own businesses, client work and university projects, from web apps to robots.</p>
			</header>
			<div className="page-body">
				<div className="projects-grid">
					{projects.map((project) => <ProjectCard key={project.title} project={project} />)}
				</div>
			</div>
		</div>
	);
}

export default Projects;
