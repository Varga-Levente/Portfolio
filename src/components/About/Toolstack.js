import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiJetbrains,
	SiPostman,
	SiSlack,
	SiNetlify,
	SiWindows11,
	SiDiscord,
	SiLinux,
	SiDocker,
	SiAdobephotoshop,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col title={"Windows 11"} xs={4} md={2} className="tech-icons">
				<SiWindows11 />
			</Col>
			<Col title={"Linux"} xs={4} md={2} className="tech-icons">
				<SiLinux />
			</Col>
			<Col title={"Jetbrains IDE"} xs={4} md={2} className="tech-icons">
				<SiJetbrains />
			</Col>
			<Col title={"Postman"} xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col title={"Slack"} xs={4} md={2} className="tech-icons">
				<SiSlack />
			</Col>
			<Col title={"Discord"} xs={4} md={2} className="tech-icons">
				<SiDiscord />
			</Col>
			<Col title={"Netlify"} xs={4} md={2} className="tech-icons">
				<SiNetlify />
			</Col>
			<Col title={"Docker"} xs={4} md={2} className="tech-icons">
				<SiDocker />
			</Col>
			<Col title={"Photoshop"} xs={4} md={2} className="tech-icons">
				<SiAdobephotoshop />
			</Col>
		</Row>
	);
}

export default Toolstack;
