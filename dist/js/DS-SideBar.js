// ? PROFILE SETTINGS / LOGOUT

// * const sideBarLTog = document.querySelector('.sideBarLTog')
// const sideBarRTog = document.querySelector('.sideBarRTog')
// * const sideBarL = document.querySelector('.sideBarL')
// const sideBarR = document.querySelector('.sideBarR')
// * const closeSBL= document.querySelectorAll('.closeSBL')
// const closeSBR = document.querySelectorAll('.closeSBR')
// * sideBarLTog.addEventListener('click', () => sideBarL.classList.toggle('active') )
// sideBarRTog.addEventListener('click', () => sideBarR.classList.toggle('active'))
// * closeSBL.forEach(button => button.addEventListener('click', () => sideBarL.classList.remove('active')))
// closeSBR.forEach(button => button.addEventListener('click', () => sideBarR.classList.remove('active')))

/* Set the width of the side navigation to 250px */
function openNav(side) {
	document.getElementById(side).style.width = '350px'
}

/* Set the width of the side navigation to 0 */
function closeNav(side) {
	document.getElementById(side).style.width = '0'
}

/* Open when someone clicks on the span element */
function openNavFull() {
	document.getElementById('sideNav').style.width = '100%'
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavFull() {
	document.getElementById('sideNav').style.width = '0%'
}
