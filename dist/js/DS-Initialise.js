
const finishedLoadingDom = new Promise((resolve, reject) => {
  const includeHTML = () => {
    const tag = document.getElementsByTagName("include") 
    for (let i = 0; i < tag.length; i++) { 
      const node = tag[i]
      const file = node.getAttribute("DS-Template") 
      if (file) {
        fetch(file).then(resp => resp.text())
          .then(data => {
            node.innerHTML = data
          })
          .then(() => {
            node.removeAttribute("DS-Template")
            includeHTML()
          })
          .catch(error => reject(error))
        return
      }
    }
    resolve()
  };includeHTML()
})

finishedLoadingDom.then(() => {
  [ 
    './js/DS-SideBar.js',
    './js/DS-Tabs.js',
    './js/DS-Paginate.js',
    './js/DS-Populate.js',
    './js/DS-Charts.js',
    './js/DS-Theme.js',
    // './js/T-DS-Settings.js',
  ].forEach((src) => {
    const script = document.createElement('script')
    script.src = src
    document.head.appendChild(script)
  })
}).catch(error => console.error('includeHTML Error : ', error))