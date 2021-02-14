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
				name: "wait faster",
				description: "increase waiting speed by 5% per level additively, per level multiplicatively",
				effect: x => `x${format(x)}`,
				cost: nD(6),
				max: nD(8),
			},
		],
	],
}
