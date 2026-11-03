import React, { useEffect, useRef, useState } from "react";

const DURATION = 1400;

// Crimson fill with a moving wave rises through the outlined mark, then the curtain lifts.
function Pre({ onDone }) {
	const ref = useRef(null);
	const [pct, setPct] = useState(0);
	const [stage, setStage] = useState("loading");

	useEffect(() => {
		const el = ref.current;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const duration = reduce ? 1 : DURATION;
		const start = performance.now();
		const timers = [];
		let frame;

		function tick(now) {
			const k = Math.min(1, (now - start) / duration);
			const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
			const value = Math.round(eased * 100);
			el.style.setProperty("--p", value + "%");
			el.style.setProperty("--k", eased);
			el.style.setProperty("--wx", -(now - start) * 0.12 + "px");
			setPct(value);
			if (k < 1) {
				frame = requestAnimationFrame(tick);
				return;
			}
			setStage("ready");
			timers.push(setTimeout(() => setStage("leaving"), 150));
			timers.push(setTimeout(onDone, 1000));
		}

		frame = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(frame);
			timers.forEach(clearTimeout);
		};
	}, [onDone]);

	const className = "vl-loader" + (stage !== "loading" ? " is-ready" : "") + (stage === "leaving" ? " is-leaving" : "");

	return (
		<div ref={ref} className={className} role="status" aria-label="Loading">
			<div className="vl-loader__corners vl-label" aria-hidden="true">
				<div><span className="vl-eyebrow">{"// software developer"}</span><span>Debrecen, HU</span></div>
				<div><span>Levente Varga</span><span>varga-levente.com</span></div>
			</div>
			<div className="vl-loader__center">
				<div className="vl-loader__mark" aria-hidden="true">VL.<span>VL.</span></div>
				<div className="vl-loader__bar">
					<div>
						<span>{stage === "loading" ? "// loading portfolio" : "// ready"}</span>
						<span>{String(pct).padStart(3, "0")}%</span>
					</div>
					<div className="vl-loader__track"><i /></div>
				</div>
			</div>
		</div>
	);
}

export default Pre;
