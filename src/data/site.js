// Content for the whole site in one place.
import {
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiTypescript,
	SiDotnet,
	SiPhp,
	SiPython,
	SiDocker,
	SiKubernetes,
	SiJavascript,
	SiOpenjdk,
	SiFlask,
	SiMongodb,
	SiPostgresql,
	SiMariadb,
	SiRedis,
	SiSocketdotio,
	SiAndroid,
	SiRaspberrypi,
	SiEspressif,
	SiNginx,
	SiGit,
	SiPodman,
	SiAmazonaws,
	SiUbuntu,
	SiJetbrains,
	SiPostman,
	SiDiscord,
	SiAdobephotoshop,
	SiWindows11,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FiMonitor, FiServer, FiBox, FiSmartphone } from "react-icons/fi";
import { ClaudeLogo } from "../components/Icons";

export const contactEmail = "hello@varga-levente.com";

export const socials = [
	{ label: "GitHub", short: "GH", href: "https://github.com/Varga-Levente" },
	{ label: "X", short: "X", href: "https://x.com/VLevente20" },
	{ label: "Instagram", short: "IG", href: "https://www.instagram.com/vlevente__/" },
];

export const heroTech = [
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: ".NET", icon: SiDotnet },
	{ name: "PHP", icon: SiPhp },
	{ name: "Python", icon: SiPython },
	{ name: "Docker", icon: SiDocker },
	{ name: "Kubernetes", icon: SiKubernetes },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "Redis", icon: SiRedis },
	{ name: "Socket.IO", icon: SiSocketdotio },
	{ name: "Git", icon: SiGit },
	{ name: "Claude", icon: ClaudeLogo },
];

export const techStack = [
	{ name: "C#", icon: TbBrandCSharp },
	{ name: "Java", icon: SiOpenjdk },
	{ name: "Python", icon: SiPython },
	{ name: "PHP", icon: SiPhp },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: ".NET", icon: SiDotnet },
	{ name: "Flask", icon: SiFlask },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MariaDB", icon: SiMariadb },
	{ name: "Redis", icon: SiRedis },
	{ name: "Socket.IO", icon: SiSocketdotio },
	{ name: "Android", icon: SiAndroid },
	{ name: "ESP32", icon: SiEspressif },
	{ name: "Raspberry Pi", icon: SiRaspberrypi },
];

export const toolStack = [
	{ name: "Docker", icon: SiDocker },
	{ name: "Podman", icon: SiPodman },
	{ name: "Kubernetes", icon: SiKubernetes },
	{ name: "AWS", icon: SiAmazonaws },
	{ name: "Nginx", icon: SiNginx },
	{ name: "Git", icon: SiGit },
	{ name: "Claude", icon: ClaudeLogo },
	{ name: "Ubuntu", icon: SiUbuntu },
	{ name: "Windows 11", icon: SiWindows11 },
	{ name: "JetBrains", icon: SiJetbrains },
	{ name: "Postman", icon: SiPostman },
	{ name: "Discord", icon: SiDiscord },
	{ name: "Photoshop", icon: SiAdobephotoshop },
];

