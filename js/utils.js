"use strict"
const D = Decimal
const nD = x => new D(x)

D.prototype.mod = function(x) {
	return this.minus(this.div(x).floor().times(x))
}

function format(input, f = 2) {
	const x = nD(input)
	if (x.gte("eeee10")) return `10^^${format(x.slog(), 4)}`
	if (x.lt("1e4")) return x.toFixed(f)

	let exponent = x.log10().floor()
	let mantissa = x.div(D.pow(10, exponent))

	if (mantissa.gt(9.99)) {
		mantissa = nD(1)
		exponent = exponent.plus(1)
	}

	return `${exponent.gte(1e4) ? "" : mantissa.toFixed(2)}e${format(exponent, 0)}`
}

function percentify(input, f = 0) {
	return format(input.minus(1).times(100), f)
}

function formatTime(seconds) {
	const sec = seconds.mod(60)
	const min = seconds.div(60).floor().mod(60)
	const hr = seconds.div(3600).floor().mod(24)
	const day = seconds.div(3600 * 24).floor()

	if (day.gt(1e6)) return `${format(day, 0)}d`
	if (day.gt(0)) return `${format(day, 0)}d ${format(hr, 0)}h ${format(min, 0)}m ${format(sec, 1)}s`
	if (hr.gt(0)) return `${format(hr, 0)}h ${format(min, 0)}m ${format(sec, 1)}s`
	if (min.gt(0)) return `${format(min, 0)}m ${format(sec, 1)}s`
	return `${format(sec, 1)}s`
}
