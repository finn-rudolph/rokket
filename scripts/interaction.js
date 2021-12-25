import { Spacecraft } from "./spacecraft.js";

export const checkCollision = (o1, o2) => {
	const dx =
		o1.x < o2.x
			? o2.x - o2.width / 2 - (o1.x + o1.width / 2)
			: o1.x - o1.width / 2 - (o2.x + o2.width / 2);

	const dy =
		o1.y < o2.y
			? o2.y - o2.height / 2 - (o1.y + o1.height / 2)
			: o1.y - o1.height / 2 - (o2.y + o2.height / 2);

	if (dx < 0 && dy < 0) {
		const prevSpeedX = o1.speed.x;
		const prevSpeedY = o1.speed.y;

		o1.speed.x = o2.speed.x;
		o2.speed.x = prevSpeedX;

		o1.speed.y = o2.speed.y;
		o2.speed.y = prevSpeedY;

		if (o1 instanceof Spacecraft) o1.life -= 1;
	}
};