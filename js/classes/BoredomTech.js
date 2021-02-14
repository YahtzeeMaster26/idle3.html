"use strict"
class BoredomTech {
	constructor(indexes, effect) {
		this.indexes = indexes
		this.level = nD(0)
		this._effect = effect
	}

	effect() {
		return this._effect(this.level)
	}

	upgrade(levels) {
		const data = this.data()

		const levelGain = game.bp.div(data.cost).floor().min(levels).min(data.max.minus(this.level))

		game.bp = game.bp.minus(levelGain.times(data.cost))
		this.level = this.level.plus(levelGain)
	}

	data() {
		return constants.bTech[this.indexes[0]][this.indexes[1]]
	}
}
