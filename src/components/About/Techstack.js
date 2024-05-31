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
} from "react-icons/di";
import {
	SiMariadb,
} from "react-icons/si";
import {
	TbSql,
	TbBrandCSharp,
} from "react-icons/tb";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbBrandCSharp />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPhp />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMariadb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbSql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
		</Row>
	);
}

export default Techstack;
