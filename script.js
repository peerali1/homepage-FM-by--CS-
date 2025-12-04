const manueBtn = document.querySelector('.manue')
const manueClosBtn = document.querySelector('.manueClos')

const manueOpende = document.querySelector('ul')


manueBtn.addEventListener('click', () => {
    manueOpende.classList.toggle('manueOpende')
    manueBtn.classList.add('closeManue')
    manueOpende.style.cssText = `
    transition: right 1.1s ease-in-out;
    top: 30px;
    right: 30px;
    `})

manueClosBtn.addEventListener('click', () => {
    manueOpende.classList.toggle('manueOpende')
    manueBtn.classList.remove('closeManue')
})