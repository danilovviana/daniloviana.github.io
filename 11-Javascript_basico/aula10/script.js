/*

//operadores logicos

*/

let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digete a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
    document.write('Ok, Você passou de ano')
} else if (media < mediaMinima) {
    document.write('Ops, Você não passou de ano!')
} 

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Nossa, você foi muito bem! Continue assim.')
} else if (media >= mediaMinima && media === 9) {
    document.write('Você mandou bem! Vamos tentar chegar na média 10?')
}

