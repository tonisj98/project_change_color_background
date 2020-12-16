//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

//Seleccionamos el elemento del DOM con su selector CSS. Como solo hay un tag 'button', esto ya nos sirve
let button = document.querySelector('button')


// Qué queremos hacer cuando el usuario haga clic en dicho botón? Ejecutar la función 'cambiarColor'
button.addEventListener('click', cambiarColor)
button.addEventListener('click', cambiarTextoBoton)
button.addEventListener('click', ()=> {
    alert("Pedro!")
})
button.addEventListener('mouseover', cambiarColorFondoBoton)
button.addEventListener('mouseleave', restablecerColorFondoBoton)



/**
 * Esta función nos devuelve un string. Concretamente, un color aleratorio del array 'colors'
 */
function getRandomColor() {
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualqueir función debe poder acceder.
    let numColores = colors.length
    let indiceRandom = Math.floor(Math.random() * numColores)

    return colors[indiceRandom]
}

function cambiarColor() {
    // Recuperamos un color aleatorio de la función
    let color = getRandomColor()

    // Recuperamos el elemento 'body'. Tampoco estaria mal dejarlo fuera de la función: es un elemento muy general que seguramente muchas funciones lo van a utilizar; igual que la variable 'colors'. Lo pongo aquí dentro para mostrar que las dos opciones son válidas
    let body = document.querySelector('body')

    // El objeto 'body' tiene una propiedad de nombre 'style. A su vez 'style' tiene una propiedad de nombre 'backgroundColor'. En ella se establece el valor del color de fondo del elemento a través de su etiqueta 'style' (inline style)
    body.style.backgroundColor = color
}

function cambiarTextoBoton() {
    let button = document.querySelector('button')
    button.textContent = "Otro texto!"

}

function cambiarColorFondoBoton() {
    let button = document.querySelector('button')
    button.style.backgroundColor = 'red'
}

function restablecerColorFondoBoton() {
    let button = document.querySelector('button')
    button.style.backgroundColor = ''
}
