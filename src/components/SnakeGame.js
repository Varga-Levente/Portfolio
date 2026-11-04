import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { heroTech } from "../data/site";

const N = 15;
const SIZE = 960;
const CELL = SIZE / N;
const BEST_KEY = "vl-snake-best";
const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const KEYS = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", s: "down", a: "left", d: "right" };

function readBest() {
	try {
		return Number(localStorage.getItem(BEST_KEY)) || 0;
	} catch (e) {
		return 0;
	}
}

function saveBest(value) {
	try {
		localStorage.setItem(BEST_KEY, String(value));
	} catch (e) {}
}

function freeCell(snake) {
	const taken = new Set(snake.map(([x, y]) => x + "," + y));
	const free = [];
	for (let x = 0; x < N; x++) {
		for (let y = 0; y < N; y++) {
			if (!taken.has(x + "," + y)) free.push([x, y]);
		}
	}
	return free[Math.floor(Math.random() * free.length)];
}

// Hidden snake: collect the tech stack. Opened by clicking the logo's dot five times.
function SnakeGame({ closing, onClose }) {
	const canvasRef = useRef(null);
	const game = useRef(null);
	const [status, setStatus] = useState("ready");
	const [score, setScore] = useState(0);
	const [best, setBest] = useState(readBest);
	const [food, setFood] = useState(null);
	const [collected, setCollected] = useState([]);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		const css = getComputedStyle(document.documentElement);
		const color = (name) => css.getPropertyValue(name).trim();
		ctx.fillStyle = color("--bg");
		ctx.fillRect(0, 0, SIZE, SIZE);
		ctx.strokeStyle = color("--line");
		ctx.lineWidth = 2;
		for (let i = 1; i < N; i++) {
			ctx.beginPath();
			ctx.moveTo(i * CELL, 0);
			ctx.lineTo(i * CELL, SIZE);
			ctx.moveTo(0, i * CELL);
			ctx.lineTo(SIZE, i * CELL);
			ctx.stroke();
		}
		const g = game.current;
		if (!g) return;
		g.snake.forEach(([x, y], i) => {
			ctx.fillStyle = i === 0 ? color("--ink") : color("--crimson");
			ctx.fillRect(x * CELL + 5, y * CELL + 5, CELL - 10, CELL - 10);
		});
	}, []);

	const start = useCallback(() => {
		const snake = [[7, 7], [6, 7], [5, 7]];
		const cell = freeCell(snake);
		game.current = { snake, dir: DIRS.right, next: DIRS.right, food: cell, eaten: 0 };
		setFood({ cell, tech: heroTech[0] });
		setScore(0);
		setCollected([]);
		setStatus("playing");
		draw();
	}, [draw]);

	const turn = useCallback((name) => {
		const g = game.current;
		const d = DIRS[name];
		if (!g || !d || (d[0] === -g.dir[0] && d[1] === -g.dir[1])) return;
		g.next = d;
	}, []);

	// Game loop: one step per tick, a little faster after every bite.
	useEffect(() => {
		if (status !== "playing") return undefined;
		let timer;
		function step() {
			const g = game.current;
			g.dir = g.next;
			const head = [g.snake[0][0] + g.dir[0], g.snake[0][1] + g.dir[1]];
			const hit = head[0] < 0 || head[1] < 0 || head[0] >= N || head[1] >= N || g.snake.some(([x, y]) => x === head[0] && y === head[1]);
			if (hit) {
				setStatus("over");
				return;
			}
			g.snake.unshift(head);
			if (head[0] === g.food[0] && head[1] === g.food[1]) {
				const tech = heroTech[g.eaten % heroTech.length];
				g.eaten += 1;
				g.food = freeCell(g.snake);
				setScore(g.eaten);
				setCollected((list) => [...list, tech.name]);
				setFood({ cell: g.food, tech: heroTech[g.eaten % heroTech.length] });
			} else {
				g.snake.pop();
			}
			draw();
			timer = setTimeout(step, Math.max(70, 160 - g.eaten * 6));
		}
		timer = setTimeout(step, 160);
		return () => clearTimeout(timer);
	}, [status, draw]);

	useEffect(() => {
		if (status === "over" && score > best) {
			setBest(score);
			saveBest(score);
		}
	}, [status, score, best]);

	useEffect(() => {
		function onKey(e) {
			if (e.key === "Escape") return onClose();
			if (KEYS[e.key] && status === "playing") {
				e.preventDefault();
				turn(KEYS[e.key]);
			} else if ((e.key === " " || e.key === "Enter") && status !== "playing") {
				e.preventDefault();
				start();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [status, turn, start, onClose]);

	// Redraw when the theme changes.
	useEffect(() => {
		draw();
		const observer = new MutationObserver(draw);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		media.addEventListener("change", draw);
		return () => {
			observer.disconnect();
			media.removeEventListener("change", draw);
		};
	}, [draw]);

	const swipe = useRef(null);
	function onPointerUp(e) {
		if (!swipe.current) return;
		const dx = e.clientX - swipe.current[0];
		const dy = e.clientY - swipe.current[1];
		swipe.current = null;
		if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) return;
		turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up");
	}

	const FoodIcon = food && food.tech.icon;
	const all = score >= heroTech.length;

	return (
		<div className={"snake" + (closing ? " is-closing" : "")} role="dialog" aria-modal="true" aria-label="Tech snake">
			<div className="wrap snake__top">
				<div>
					<span className="vl-label vl-eyebrow">{"// secret unlocked"}</span>
					<h2>Tech snake<span>.</span></h2>
				</div>
				<div className="snake__hud vl-label">
					<span>Score <b>{score}</b></span>
					<span>Best <b>{best}</b></span>
					<button className="snake__close" type="button" onClick={onClose} aria-label="Close game"><FiX /></button>
				</div>
			</div>
			<div className="snake__board" onPointerDown={(e) => { swipe.current = [e.clientX, e.clientY]; }} onPointerUp={onPointerUp}>
				<canvas ref={canvasRef} width={SIZE} height={SIZE} />
				{food && status !== "ready" && (
					<span className="snake__food" style={{ left: (food.cell[0] / N) * 100 + "%", top: (food.cell[1] / N) * 100 + "%" }} title={food.tech.name}>
						<FoodIcon aria-hidden="true" />
					</span>
				)}
				{status !== "playing" && (
					<div className="snake__overlay">
						{status === "ready" ? (
							<>
								<h3>Collect the stack<span>.</span></h3>
								<p>Eat the tech, don't hit the walls or yourself.</p>
							</>
						) : (
							<>
								<h3>{score} tech<span>.</span></h3>
								<p>{all ? "You collected the whole stack. Hire yourself." : `You collected ${score} of ${heroTech.length}. The rest is still out there.`}</p>
							</>
						)}
						<button className="vl-btn vl-btn--primary" type="button" onClick={start} autoFocus>{status === "ready" ? "Start" : "Play again"}</button>
						<span className="vl-label">Arrows / WASD / swipe · Esc to leave</span>
					</div>
				)}
			</div>
			<div className="snake__pad" aria-label="Controls">
				<button type="button" onClick={() => turn("up")} aria-label="Up">↑</button>
				<button type="button" onClick={() => turn("left")} aria-label="Left">←</button>
				<button type="button" onClick={() => turn("down")} aria-label="Down">↓</button>
				<button type="button" onClick={() => turn("right")} aria-label="Right">→</button>
			</div>
			<ul className="wrap snake__got" aria-label="Collected">
				{collected.map((name, i) => <li key={name + i} className="vl-tag">{name}</li>)}
			</ul>
		</div>
	);
}

export default SnakeGame;
