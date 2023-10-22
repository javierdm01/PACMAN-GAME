let score=document.getElementById('score')
let game=document.getElementById('game')

let casillaPuntos=[
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,1,1,1,1,1,1,1,0,2,1,1,1,1,1,1,1,0,0,1,1,1],
    [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0],
    [1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]


const cargarJuego=(e)=>{
    for(let i=0;i<casillaPuntos.length;i++){
        let rows=document.createElement('DIV')
        rows.id='rows'
        rows.classList.toggle('rows__game')
        game.appendChild(rows)
        for(let j=0;j<26;j++){
            let punto=document.createElement("a");
            if(casillaPuntos[i][j]==1){
                punto.textContent='.'
                
            }else{
                punto.textContent=' '
            }
            punto.classList.toggle('punto')
            if (casillaPuntos[i][j]==2) {
                let createPacman=document.createElement("a")
                createPacman.id="pacman"
                createPacman.classList.toggle('pacman')
                console.log('hola');
                rows.appendChild(createPacman)
                posicionPacma=[i,j];
            }
            rows.appendChild(punto)
            
        }
    }
}

const comprobarColisiones=(e)=>{
    let tecla=e.key;
    console.log(posicionPacma[0]);
    let p=posicionPacma[0]-1
    if (tecla==='ArrowUp') {
        if (casillaPuntos[p][posicionPacma[1]]!=0) {
            casillaPuntos[posicionPacma[0]][posicionPacma[1]]=0
            posicionPacma[0]--;
            casillaPuntos[posicionPacma[0]][posicionPacma[1]]=2
        }
    }
    switch (tecla) {
        case 'ArrowUp':
            if (casillaPuntos[p][posicionPacma[1]]!=0 || (casillaPuntos[p][posicionPacma[1]]!=null)) {
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=0
                posicionPacma[0]--;
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=2
            }
            break;
        case 'ArrowDown':
            if (casillaPuntos[p][posicionPacma[1]]!=0 || (casillaPuntos[p][posicionPacma[1]]!=null)) {
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=0
                posicionPacma[0]--;
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=2
                
            }
            break;
        case 'ArrowLeft':
            if (casillaPuntos[p][posicionPacma[1]]!=0 || (casillaPuntos[p][posicionPacma[1]]!=null)) {
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=0
                posicionPacma[0]--;
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=2
            }
            break; 
        case 'ArrowRight':
            if (casillaPuntos[p][posicionPacma[1]]!=0 || (casillaPuntos[p][posicionPacma[1]]!=null)) {
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=0
                posicionPacma[0]--;
                casillaPuntos[posicionPacma[0]][posicionPacma[1]]=2
            }
            break;

        default:
            break;
    }
}

let posicionPacma=[];
document.addEventListener("keydown",comprobarColisiones)
document.addEventListener('DOMContentLoaded',cargarJuego)
let pacman=document.getElementById('pacman')