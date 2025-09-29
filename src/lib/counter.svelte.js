export class Counter {
	#count
	#first = true

	constructor(initial) {
		this.#count = $state(initial)
	}

	get count() {
		if (this.#first) {
			const savedCount = localStorage.getItem('count')
			if (savedCount) this.#count = parseInt(savedCount)
			this.#first = false
		}
		return this.#count
	}

	set count(v) {
		localStorage.setItem('count', v.toString())
		this.#count = v
	}
}

export const counter = new Counter(10)
