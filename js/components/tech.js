"use strict"
const components = {}

components.tech = {
	props: ["index", "upgrade"],
	data() {
		return { f: format, data: constants.bTech[this.index[0]][this.index[1]], percentify }
	},
	template: `
	<div 
		class = "bTech hasTooltip" 
		:style = "\`background: linear-gradient(
			-45deg, 
			transparent,
			transparent calc(50% - 1px),
			var(--textColour) calc(50% - 1px),
			var(--textColour) calc(50% + 1px),
			transparent calc(50% + 1px)
		), linear-gradient(
			135deg, 
			var(--techFinished), 
			var(--techFinished) \${percentify(upgrade.level.div(data.max).plus(1))}%,
			var(--bgColour) \${percentify(upgrade.level.div(data.max).plus(1))}%
		);\`" 
		@click = "upgrade.upgrade(1)" 
		v-if = "data.unlocked()"
	>
		<span
			style = "display: inline-block; position: absolute; top: 2px; left: 2px;"
		>{{ f(upgrade.level, 0) }}</span>
		<span
			style = "display: inline-block; position: absolute; bottom: 2px; right: 2px;"
		>{{ f(data.max, 0) }}</span>
		<div class = "tooltip">
			<div class = "tooltipInner">
				<b>{{ data.name }}</b><br> 
				cost: {{ f(data.cost) }} bp<br>
				{{ data.description }}<br>
				currently: {{ data.effect(upgrade.effect()) }}
			</div>
		</div>
	</div>`
}
