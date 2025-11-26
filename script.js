var cliques = 0;
var array = ['X', 'O'];
let win = false;
var mat = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function marcar(celula) {

    let pos = cliques % 2;             
    let index = celula.dataset.index;  

    if (mat[index] == 'X' || mat[index] == 'O') {
        return null; 
    }

    celula.innerHTML = array[pos];     
    mat[index] = array[pos];        

    cliques++;
}


function verificaMatriz() {

    // LINHAS
    for (let i = 0; i < 3; i++) {
        let a = mat[i * 3];
        let b = mat[i * 3 + 1];
        let c = mat[i * 3 + 2];

        if (a !== '' && a === b && b === c) {
            return a;
        }
    }

    // COLUNAS
    for (let j = 0; j < 3; j++) {
        let a = mat[j];
        let b = mat[j + 3];
        let c = mat[j + 6];

        if (a !== '' && a === b && b === c) {
            return a;
        }
    }

    // DIAGONAL PRINCIPAL
    if (
        mat[0] !== '' &&
        mat[0] === mat[4] &&
        mat[4] === mat[8]
    ) {
        return mat[0];
    }

    // DIAGONAL SECUNDÁRIA
    if (
        mat[2] !== '' &&
        mat[2] === mat[4] &&
        mat[4] === mat[6]
    ) {
        return mat[2];
    }

    return false;
}

function getWinner() {
    let resultado = verificaMatriz(); 

    if (resultado === 'X' || resultado === 'O') {
        document.getElementById('decisao').innerHTML = "GANHOU " + resultado;
    } 
    else if (cliques === 9) { 
        document.getElementById('decisao').innerHTML = "DEU VELHA";
    }
}

function reiniciar() {

    mat = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

    cliques = 0;
    win = false;

    for (let i = 1; i <= 9; i++) {
        document.getElementById("c" + i).innerHTML = "";
    }

    document.getElementById('decisao').innerHTML = "";

    const linha = document.getElementById("linha-vitoria");
    linha.style.opacity = "0";
    linha.style.width = "0px";

}
