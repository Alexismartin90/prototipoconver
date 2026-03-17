// constante de overlay:
const sobrecapa = document.querySelector(".overlay");
let valorNumero = 0;
let valorOption = "";

/* Const "all_div_calc" me devuelve un objeto "NodeList",
de los Div con class "calc, y const "limpiacalc es una function que oculta todos los Div 
con la clase "calc" del NodeList all_div_calc*/
const all_div_calc = document.querySelectorAll(".calc");
const limpiacalc = () => {
    all_div_calc.forEach((card_calc) => {
        card_calc.style.display = "none";
    })
}

// Function que primero al overlay le aplica display none y ejecuta la funcion limpiacalc
const limpiaTodo = () => {
    sobrecapa.style.display = "none";
    limpiacalc();
    const borrametadatainput = document.querySelectorAll(".AllInClear");
    borrametadatainput.forEach((x) => {
        x.value = "";
    })
    const borrametadataselect = document.querySelectorAll(".AllselectToIndex");
    borrametadataselect.forEach((s) => {
        s.selectedIndex = 0;
    })
}

/* const btn_volver me devuelve un objeto NodeList con todos los botones con la clase "volver",
y luego itero con un forEach a todos los items de ese NodeList para ejecutar en cada uno la
funcion addEventListner que al escuchar "click" me ejecuta la function limpiatodo */
const btn_volver = document.querySelectorAll(".volver");
    btn_volver.forEach((X) => {
    X.addEventListener("click" , limpiaTodo);
})

//constantes para almacenar los elementos con ID de Div:
// constante de Div Distancia
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


// Aca comienza las conversiones de unidades:
// Conversion de Distancia:

const distValueDom = document.getElementById("dist1"); //DOM value input number
const distOptDom = document.getElementById("dist2"); //DOM value Select Option
const converterDist = ()=>{
    valorNumero = parseFloat(distValueDom.value);
    valorOption = distOptDom.value;
    if(valorOption === "" || isNaN(valorNumero)){
        document.getElementById("kmout").innerText = "Ingrese datos";
        document.getElementById("millaout").innerText = "Ingrese datos";
        return;
    } else if(valorOption === "kilo"){
        document.getElementById("kmout").innerText = valorNumero;
        document.getElementById("millaout").innerText = (valorNumero / 1.609).toFixed(3);
    } else {
        document.getElementById("kmout").innerText = (valorNumero * 1.609).toFixed(3);
        document.getElementById("millaout").innerText = valorNumero;
    }
}
distValueDom.addEventListener("input", converterDist);
distOptDom.addEventListener("change", converterDist);

// Conversion de Presion:

//**************************************************************************** */
// Funciones para (Mostrar) cada card de magnitudes al apretar el Boton en la card:
botonActivaDist.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarDist.style.display = "flex";
    converterDist();
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