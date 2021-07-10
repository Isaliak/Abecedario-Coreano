const letras = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,ab,cd,fg,hi,jk'
const abecedario = letras.split(',')//arreglo de letras 
const abecedariotexto = document.getElementById('abecedario')
const respuesta = document.getElementById('respuesta')
const sumarpuntos = document.getElementById('sumar-puntos')
const restarpuntos = document.getElementById('restar-puntos')

// let vowels = [
//     ['ㅏ','a'],
//     ['ㅓ', 'o+'],
//     ['ㅗ', 'o'],
//     ['ㅜ', 'u'],
//     ['ㅡ', 'u-'],
//     ['ㅣ', 'i']
// ]

//funcion para obtener letras aleatorias del abecedario
function randomAbecedario() {
    if (abecedario === '') {
        return null
    }
    let aleatorio = Math.floor(Math.random() * abecedario.length);
    return abecedario[aleatorio]
}


abecedariotexto.textContent = randomAbecedario()
console.log(
    abecedariotexto.textContent

)
// console.log(letra)

//detectar cuando una tecla es precionada
let mapeoteclas = []
respuesta.addEventListener('keydown', (event) => {
    mapeoteclas.push(event.key)
    let teclapresionada = mapeoteclas.join('').toString().trim()
    console.log(teclapresionada)
    respuesta.value = ''
    let letra = abecedariotexto.textContent.toString().trim()
    console.log(teclapresionada)
    if (teclapresionada === letra) {
        console.log('ganaste un punto')
        respuesta.value = ''
        abecedariotexto.textContent = randomAbecedario()
        sumarpuntos.textContent = parseInt(sumarpuntos.textContent) + 1
        mapeoteclas = []
    }
    else if (teclapresionada === 'Backspace' || teclapresionada === 'Delete') {
        return null
    }
    else if (teclapresionada !== letra) {
        console.log('perediste un punto')
        respuesta.value = ''
        abecedariotexto.textContent = randomAbecedario()
        restarpuntos.textContent = parseInt(restarpuntos.textContent) + 1
        mapeoteclas = []
    }

});

