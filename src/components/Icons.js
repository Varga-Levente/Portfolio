import React from "react";

export function LongArrow({ className = "" }) {
	return (
		<svg className={className} viewBox="0 0 28 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
			<path d="M0 8h26M19 1l7 7-7 7" />
		</svg>
	);
}

export function Arrow() {
	return (
		<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
			<path d="M1 8h13M9 3l5 5-5 5" />
		</svg>
	);
}

export function Download() {
	return (
		<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
			<path d="M8 2v9M4 7l4 4 4-4M2 14h12" />
		</svg>
	);
}

export function XLogo() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
		</svg>
	);
}
