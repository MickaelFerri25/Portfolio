const block_bg = document.querySelector('#nav-mobil')
const i_bg = document.querySelector('#icone-bg')
const i_croix = document.querySelector('#icone-croix')

i_bg.addEventListener('click', () => {
    block_bg.style.transform = "translateX(0)"
})

i_croix.addEventListener('click', () => {
    block_bg.style.transform = "translateX(-360px)"
})

block_bg.addEventListener('mouseleave', () => {
    block_bg.style.transform = "translateX(-360px)"
})

window.addEventListener('resize', () => {
    block_bg.style.transform = "translateX(-360px)"
})