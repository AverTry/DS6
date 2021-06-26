// * The Tabs
const tabs2 = document.querySelector('.tabs2')
// * Toggle Open the Tabs responsive Menu
const responsiveTabsBtn = document.querySelector('#responsiveTabsBtn')
responsiveTabsBtn.addEventListener('click', () => {
	tabs2.classList.toggle('tabNavResponsive')
})

// * Change Tabs
const setActiveClass = event => {
	const tabsP = document.querySelectorAll('.Tab, .tab-pane')
	tabsP.forEach(tab => tab.classList.remove('active'))
	event.currentTarget.classList.add('active')
	document.querySelector(event.target.getAttribute('href')).classList.add('active')
}

// * Initialise Tab's Click Event
const tabbs = document.querySelectorAll('.Tab')
tabbs.forEach(tab => {
	tab.addEventListener('click', setActiveClass)
	// * Import Chart.js only when needed
	tab.firstElementChild.addEventListener('click', () => {
		if (tab.firstElementChild.getAttribute('href') === '#Charts') {
			import('../offline/js/chart.min.js').then(setTimeout(() => import('./DS-Charts.js'), 100))
		}
		tabs2.classList.remove('tabNavResponsive')
	})
})
