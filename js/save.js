"use strict"
const saveLoc = "idle3"

Decimal.prototype.toJSON = null

function isObject(item) {
  return (item && typeof item === "object");
}

function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
	}
	
	return target
}

function save() {
	localStorage.setItem(saveLoc, JSON.stringify(game))
}

function load() { // DO NOT CALL AFTER VUEIFICATION
	const saved = JSON.parse(localStorage.getItem(saveLoc))
	mergeDeep(game, saved)
}

function wipeSave() {
	localStorage.removeItem(saveLoc)
	location.reload()
}
