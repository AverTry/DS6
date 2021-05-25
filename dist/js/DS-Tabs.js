// Tabs Line Slide
    function onTabClick(evt) {
      setLineStyle(evt.target)
    }

    function setLineStyle(tab) {
      let line = document.querySelector('.tabs2 > .line')
      let line2 = document.querySelector('.tabs2 > .line')
      line.style.left = tab.offsetLeft + "px"
      line.style.width = tab.offsetWidth + "px"
      line2.style.left = tab.offsetLeft + "px"
      line2.style.width = tab.offsetWidth + "px"
    }

    window.onload = function() {
      const tabs = document.querySelectorAll('.tabs2 > .nav > .Tab')
      tabs.forEach((tab, index) => {
        tab.onclick = onTabClick

        if (index == 0) setLineStyle(tab)
      })
    }

// Change Tabs
    const tabs = document.querySelectorAll('.Tab, .tab-pane')

    const setActiveClass = (event) => {
      tabs.forEach((tab) => tab.classList.remove('active'))
      event.currentTarget.classList.add('active')
      document.querySelector(event.target.getAttribute("href")).classList.add('active')
    }
    tabs.forEach((tab) => {
      if (tab.matches('.Tab')) tab.addEventListener('click', setActiveClass)
    })


// Theme Switcher - Temp placement...
    document.querySelector('.fa-arrows-h').addEventListener('click', () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } 
    })
  // localStorage.removeItem('theme')
