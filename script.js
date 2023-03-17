const jogador = document.querySelector('.playerOne')
const buttonStart = document.querySelector('button')
const form = document.querySelector('form')

const validateInput = (e) =>{
    if(e.target.value.length > 2){
        buttonStart.removeAttribute('disabled');
    }else{
        buttonStart.setAttribute('disabled', '');
    }
}


const formPlayer = (e) =>{
    e.preventDefault()
    localStorage.setItem('player', jogador.value)
    window.location.href = "./pages/Harrypottergamer.html"
}

jogador.addEventListener('input', validateInput);
form.addEventListener('submit', formPlayer);
