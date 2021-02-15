"use strict"
let game, app, vm

function gameLoop() {
	const diff = 0.05

	game.speed = game.timeSpeed()

	// points/time
	game.timeWaited = game.timeWaited.plus(game.speed.times(diff).times(game.waitingSpeed()))

	/* will probably have a button instead
	if (game.timeWaited.gte(game.pointReq())) {
		const points = game.timeWaited.div(game.pointReq()).floor()

		game.timeWaited = game.timeWaited.minus(game.pointReq().times(points))
		game.points = game.points.plus(points)
	}
	*/

	game.bp = game.bp.plus(game.bps().times(diff))
}

function init() {
	game = new Game()
	load()

	app = Vue.createApp({
		data: () => ({ 
			game, 

			f: format, 
			formatTime,
			percentify,  
			
			constants,
		}),
	})

	for (const i in components) app.component(i, components[i])

	vm = app.mount("#app")
	game = vm.game

	setInterval(gameLoop, 50)
	setInterval(save, 5000)
}

init()
