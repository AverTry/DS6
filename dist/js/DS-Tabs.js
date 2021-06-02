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
}

function resetLineStyleH() {
  line2.style.left = 0
  line2.style.width = 0
}

// re-Set Tab underline on screen change
window.addEventListener("resize", () => {
  tabs.forEach((tab) => {
    if (tab.matches('.active')) setLineStyleC(tab)    
  })  
})

// Change Tabs
const setActiveClass = (event) => {
  const tabsP = document.querySelectorAll('.Tab, .tab-pane')
  tabsP.forEach((tab) => tab.classList.remove('active'))
  event.currentTarget.classList.add('active')
  document.querySelector(event.target.getAttribute("href")).classList.add('active')
}

// Initialise Tab's Click Event
tabs.forEach((tab) => tab.addEventListener('click', setActiveClass))