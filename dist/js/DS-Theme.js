// * Theme Switcher =================================================================================================================
document.querySelector('.bulb').addEventListener('click', () => {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.remove('dark')
		localStorage.theme = 'light'
	} else {
		document.documentElement.classList.add('dark')
		localStorage.theme = 'dark'
	}
})
// localStorage.removeItem('theme') // to clear local storage

// * Toggle Borderless Form Elements and Fieldset's =========================
let bool = false
const borderLess = () => {
	bool = !bool
	const varStyle = document.documentElement.style
	const elementOL = document.querySelectorAll('.outline')
	const elementFS = document.querySelectorAll('.outlineFieldSet')
	const elementsX = document.querySelectorAll('#searchBox, #pageInfoBox')
	if (bool) {
		varStyle.setProperty('--color-light', '#f3f4f6')
		varStyle.setProperty('--color-dark', '#1f2937')

		elementOL.forEach(element => element.classList.remove('Bordered'))
		elementOL.forEach(element => element.classList.add('borderLess'))
		elementFS.forEach(element => element.classList.add('borderLess'))
		elementsX.forEach(element => element.classList.add('borderlessInputs'))
	} else {
		varStyle.setProperty('--color-light', '#ffffff')
		varStyle.setProperty('--color-dark', '#111827')

		elementOL.forEach(element => element.classList.add('Bordered'))
		elementOL.forEach(element => element.classList.remove('borderLess'))
		elementFS.forEach(element => element.classList.remove('borderLess'))
		elementsX.forEach(element => element.classList.remove('borderlessInputs'))
	}
}
document.querySelector('.borderIt').addEventListener('click', () => borderLess())
//  ?  bg-gray-300 = #f3f4f6
//  ?  bg-gray-800 = #374151
//  ?  bg-gray-900 = #111827

// * Tabs underLine Slide Theme ============================================================
const tabs = document.querySelectorAll('.tabs2 > .nav > .Tab')
const line = document.querySelector('.tabs2 > .line')
const line2 = document.querySelector('.tabs2 > .line2')
const onTabClick = evt => setLineStyleC(evt.target)
const onTabHover = evt => setLineStyleH(evt.target)
const onTabLeave = evt => resetLineStyleH(evt.target)
const tabLineInit = () => {
	tabs.forEach((tab, index) => {
		tab.onclick = onTabClick
		tab.onmouseenter = onTabHover
		tab.onmouseleave = onTabLeave
		if (index == 0) setLineStyleC(tab)
	})
}
tabLineInit()

function setLineStyleC(tab) {
	line.style.left = tab.offsetLeft + 'px'
	line.style.width = tab.offsetWidth + 'px'
}

function setLineStyleH(tab) {
	line2.style.left = tab.offsetLeft + 'px'
	line2.style.width = tab.offsetWidth + 'px'
}

function resetLineStyleH() {
	line2.style.left = 0
	line2.style.width = 0
}

// * re-Set Tab underline on screen change
window.addEventListener('resize', () => {
	tabs.forEach(tab => {
		if (tab.matches('.active')) {
			setLineStyleC(tab)
			resetLineStyleH()
		}
	})
})

// * End Tab Underline Slide Theme ====================================================
