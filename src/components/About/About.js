import React from "react";
import Github from "./Github";
import { experience, techStack, toolStack } from "../../data/site";

function TechGrid({ items }) {
	return (
		<div className="tech-grid">
			{items.map(({ name, icon: Icon }) => (
				<div key={name} className="tech-item"><Icon aria-hidden="true" />{name}</div>
			))}
		</div>
	);
}

function About() {
	const hobbies = ["Playing games", "Creating game servers", "Airsoft and paintball", "Cooking and grilling"];

	return (
		<div className="wrap">
			<header className="page-head">
				<span className="vl-label vl-eyebrow">{"// about me"}</span>
				<h1>Levente Varga<span>.</span></h1>
				<p>Developer and entrepreneur from Debrecen, Hungary. IT engineering student at the Faculty of Informatics, University of Debrecen.</p>
			</header>
			<div className="page-body">
				<section className="about">
					<div className="about__text">
						<p>I'm proficient in <strong>Java, C#, Python, PHP and JavaScript</strong>, and I work with frameworks in each of these ecosystems.</p>
						<p>Today I mostly work with <strong>Node.js and React</strong>, while building <strong>CI/CD pipelines</strong> and tuning the network and server infrastructure underneath. Security and stability are my top priorities, which is why I run everything in <strong>Docker and Podman</strong> containers.</p>
						<div className="skills">
							<span className="vl-label">Beyond coding</span>
							<div className="vl-tags">{hobbies.map((h) => <span key={h} className="vl-tag">{h}</span>)}</div>
						</div>
					</div>
					<ol className="vl-timeline vl-timeline--more">
						{experience.map((item) => (
							<li key={item.title} className="vl-tl">
								<span className="vl-label vl-tl__when">{item.when}</span>
								<h3>{item.title}</h3>
								<b>{item.org}</b>
								<p>{item.text}</p>
							</li>
						))}
					</ol>
				</section>
				<section>
					<div className="vl-section-head"><h2>Tech stack</h2><span className="vl-rule" /></div>
					<TechGrid items={techStack} />
				</section>
				<section>
					<div className="vl-section-head"><h2>Tools I use</h2><span className="vl-rule" /></div>
					<TechGrid items={toolStack} />
				</section>
				<Github />
			</div>
		</div>
	);
}

export default About;
