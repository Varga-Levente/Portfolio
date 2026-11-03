import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/placeholder.pdf";
import { Download } from "../Icons";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="wrap">
			<header className="page-head">
				<span className="vl-label vl-eyebrow">{"// resume"}</span>
				<h1>Resume<span>.</span></h1>
				<p>Education, experience and skills in one page.</p>
				<div className="vl-row">
					<a className="vl-btn vl-btn--primary" href={pdf} target="_blank" rel="noreferrer">Download CV <Download /></a>
				</div>
				<p className="notice vl-label">Placeholder: the real CV is coming soon.</p>
			</header>
			<div className="page-body">
				<div className="resume-doc">
					<Document file={pdf}>
						<Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} renderTextLayer={false} />
					</Document>
				</div>
			</div>
		</div>
	);
}

export default ResumeNew;
