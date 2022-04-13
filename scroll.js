class Scroll {
	static items = []

	static add(selector, className) {
		this.items = [
			...this.items,
			{
				el: document.querySelector(selector),
				className: className,
				isCalled: false,
			},
		]

		return this
	}

	static controll() {
		this.items.forEach((item) => {
			let itemY = item.el.offsetTop

			if (!item.isCalled) {
				if (window.innerHeight + window.scrollY > item.el.offsetTop) {
					if (typeof item.className === 'function') {
						item.className()

						item.isCalled = true
					} else {
						item.el.classList.add(item.className)

						item.isCalled = true
					}
				}
			}
		})
	}

	static run() {
		this.controll()

		window.addEventListener('scroll', () => this.controll())
	}
}
