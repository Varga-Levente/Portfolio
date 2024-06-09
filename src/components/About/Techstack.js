import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiPython,
	DiGit,
	DiJava,
	DiPhp,
	DiNginx,

} from "react-icons/di";
import {
	SiMariadb,
	SiAmazonaws,
	SiFlask,
} from "react-icons/si";
import {
	TbSql,
	TbBrandCSharp,
} from "react-icons/tb";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col title={"C++"} xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col title={"C#"} xs={4} md={2} className="tech-icons">
				<TbBrandCSharp />
			</Col>
			<Col title={"JavaScript"} xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col title={"NodeJS"} xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col title={"React"} xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col title={"PHP"} xs={4} md={2} className="tech-icons">
				<DiPhp />
			</Col>
			<Col title={"Java"} xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col title={"Python"} xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col title={"Flask"} xs={4} md={2} className="tech-icons">
				<SiFlask />
			</Col>
			<Col title={"SQL"} xs={4} md={2} className="tech-icons">
				<TbSql />
			</Col>
			<Col title={"MarisDB"} xs={4} md={2} className="tech-icons">
				<SiMariadb />
			</Col>
			<Col title={"Nginx"} xs={4} md={2} className="tech-icons">
				<DiNginx />
			</Col>
			<Col title={"Amazon AWS"} xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
			<Col title={"Git"} xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
		</Row>
	);
}

export default Techstack;
