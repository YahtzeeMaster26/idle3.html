"use strict"
const constants = {
	bTech: [
		[
			{
				unlocked: () => true,
				name: "forever and ever",
				description: "time is 25% faster per level",
				effect: x => `+${percentify(x)}%`,
				cost: nD(1),
				max: nD(12),
			},
			{
				unlocked: () => true,
				name: "acceleration",
				description: "time waited boosts time speed, +0.05 exponent per level",
				effect: x => `x${format(x)}`,
				cost: nD(3),
				max: nD(4),
			},
			{
				unlocked: () => game.bTech[0][1].level.gte(2),
				name: "lost in thought",
				description: "the log of boredom points boosts time speed per level",
				effect: x => `x${format(x)}`,
				cost: nD(8),
				max: nD(6),
			},
			{
				unlocked: () => game.bTech[0][2].level.gte(6),
				name: "wait faster",
				description: "x2 waiting speed per level",
				effect: x => `x${format(x)}`,
				cost: nD(20),
				max: nD(4),
			},
			{
				unlocked: () => game.bTech[0][3].level.gte(2),
				name: "endgame",
				description: "you are at endgame",
				effect: x => `+${percentify(x)}%`,
				cost: nD(1e100),
				max: nD(10),
			},
			// low attention span: +2% boredom point gain per level per level. 10 levels, for.. +200%? total gain. cost: 60 (?) bp
			// sacrifice: you can reset this row for a time speed boost. 1 level. this boost is not kept on point gain. cost: 200 bp
			// ig ill get to low attention span before first beta
			// might take a day or 2, considering how much
		],
	],
}