export const skills = ["C#", "Java", "Python", "PHP", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", ".NET", "PostgreSQL", "MongoDB", "Redis", "Kubernetes"];

export const stats = [
	{ value: "10+", label: ["Projects", "shipped"] },
	{ value: "19", label: ["Languages &", "technologies"] },
	{ value: "3", label: ["Own", "ventures"] },
];

export const services = [
	{ title: "Web development", text: "Fast, modern web apps and sites, from landing page to dashboard.", stack: "React · Next.js · TypeScript", icon: FiMonitor },
	{ title: "Backend & APIs", text: "Services, real-time apps and databases that hold up under load.", stack: "Node.js · Flask", icon: FiServer },
	{ title: "DevOps & hosting", text: "Containers, CI/CD and hardened servers, deployed and monitored.", stack: "Docker · Podman · Kubernetes · Nginx", icon: FiBox },
	{ title: "Mobile & IoT", text: "Android apps and devices that talk to hardware, like robots and garage doors.", stack: "Android · Java · ESP32 · Raspberry Pi", icon: FiSmartphone },
];

// Newest first. The timeline draws an arrow from each item up to the newer one.
export const experience = [
	{ when: "Now", title: "Founder", org: "PandaSoft · Panda3D · Dotrix", text: "Software development, 3D printing and Dotrix, a Discord bot." },
	{ when: "Now", title: "IT engineering student", org: "University of Debrecen", text: "Faculty of Informatics." },
	{ when: "Past", title: ".NET developer, R&D", org: "National Instruments (Emerson)", text: "Research and development on .NET." },
	{ when: "Past", title: "PHP backend developer", org: "PQRS Kft.", text: "Backend development in PHP." },
];

export const process = [
	{ title: "Discover", text: "Goals, users and constraints first." },
	{ title: "Design", text: "Data model, API and interface." },
	{ title: "Develop", text: "Clean, tested code in small steps." },
	{ title: "Containerize", text: "Docker images, CI/CD pipeline." },
	{ title: "Ship & run", text: "Deployed, secured and monitored." },
];

// featured: shown on the home page, in this order.
export const projects = [
	{
		title: "PandaSoft",
		kind: "Software business",
		description: "My software development business: custom software, web development and IT consulting.",
		tags: ["Web dev", "Consulting"],
		demo: "https://pandasoft.hu/",
		domain: "pandasoft.hu",
		headline: ["Custom", "software", "that ships."],
		shot: "a",
		featured: true,
	},
	{
		title: "Panda3D",
		kind: "3D printing business",
		description: "My 3D printing business: custom prints, prototyping and other 3D printing services.",
		tags: ["Prototyping", "E-commerce"],
		demo: "https://panda3d.hu/",
		domain: "panda3d.hu",
		headline: ["Printed", "layer by", "layer."],
		shot: "b",
		featured: true,
	},
	{
		title: "Dotrix",
		kind: "Discord bot",
		description: "Dotrix, my Discord bot.",
		tags: ["Discord bot"],
		demo: "https://dotrix.app/",
		domain: "dotrix.app",
		headline: ["Dotrix", "for Discord."],
		shot: "c",
		featured: true,
	},
	{
		title: "Cinema app",
		kind: "Ticketing web app",
		description: "Buy movie tickets with seat selection and pre-order snacks and drinks.",
		tags: ["React", "Java Spring", "MySQL"],
		github: ["https://github.com/Varga-Levente/Szoftverfejlesztes-mernokoknek"],
		domain: "cinema app",
		headline: ["Pick a seat,", "grab a snack."],
		shot: "d",
	},
	{
		title: "RoBOT Android app",
		kind: "Mobile · IoT",
		description: "Controls an ESP32 robot over TCP/IP, with on-screen buttons or by tilting the phone.",
		tags: ["Android", "Java", "ESP32"],
		github: ["https://github.com/Varga-Levente/RoBOT-Controller-Android-APP", "https://github.com/Varga-Levente/RoBOT"],
		domain: "robot controller",
		headline: ["Tilt to", "drive."],
		shot: "e",
	},
	{
		title: "Real-time chat",
		kind: "Desktop app",
		description: "Chat client, server and a Python API for user validation, with text and file transfer.",
		tags: ["C#", "Python", "TCP/IP"],
		github: ["https://github.com/Varga-Levente/Tavkozlohalo-Chat", "https://github.com/Varga-Levente/Tavkozlohalo_API"],
		domain: "chat",
		headline: ["Messages,", "files, now."],
		shot: "f",
	},
	{
		title: "1-bit BMP graph generator",
		kind: "Systems programming",
		description: "A C program that draws 1-bit BMP graphs, with sender and receiver modes over IPC.",
		tags: ["C", "Networking", "IPC"],
		github: ["https://github.com/Varga-Levente/rendszerkozeli-programozas-projekt"],
		domain: "bmp generator",
		headline: ["One bit", "per pixel."],
		shot: "a",
	},
	{
		title: "GTA V roleplay gym site",
		kind: "Web app",
		description: "Staff log sales and attendance for a roleplay server gym, and owners track performance.",
		tags: ["PHP", "MySQL", "Bootstrap"],
		github: ["https://github.com/Varga-Levente/NFGym-Website"],
		domain: "nfgym",
		headline: ["Sales and", "shifts, logged."],
		shot: "b",
	},
	{
		title: "Education page",
		kind: "Website",
		description: "A framework-free PHP site with course notes, lecture slides and links for university subjects.",
		tags: ["PHP", "HTML/CSS", "JavaScript"],
		demo: "https://edu.vlevente.me/",
		domain: "edu.vlevente.me",
		headline: ["Notes for", "every class."],
		shot: "e",
	},
	{
		title: "GateGuard",
		kind: "Mobile · IoT",
		description: "A private Android app for my smart garage door system, with secure authentication.",
		tags: ["Android", "IoT", "Java"],
		domain: "gateguard",
		headline: ["The gate", "opens for you."],
		shot: "f",
	},
	{
		title: "Catch the Impostor",
		kind: "Multiplayer game",
		description: "A real-time social deduction game built with Socket.IO.",
		tags: ["Socket.IO", "Node.js", "Multiplayer"],
		domain: "impostor",
		headline: ["Who is", "the impostor?"],
		shot: "d",
	},
];
