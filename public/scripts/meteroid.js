// configuration

const meteroidsAmount = 8;
const imagesAmount = 12;
const maxSpeed = { x: -300, y: 30 };
const minSpeed = { x: -50, y: -30 };

class Meteroid extends PIXI.Sprite {
	constructor(scale) {
		super(
			PIXI.Texture.from(
				`/public/graphics/meteroids/meteroid${Math.floor(
					Math.random() * imagesAmount
				)}.svg`,
				{ resourceOptions: { scale: scale } }
			)
		);
		this.x = window.innerWidth + this.width;
		this.y = Math.random() * window.innerHeight;

		this.speed = {
			x: Math.random() * (maxSpeed.x - minSpeed.x) + minSpeed.x,
			y: Math.random() * (maxSpeed.y - minSpeed.y) + minSpeed.y
		};
		this.move = (delta) => {
			this.x += this.speed.x * delta;
			this.y += this.speed.y * delta;
		};
		this.resetPosition = () => {
			if (
				this.x <= -this.width ||
				this.y <= -this.height ||
				this.y >= window.innerHeight
			) {
				this.x = window.innerWidth + this.width;
				this.y = Math.random() * window.innerHeight;
			}
		};
	}
}

export const meteroids = new Array(meteroidsAmount)
	.fill(0)
	.map(() => new Meteroid(window.innerHeight / 10000));