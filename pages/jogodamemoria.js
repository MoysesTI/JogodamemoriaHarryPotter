const gridContainer = document.querySelector('.container-JogodaMemoria')


const personagems = [
    'grid_0 (1)',
    'grid_0 (2)',
    'grid_0 (3)',
    'grid_0 (4)',
    'grid_0 (5)',
    'grid_0 (6)',
    'grid_0 (7)',
    'grid_0 (8)',
    'grid_0 (9)',
    'grid_0 (10)',
    'grid_0 (11)',
    'grid_0 (12)',
]



let cardOne = ''
let cardTwo = ''

const createElemtCard = (tag, nomeclass) =>{
    const elemet = document.createElement(tag)
    elemet.className = nomeclass;
    return elemet
}
const fimDogame = ()=>{
    const cartasacertadas = document.querySelectorAll('.acerteicard')
    if(cartasacertadas.length == 24){
        clearInterval(this.loop)
        alert('Você Finalizou o Jogo!')

    }
}
const checkCards = () =>{
    const primeiropersonagem = cardOne.getAttribute('data-personagem')
    const segundopersonagem = cardTwo.getAttribute('data-personagem')
    if(primeiropersonagem === segundopersonagem){
        cardOne.firstChild.classList.add('acerteicard');
        cardTwo.firstChild.classList.add('acerteicard');
        cardOne = ''
        cardTwo = ''
        fimDogame()
    }else{
        setTimeout(() => {
        cardOne.classList.remove('ver-card');
        cardTwo.classList.remove('ver-card');
        cardOne = ''
        cardTwo = ''
        }, 500);
    }
}
const vercard = (e) =>{
    if(e.target.className.includes('ver-card')){
        return
    }
    if(cardOne === ''){
        e.target.parentNode.classList.add('ver-card')
        cardOne = e.target.parentNode
    }else if(cardTwo === ''){
        e.target.parentNode.classList.add('ver-card')
        cardTwo = e.target.parentNode
        checkCards()
    }
}
const creactCard = (personagem) =>{
    
    const jogador = createElemtCard('div','container-Jogada')
    const face = createElemtCard('div', 'containerimg face')
    const back = createElemtCard('div', 'containerimg back')
    face.style.backgroundImage = `url('../img/${personagem}.png')`
    jogador.appendChild(face)
    jogador.appendChild(back)
    jogador.addEventListener('click', vercard);
    jogador.setAttribute('data-personagem', personagem)
    return jogador;
}


const load = () =>{
const duplicarcard = [...personagems, ...personagems]
const radomcards = duplicarcard.sort(()=> Math.random() - 0.5)
    radomcards.forEach((personagem)=>{
        const card = creactCard(personagem)
        gridContainer.appendChild(card)
    })
}
const playeratual = document.querySelector('.playerAtual')
const tempo = document.querySelector('.tempo')
const startTempoGame = () =>{
    this.loop = setInterval(()=>{
        const tempoDejogo = Number(tempo.innerHTML)
        tempo.innerHTML = tempoDejogo + 1
    }, 1000)
}
window.onload = ()=>{
    load()
    startTempoGame()
    playeratual.innerHTML = localStorage.getItem('player')
}

