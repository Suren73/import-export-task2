import './index.css'
const cookieConsent = document.querySelector('.cookie-consent')

if (localStorage.getItem('button') === 'true') {
  cookieConsent.classList.add('hide')
} else {
  const button = document.querySelector('.cookie-consent__button')
  button.addEventListener('click', () => {
    cookieConsent.classList.add('hide')
    localStorage.setItem('button', true)
  })
}
