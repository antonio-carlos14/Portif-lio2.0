/* // Seleciona todos os botões das abas e todos os blocos de conteúdo correspondentes
const buttons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

//Função responsável por ativar uma aba específica com base no seu índice (posição).
 
function abrirAba(index) {
  // Evita erros caso o índice passado seja inválido (menor que 0 ou maior que o total de botões)
  if (index < 0 || index >= buttons.length) return

  // Remove a classe 'active' de todos os botões e conteúdos (esconde tudo antes de mostrar a nova aba)
  buttons.forEach(b => b.classList.remove('active'))
  contents.forEach(c => c.classList.remove('active'))

  // Adiciona a classe 'active' ao botão selecionado e move o foco do teclado para ele (acessibilidade)
  buttons[index].classList.add('active')
  buttons[index].focus()

  // Pega o ID do conteúdo através do atributo 'data-tab' do botão e exibe esse conteúdo
  const target = document.getElementById(buttons[index].dataset.tab)
  target.classList.add('active')
}

// Adiciona um evento de clique em cada botão para abrir a aba correspondente
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    abrirAba(index)
  })
})

// Permite navegar entre as abas usando o teclado (setas e teclas numéricas)
document.addEventListener('keydown', (e) => {
  // Descobre qual é o índice da aba que está ativa no momento
  const activeIndex = Array.from(buttons).findIndex(b => b.classList.contains('active'))

  if (e.key === 'ArrowRight') {
    e.preventDefault() // Evita a rolagem padrão da página
    // Vai para a próxima aba; o operador '%' faz voltar para a primeira (0) se passar da última
    abrirAba((activeIndex + 1) % buttons.length)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    // Vai para a aba anterior; somar 'buttons.length' evita números negativos ao voltar da primeira para a última
    abrirAba((activeIndex - 1 + buttons.length) % buttons.length)
  } else if (e.key >= '1' && e.key <= '5') {
    // Se apertar de 1 a 5, abre a aba correspondente (subtrai 1 porque o índice começa em 0)
    abrirAba(Number(e.key) - 1)
  }
})

// --- EFEITO VISUAL DE MORCEGOS ---

// Seleciona o elemento container onde os morcegos serão inseridos
const batsContainer = document.getElementById('bats')

// Cria 12 morcegos dinamicamente na tela
for (let i = 0; i < 12; i++) {
  const bat = document.createElement('div') // Cria uma nova <div>
  bat.classList.add('bat') // Adiciona a classe CSS que dá a aparência e animação do morcego
  
  // Define uma altura aleatória (entre 0% e 85% do topo) para não ficarem todos na mesma linha
  bat.style.top = `${Math.random() * 85}%`
  
  // Define uma velocidade aleatória para cada morcego (duração entre 8s e 18s)
  bat.style.animationDuration = `${8 + Math.random() * 10}s`
  
  // Define um atraso aleatório (entre 0s e 8s) para que eles não apareçam todos ao mesmo tempo
  bat.style.animationDelay = `${Math.random() * 8}s`
  
  // Adiciona o morcego configurado dentro do container no HTML
  batsContainer.appendChild(bat)
}
*/