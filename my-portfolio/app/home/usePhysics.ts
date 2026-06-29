import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

interface BodyPosition {
	currentX: number;
	currentY: number;
	angle: number;
}

// Allow the ref to hold a null value initially
export const usePhysics = (
	containerRef: React.RefObject<HTMLDivElement | null>,
	itemCount: number,
) => {
	const [positions, setPositions] = useState<Record<number, BodyPosition>>({});
	const engineRef = useRef(Matter.Engine.create());

	useEffect(() => {
		// Only proceed if the element is actually mounted
		if (!containerRef.current) return;

		const engine = engineRef.current;
		const { Bodies, Composite, Mouse, MouseConstraint, Runner } = Matter;

		const ground = Bodies.rectangle(400, 610, 800, 60, { isStatic: true });
		const wallLeft = Bodies.rectangle(-30, 300, 60, 600, { isStatic: true });
		const wallRight = Bodies.rectangle(830, 300, 60, 600, { isStatic: true });

		const bodies = Array.from({ length: itemCount }).map((_, i) =>
			Bodies.circle(100 + i * 30, 50, 40, { restitution: 0.7 }),
		);

		Composite.add(engine.world, [ground, wallLeft, wallRight, ...bodies]);

		const mouse = Mouse.create(containerRef.current);
		const mConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: { stiffness: 0.2, render: { visible: false } },
		});
		Composite.add(engine.world, mConstraint);

		Matter.Events.on(engine, "afterUpdate", () => {
			const newPositions: Record<number, BodyPosition> = {};
			bodies.forEach((b, i) => {
				newPositions[i] = {
					currentX: b.position.x,
					currentY: b.position.y,
					angle: b.angle,
				};
			});
			setPositions(newPositions);
		});

		const runner = Runner.create();
		Runner.run(runner, engine);

		return () => {
			Matter.Engine.clear(engine);
			Runner.stop(runner);
		};
	}, [containerRef, itemCount]);

	return positions;
};
