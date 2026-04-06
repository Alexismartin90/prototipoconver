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
    const kmfuera = document.querySelector(".KiloDesaparece");
    const millafuera = document.querySelector(".millaDesaparece");
    kmfuera.classList.remove("oculto_unidad_usada");
    millafuera.classList.remove("oculto_unidad_usada");
    if (valorOption === "" || isNaN(valorNumero)){
        document.getElementById("kmout").innerText = "Ingrese datos";
        document.getElementById("millaout").innerText = "Ingrese datos";
        return;
    } else if(valorOption === "kilo"){
        kmfuera.classList.add("oculto_unidad_usada");
        document.getElementById("kmout").innerText = (valorNumero).toFixed(3);
        document.getElementById("millaout").innerText = (valorNumero / 1.60934).toFixed(3);
    } else {
        millafuera.classList.add("oculto_unidad_usada");
        document.getElementById("kmout").innerText = (valorNumero * 1.60934).toFixed(3);
        document.getElementById("millaout").innerText = (valorNumero).toFixed(3);
    }
}
distValueDom.addEventListener("input" , converterDist);
distOptDom.addEventListener("change" , converterDist);

// Conversion de Presion:

const pressValueDom = document.getElementById("pres1"); //DOM value input number
const pressOptDom = document.getElementById("pres2"); //DOM value Select Option
const converterpress = ()=>{
    valorNumero = parseFloat(pressValueDom.value);
    valorOption = pressOptDom.value;
    const psifuera = document.querySelector(".psiDesaparece");
    const barfuera = document.querySelector(".barDesaparece");
    const atmfuera = document.querySelector(".atmDesaparece");
    const inhgfuera = document.querySelector(".inhgDesaparece");
    const hpafuera = document.querySelector(".hpaDesaparece");
    psifuera.classList.remove("oculto_unidad_usada");
    barfuera.classList.remove("oculto_unidad_usada");
    atmfuera.classList.remove("oculto_unidad_usada");
    inhgfuera.classList.remove("oculto_unidad_usada");
    hpafuera.classList.remove("oculto_unidad_usada");
    if (valorOption === "" || isNaN(valorNumero)){
        document.getElementById("psiOut").innerText = "Ingrese datos";
        document.getElementById("barOut").innerText = "Ingrese datos";
        document.getElementById("atmOut").innerText = "Ingrese datos";
        document.getElementById("inhgOut").innerText = "Ingrese datos";
        document.getElementById("hpaOut").innerText = "Ingrese datos";
        return;
    } else if (valorOption === "psi") {
        psifuera.classList.add("oculto_unidad_usada");
        document.getElementById("barOut").innerText = (valorNumero / 14.5038).toFixed(3);
        document.getElementById("atmOut").innerText = (valorNumero / 14.696).toFixed(3);
        document.getElementById("inhgOut").innerText = (valorNumero * 2.03602).toFixed(3);
        document.getElementById("hpaOut").innerText = (valorNumero * 68.9476).toFixed(3);
    } else if (valorOption === "bar") {
        barfuera.classList.add("oculto_unidad_usada");
        document.getElementById("psiOut").innerText = (valorNumero * 14.5038).toFixed(3);
        document.getElementById("atmOut").innerText = (valorNumero / 1.01325).toFixed(3);
        document.getElementById("inhgOut").innerText = (valorNumero * 29.52998).toFixed(3);
        document.getElementById("hpaOut").innerText = (valorNumero * 1000).toFixed(3);
    } else if (valorOption === "atm") {
        atmfuera.classList.add("oculto_unidad_usada");
        document.getElementById("psiOut").innerText = (valorNumero * 14.696).toFixed(3);
        document.getElementById("barOut").innerText = (valorNumero * 1.01325).toFixed(3);
        document.getElementById("inhgOut").innerText = (valorNumero * 29.9213).toFixed(3);
        document.getElementById("hpaOut").innerText = (valorNumero * 1013.25).toFixed(3);
    } else if (valorOption === "inhg") {
        inhgfuera.classList.add("oculto_unidad_usada");
        document.getElementById("psiOut").innerText = (valorNumero / 2.03602).toFixed(3);
        document.getElementById("barOut").innerText = (valorNumero / 29.52998).toFixed(3);
        document.getElementById("atmOut").innerText = (valorNumero / 29.9213).toFixed(3);
        document.getElementById("hpaOut").innerText = (valorNumero * 33.8639).toFixed(3);
    } else {
        hpafuera.classList.add("oculto_unidad_usada");
        document.getElementById("psiOut").innerText = (valorNumero / 68.9476).toFixed(3);
        document.getElementById("barOut").innerText = (valorNumero / 1000).toFixed(3);
        document.getElementById("atmOut").innerText = (valorNumero / 1013.25).toFixed(3);
        document.getElementById("inhgOut").innerText = (valorNumero / 33.8639).toFixed(3);
    }

}
pressValueDom.addEventListener("input" , converterpress)
pressOptDom.addEventListener("change" , converterpress);

// Conversion de Temperatura

const tempValueDom = document.getElementById("temp1");
const tempOptDom = document.getElementById("temp2");
const convertertemp = () => {
    valorNumero = parseFloat(tempValueDom.value)
    valorOption = tempOptDom.value;
    const centifuera = document.querySelector(".centiDesaparece");
    const farenfuera = document.querySelector(".farenDesaparece");
    const kelvinfuera = document.querySelector(".kelvinDesaparece");
    centifuera.classList.remove("oculto_unidad_usada");
    farenfuera.classList.remove("oculto_unidad_usada");
    kelvinfuera.classList.remove("oculto_unidad_usada");
    if (valorOption === "" || isNaN(valorNumero)) {
        document.getElementById("centiOut").innerHTML = "Ingrese datos";
        document.getElementById("farenOut").innerText = "Ingrese datos"; 
        document.getElementById("kelvinOut").innerText = "Ingrese datos"; 
    }

}
tempValueDom.addEventListener("input" , convertertemp);
tempOptDom.addEventListener("change" , convertertemp);

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
    converterpress();
})

botonActivaTemp.addEventListener("click", () => {
    limpiaTodo();
    sobrecapa.style.display = "flex";
    cardMostrarTemp.style.display = "flex";
    convertertemp();
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