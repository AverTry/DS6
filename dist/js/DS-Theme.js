
// Theme Switcher 
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


//  Toggle Borderless Form Elements and Fieldset's
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

      elementOL.forEach((element) => element.classList.remove('Bordered'))
      elementOL.forEach((element) => element.classList.add('borderLess'))
      elementFS.forEach((element) => element.classList.add('borderLess'))
      elementsX.forEach((element) => element.classList.add('borderlessInputs'))
    } else {
      varStyle.setProperty('--color-light', '#ffffff')
      varStyle.setProperty('--color-dark', '#111827')

      elementOL.forEach((element) => element.classList.add('Bordered'))
      elementOL.forEach((element) => element.classList.remove('borderLess'))
      elementFS.forEach((element) => element.classList.remove('borderLess'))
      elementsX.forEach((element) => element.classList.remove('borderlessInputs'))
    }
  }; 
  document.querySelector('.borderIt').addEventListener('click', () => borderLess())
  //   bg-gray-300 = #f3f4f6 
  //   bg-gray-800 = #374151 
  //   bg-gray-900 = #111827 
