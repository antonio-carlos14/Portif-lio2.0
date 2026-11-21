const buttons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

function abrirAba(index) {
  if (index < 0 || index >= buttons.length) return

  buttons.forEach(b => b.classList.remove('active'))
  contents.forEach(c => c.classList.remove('active'))

  buttons[index].classList.add('active')
  buttons[index].focus()

  const target = document.getElementById(buttons[index].dataset.tab)
  target.classList.add('active')
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    abrirAba(index)
  })
})

document.addEventListener('keydown', (e) => {
  const activeIndex = Array.from(buttons).findIndex(b => b.classList.contains('active'))

  if (e.key === 'ArrowRight') {
    e.preventDefault()
    abrirAba((activeIndex + 1) % buttons.length)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    abrirAba((activeIndex - 1 + buttons.length) % buttons.length)
  } else if (e.key >= '1' && e.key <= '5') {
    abrirAba(Number(e.key) - 1)
  }
})

const batsContainer = document.getElementById('bats')

for (let i = 0; i < 12; i++) {
  const bat = document.createElement('div')
  bat.classList.add('bat')
  bat.style.top = `${Math.random() * 85}%`
  bat.style.animationDuration = `${8 + Math.random() * 10}s`
  bat.style.animationDelay = `${Math.random() * 8}s`
  batsContainer.appendChild(bat)
}