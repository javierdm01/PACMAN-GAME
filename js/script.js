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
    [1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1],
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
    let x=posicionPacma[1]
    let y=posicionPacma[0]
    switch (tecla) {
        case 'ArrowUp':
            console.log(game.children[y].children[x]);
            if (casillaPuntos[y-1][posicionPacma[1]]!=0 || (casillaPuntos[y][posicionPacma[1]]!=null)) {
                posicionPacma[0]--;
                moverPacman();
            }
            break;
        case 'ArrowDown':
            if (casillaPuntos[y][posicionPacma[1]]!=0 || (casillaPuntos[y][posicionPacma[1]]!=null)) {
                posicionPacma[0]++;
                moverPacman();
            }
            break;
        case 'ArrowLeft':
            if (casillaPuntos[x][posicionPacma[1]]!=0 || (casillaPuntos[x][posicionPacma[1]]!=null)) {
                posicionPacma[1]--;
                moverPacman();
            }
            break; 
        case 'ArrowRight':
            if (casillaPuntos[x][posicionPacma[1]]!=0 || (casillaPuntos[x][posicionPacma[1]]!=null)) {
                posicionPacma[1]++
                moverPacman();
            }
            break;

        default:
            break;
    }

}


const moverPacman=()=>{
    console.log(game.children[posicionPacma[0]]);
}

let posicionPacma=[];
document.addEventListener("keydown",comprobarColisiones)
document.addEventListener('DOMContentLoaded',cargarJuego)
let pacman=document.getElementById('pacman')