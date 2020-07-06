const voirPlus = document.querySelector('#voir-plus')
const para = document.querySelector('#para-voir-plus')
const i_voirplus = document.querySelector('#i-voir-plus')

voirPlus.addEventListener('click', () => {
    para.classList.toggle('visible')
    voirPlus.classList.toggle('color')
})