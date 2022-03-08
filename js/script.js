//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function getRandomColor() {
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualqueir función debe poder acceder.
    let numColores = colors.length
    let indiceRandom = Math.floor(Math.random() * numColores)

    return colors[indiceRandom]
}
