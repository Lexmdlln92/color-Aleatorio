// Seleccionar elementos del DOM (index) que son los que van cambiando al hacer click.
const boton = document.querySelector('#boton-color');
const color = document.querySelector('#color');

// Función para generar un degradado aleatorio
function generarDegradadoAleatorio() {
    const color1 = generarColorAleatorio();
    const color2 = generarColorAleatorio();
    const color3 = generarColorAleatorio();
    const degradado = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
    return degradado;
}

// Función para generar un color aleatorio
function generarColorAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

// Evento click en el botón
boton.addEventListener('click', function() {
    const degradadoAleatorio = generarDegradadoAleatorio();
    color.textContent = `background: ${degradadoAleatorio};`;
    document.body.style.background = degradadoAleatorio;
});
