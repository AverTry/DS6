// Tabs Line Slide
const tabs = document.querySelectorAll('.tabs2 > .nav > .Tab')
const line = document.querySelector('.tabs2 > .line')
const line2 = document.querySelector('.tabs2 > .line2')
const onTabClick = (evt) => setLineStyleC(evt.target)
const onTabHover = (evt) => setLineStyleH(evt.target)
const onTabLeave = (evt) => resetLineStyleH(evt.target)
const tabLineInit = () => {
  tabs.forEach((tab, index) => {
    tab.onclick = onTabClick
    tab.onmouseenter = onTabHover
    tab.onmouseleave = onTabLeave
    if (index == 0) setLineStyleC(tab)
  })
};tabLineInit()

function setLineStyleC(tab) {
  line.style.left = tab.offsetLeft + "px"
  line.style.width = tab.offsetWidth + "px"
}

function setLineStyleH(tab) {
  line2.style.left = tab.offsetLeft + "px"
  line2.style.width = tab.offsetWidth + "px"
  line2.style.opacity = 1
}

function resetLineStyleH() {
  line2.style.left = -1 + "px"
  line2.style.width = 0 + "px"
  line2.style.opacity = 0
}

// Change Tabs
const tabsP = document.querySelectorAll('.Tab, .tab-pane')
const setActiveClass = (event) => {
  tabsP.forEach((tab) => tab.classList.remove('active'))
  event.currentTarget.classList.add('active')
  document.querySelector(event.target.getAttribute("href")).classList.add('active')
}

tabsP.forEach((tab) => {
  if (tab.matches('.Tab')) tab.addEventListener('click', setActiveClass)
})
