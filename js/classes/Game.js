"use strict"
class Game {
	constructor() {
		this.points = nD(0)

		this.timeWaited = nD(0)

		this.speed = nD(1) // cache

		// boredom points
		this.bp = nD(0)
		this.bTech = [
			[
				new BoredomTech([0, 0], x => x.times(0.25).plus(1)),
				new BoredomTech([0, 1], x => game.timeWaited.max(1).pow(x.times(0.05)).minus(1).div(5).plus(1)),
				new BoredomTech([0, 2], x => game.bp.plus(1).log(10).div(4).plus(1).pow(x)),
				new BoredomTech([0, 3], x => D.pow(2, x)),
			]
		]
	}

	pointReq() {
		return nD(3600 * 24).times("1e1000")
	}

	bps() {
		return nD(1 / 3600).times(game.speed)
	}

	timeSpeed() {
		let speed = nD(1)

		speed = speed.times(game.bTech[0][0].effect())
		speed = speed.times(game.bTech[0][1].effect())
		speed = speed.times(game.bTech[0][2].effect())

		return speed
	}

	waitingSpeed() {
		let speed = nD(1)

		speed = speed.times(game.bTech[0][3].effect())

		return speed
	}
}
