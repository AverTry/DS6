const finishedLoadingDom = new Promise((resolve, reject) => {
	const includeHTML = () => {
		const tag = document.getElementsByTagName('include')
		for (let i = 0; i < tag.length; i++) {
			const node = tag[i]
			const file = node.getAttribute('DS-Template')
			if (file) {
				fetch(file)
					.then(resp => resp.text())
					.then(data => {
						node.innerHTML = data
					})
					.then(() => {
						node.removeAttribute('DS-Template')
						includeHTML()
					})
					.catch(error => reject(error))
				return
			}
		}
		resolve()
	}
	includeHTML()
})

finishedLoadingDom
	.then(() => {
		;[
			'./dist/js/DS-SideBar.js',
			'./dist/js/DS-Tabs.js',
			'./dist/js/DS-Paginate.js',
			'./dist/js/DS-Populate.js',
			'./dist/js/DS-Theme.js',
			// './dist/js/DS-Charts.js',
			// './dist/js/T-DS-Settings.js',
		].forEach(src => {
			const script = document.createElement('script')
			script.src = src
			document.head.appendChild(script)
		})
	})
	.catch(error => console.error('includeHTML Error : ', error))
