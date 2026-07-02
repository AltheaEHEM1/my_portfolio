import type React from "react";
import { useEffect, useRef } from "react";

interface MatrixColumn {
	x: number;
	y: number;
	speed: number;
	color: string;
	len: number;
	chars: string[];
}

export default function HeroBackgroundDark(): React.JSX.Element {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Set dimensions cleanly
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// TRACK TRACKERS
		let W = canvas.width;
		let H = canvas.height;

		let animationFrameId: number;

		// Clean resize handler without compound expressions
		const handleResize = () => {
			if (!canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			W = canvas.width;
			H = canvas.height;
		};
		window.addEventListener("resize", handleResize);

		const CHARS =
			"01アイウエオカキクケコ<>{}[]//=>/*#@$%&ABCDEF0123456789".split("");
		const FONT_SIZE = 13;

		const SPACING_MULTIPLIER = 4.5;
		const numCols = Math.floor(W / (FONT_SIZE * SPACING_MULTIPLIER)) + 1;
		// ------------------------------

		const matrixCols: MatrixColumn[] = [];
		const colors = ["#00d4aa", "#00ff87", "#38bdf8"];

		const getSyncedSpeed = (screenHeight: number) => {
			const randomDurationSeconds = 6 + Math.random() * 8;
			const totalFrames = randomDurationSeconds * 60;
			return screenHeight / totalFrames;
		};

		for (let i = 0; i < numCols; i++) {
			matrixCols.push({
				x: i * FONT_SIZE * SPACING_MULTIPLIER,
				y: Math.random() * -H * 2.5,
				speed: getSyncedSpeed(H),
				color: colors[Math.floor(Math.random() * colors.length)],
				len: 2 + Math.floor(Math.random() * 4),
				chars: Array.from(
					{ length: 24 },
					() => CHARS[Math.floor(Math.random() * CHARS.length)],
				),
			});
		}

		function render() {
			if (!ctx) return;

			ctx.clearRect(0, 0, W, H);
			ctx.font = `${FONT_SIZE}px 'Oxanium', monospace`;

			for (const col of matrixCols) {
				col.y += col.speed;
				if (col.y > H + 150) {
					col.y = Math.random() * -400;
					col.speed = getSyncedSpeed(H);
				}

				for (let i = 0; i < col.len; i++) {
					const fy = col.y - i * FONT_SIZE;
					if (fy < 0 || fy > H) continue;

					const calculatedAlpha = i === 0 ? 0.55 : 0.55 * (1 - i / col.len);
					ctx.globalAlpha = calculatedAlpha;
					ctx.fillStyle = i === 0 ? "#ffffff" : col.color;

					const ch =
						col.chars[Math.floor(fy / FONT_SIZE) % col.chars.length] || "0";
					ctx.fillText(ch, col.x, fy);
				}
			}

			ctx.globalAlpha = 1.0;
			animationFrameId = requestAnimationFrame(render);
		}

		render();

		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40 dark:opacity-50"
			/>
			<div
				className="fixed inset-0 z-0 pointer-events-none hidden dark:block"
				style={{
					backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0,212,170,0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0,255,135,0.04) 0%, transparent 50%)
          `,
				}}
			/>
		</>
	);
}
