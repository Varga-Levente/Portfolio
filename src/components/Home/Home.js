import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiEdit2, FiCode, FiBox, FiSend, FiStar, FiMapPin, FiUser, FiBookOpen, FiClock, FiGithub, FiGlobe, FiMail } from "react-icons/fi";
import { Arrow, LongArrow } from "../Icons";
import { FeaturedProject } from "../Projects/ProjectCards";
import { contactEmail, experience, heroTech, process, projects, services, skills, stats } from "../../data/site";
import portrait from "../../Assets/portrait.jpg";

const processIcons = [FiSearch, FiEdit2, FiCode, FiBox, FiSend];

function Hero() {
	return (
		<section className="hero">
			<div className="wrap">
				<div className="hero__top vl-label">
					<span className="vl-eyebrow">{"// software developer"}</span>
					<span><i className="pulse" />Available for freelance</span>
				</div>
				<p className="hero__word" aria-hidden="true">PORTFOLIO</p>
				<div className="hero__intro">
					<span className="hello">{"// hello, I'm"}</span>
					<h1 className="hero__name">Levente<br />Varga</h1>
					<p className="hero__role">Full stack developer<br />&amp; entrepreneur</p>
					<p>I build modern web applications with Node.js and React, and the CI/CD pipelines and container infrastructure that keep them secure and stable.</p>
					<div className="vl-row">
						<Link className="vl-btn vl-btn--primary" to="/project">View my work <Arrow /></Link>
						<a className="vl-btn vl-btn--outline" href="#contact">Get in touch</a>
					</div>
					<div className="hero__tech">
						<span className="vl-label">Tech I work with</span>
						<div className="vl-marquee">
							<div className="vl-marquee__track">
								{[0, 1].map((copy) => (
									<ul key={copy} className="vl-marquee__group" aria-hidden={copy === 1 ? "true" : undefined}>
										{heroTech.map(({ name, icon: Icon }) => (
											<li key={name} className="vl-chip"><Icon aria-hidden="true" />{name}</li>
										))}
									</ul>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="portrait">
					<span className="portrait__ring" />
					<figure className="portrait__photo">
						<img src={portrait} alt="Levente Varga" width="460" height="460" />
						<figcaption className="vl-label">Levente Varga · Debrecen</figcaption>
					</figure>
				</div>
				<aside className="hero__side">
					<p className="claim"><span className="vl-icon"><FiStar /></span>Strive to build things that make a difference.</p>
					<div className="statcard vl-stats">
						{stats.map((stat) => (
							<div key={stat.value + stat.label[0]} className="vl-stat">
								<b>{stat.value}</b>
								<span className="vl-label">{stat.label[0]}<br />{stat.label[1]}</span>
							</div>
						))}
					</div>
					<span className="where vl-label"><FiMapPin />Debrecen, Hungary</span>
				</aside>
			</div>
		</section>
	);
}

function About() {
	const facts = [
		{ icon: FiUser, label: "Name", value: "Levente Varga" },
		{ icon: FiMapPin, label: "Location", value: "Debrecen, Hungary" },
		{ icon: FiBookOpen, label: "Studying", value: "IT engineering, Univ. of Debrecen" },
		{ icon: FiClock, label: "Availability", value: "Open for freelance work" },
	];
	return (
		<section className="band" id="about">
			<div className="wrap">
				<div className="about">
					<div className="about__text">
						<span className="vl-label vl-eyebrow">{"// about me"}</span>
						<h2>Clean code, <em>stable</em> systems.</h2>
						<p>I'm proficient in <strong>Java, C#, Python, PHP and JavaScript</strong>. Today I mostly work with <strong>Node.js and React</strong>, build CI/CD pipelines and tune the network and servers underneath. Security and stability come first, so everything runs in <strong>Docker or Podman</strong>.</p>
						<div><Link className="vl-btn vl-btn--outline" to="/about">More about me</Link></div>
					</div>
					<div className="facts">
						{facts.map(({ icon: Icon, label, value }) => (
							<div key={label} className="fact">
								<span className="vl-icon"><Icon /></span>
								<div><span className="vl-label">{label}</span>{value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function Featured() {
	return (
		<section className="band" id="projects">
			<div className="wrap">
				<div className="vl-section-head">
					<h2>Selected projects</h2>
					<span className="vl-rule" />
					<Link className="vl-link" to="/project"><span>View all projects</span> <LongArrow /></Link>
				</div>
				<div className="grid3">
					{projects.filter((p) => p.featured).map((project, i) => (
						<FeaturedProject key={project.title} project={project} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}

function Services() {
	return (
		<section className="band">
			<div className="wrap">
				<div className="vl-section-head"><h2>What I do</h2><span className="vl-rule" /></div>
				<div className="vl-services">
					{services.map(({ title, text, stack, icon: Icon }) => (
						<div key={title} className="vl-service">
							<span className="vl-service__icon"><Icon /></span>
							<h3>{title}</h3>
							<p>{text}</p>
							<small>{stack}</small>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Experience() {
	return (
		<section className="band" id="experience">
			<div className="wrap">
				<div className="trio">
					<div>
						<h2>Experience &amp; education</h2>
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
						<div className="skills">
							<span className="vl-label">Skills</span>
							<div className="vl-tags">{skills.map((s) => <span key={s} className="vl-tag">{s}</span>)}</div>
						</div>
					</div>
					<div>
						<h2>Work process</h2>
						<ol className="vl-steps">
							{process.map((step, i) => {
								const Icon = processIcons[i];
								return (
									<li key={step.title} className="vl-step">
										<span className="vl-step__num">{String(i + 1).padStart(2, "0")}</span>
										<span className="vl-step__icon"><Icon /></span>
										<div><h3 className="vl-label">{step.title}</h3><p>{step.text}</p></div>
									</li>
								);
							})}
						</ol>
					</div>
					<div className="vl-quote">
						<span className="vl-quote__mark" aria-hidden="true">“</span>
						<p>Strive to build things that make a difference.</p>
						<span className="vl-label">Let's build something<br />that lasts.</span>
					</div>
				</div>
			</div>
		</section>
	);
}

function Contact() {
	const [opened, setOpened] = useState(false);

	// No backend: the form opens the visitor's mail app with the message filled in.
	function submit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		const subject = data.get("subject") || "Project inquiry";
		const body = `${data.get("message")}\n\n${data.get("name")} <${data.get("email")}>`;
		window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setOpened(true);
	}

	return (
		<section className="band" id="contact">
			<div className="wrap">
				<div className="contact">
					<div className="contact__head">
						<span className="vl-label vl-eyebrow">{"// get in touch"}</span>
						<h2>Let's work<br />together<span>.</span></h2>
						<p>Have a project in mind or need a hand with your infrastructure? Send a message and I'll get back to you.</p>
						<div className="vl-contacts">
							<a className="vl-contact" href={`mailto:${contactEmail}`}><span className="vl-icon"><FiMail /></span>{contactEmail}</a>
							<a className="vl-contact" href="https://github.com/Varga-Levente" target="_blank" rel="noreferrer"><span className="vl-icon"><FiGithub /></span>github.com/Varga-Levente</a>
							<a className="vl-contact" href="https://pandasoft.hu/" target="_blank" rel="noreferrer"><span className="vl-icon"><FiGlobe /></span>pandasoft.hu</a>
							<div className="vl-contact"><span className="vl-icon"><FiMapPin /></span>Debrecen, Hungary</div>
						</div>
					</div>
					<form className="vl-form" onSubmit={submit}>
						<div className="vl-form__row">
							<div className="vl-field"><label className="vl-label" htmlFor="f-name">Name</label><input className="vl-input" id="f-name" name="name" autoComplete="name" placeholder="Your name" required /></div>
							<div className="vl-field"><label className="vl-label" htmlFor="f-email">Email</label><input className="vl-input" id="f-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
						</div>
						<div className="vl-field"><label className="vl-label" htmlFor="f-subject">Subject</label><input className="vl-input" id="f-subject" name="subject" placeholder="Web app, hosting, consulting…" /></div>
						<div className="vl-field"><label className="vl-label" htmlFor="f-msg">Message</label><textarea className="vl-input" id="f-msg" name="message" placeholder="Tell me about your project" required /></div>
						<button className="vl-btn vl-btn--primary" type="submit" style={{ justifyContent: "center" }}>Send message <Arrow /></button>
						{opened && <p className="vl-label not-sent" role="status">Your mail app should open now. If it doesn't, write to {contactEmail}.</p>}
					</form>
				</div>
			</div>
		</section>
	);
}

function Home() {
	return (
		<>
			<Hero />
			<About />
			<Featured />
			<Services />
			<Experience />
			<Contact />
		</>
	);
}

export default Home;
