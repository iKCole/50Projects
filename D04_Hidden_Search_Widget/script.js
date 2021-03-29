const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

// btn.addEventListener('click', (event) => {
//     if('focusin') {
//         event.target.style.background = 'red'
//     } else if('focusout') {
//         event.target.style.background = ''
//     }
// })
