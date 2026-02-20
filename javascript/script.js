// constante de overlay:
const sobrecapa = document.querySelector(".overlay");

// Constante para almacenar todos los (div/calculadora) dentro de overlay
const all_div_calc = document.querySelectorAll(".calc");
const limpiacalc = () => {
    all_div_calc.forEach((card_calc) => {
        card_calc.style.display = "none";
    })
}

const limpiaTodo = () => {
    sobrecapa.style.display = "none";
    limpiacalc();
}
// constante para almacenar todos los botones para cerrar las Cards
const btn_volver = document.querySelectorAll(".volver");
btn_volver.forEach((X) => {
    X.addEventListener("click" , limpiaTodo);
})



//constantes de Div Distancia
const botonActivaDist = document.getElementById("btn-dist");
const cardMostrarDist = document.getElementById("distancia-mag");


//constantes de Div Presion
const botonActivaPress = document.getElementById("btn-pres");
const cardMostrarPress = document.getElementById("presion-mag");

//constantes de Div Temperatura
const botonActivaTemp = document.getElementById("btn-temp");
const cardMostrarTemp = document.getElementById("temp-mag");

//constantes de Div Torque
const botonActivaTorque = document.getElementById("btn-torq");
const cardMostrarTorque = document.getElementById("torque-mag");

//constantes de Div Velocidad
const botonActivaVeloc = document.getElementById("btn-veloc");
const cardMostrarVeloc = document.getElementById("velocidad-mag");

//constantes de Div Electricidad
const botonActivaElect = document.getElementById("btn-elect");
const cardMostrarElect = document.getElementById("electr-mag");


// Funciones para cada card:
botonActivaDist.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarDist.style.display = "flex";
})

botonActivaPress.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarPress.style.display = "flex";
})

botonActivaTemp.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarTemp.style.display = "flex";
})

botonActivaTorque.addEventListener("click",  () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarTorque.style.display = "flex";
})

botonActivaVeloc.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarVeloc.style.display = "flex";
})

botonActivaElect.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarElect.style.display = "flex";
})