
const URL = "./data.json"

fetch(URL)
.then(response => response.json())
.then(data => data.forEach(element => {
    const valor = element.data.ARS.value
    localStorage.setItem("valorDolar", JSON.stringify(valor))
}))
const monedaPesos = {
    style: "currency",
    currency: "ARS"
  }

const monedaDolar = {
    style: "currency",
    currency: "USD"
}

const ingresos = document.getElementById("ingresos")
ingresos.addEventListener("submit", (e) =>{
    // e.preventDefault()
    let salario = parseFloat(e.target[0].value)
    let sac = parseFloat(e.target[1].value)
    let intBilleteras = parseFloat(e.target[2].value)
    let otrosIngresos = parseFloat(e.target[3].value)

    let salarioPesos = salario.toLocaleString("es-AR", monedaPesos)
    let sacPesos = sac.toLocaleString("es-AR", monedaPesos)
    let intBilleterasPesos = intBilleteras.toLocaleString("es-AR", monedaPesos)
    let otrosIngPesos = otrosIngresos.toLocaleString("es-AR", monedaPesos)

    e.target[0].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[2].childNodes[3].innerText = salarioPesos
    e.target[1].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[4].childNodes[3].innerText = sacPesos
    e.target[2].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[6].childNodes[3].innerText = intBilleterasPesos
    e.target[3].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[8].childNodes[3].innerText = otrosIngPesos
    
    let subtotalIngresos =  (salario+sac+intBilleteras+otrosIngresos)
    let subtotalIngresosPesos = subtotalIngresos.toLocaleString("es-AR", monedaPesos)
    e.target[3].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[10].childNodes[3].innerText = subtotalIngresosPesos

    function Mes(nombre, sueldo, sac, intereses, otros, subtotalIngresos){ 
        this.nombre=nombre
        this.sueldo=sueldo
        this.sac=sac
        this.intereses=intereses
        this.otros=otros
        this.subtotalIngresos=subtotalIngresos
    }
    
    const mes1 = new Mes("agosto", salario, sac , intBilleteras, otrosIngresos, subtotalIngresos)
    console.log(mes1)
    localStorage.setItem("agosto", JSON.stringify(mes1))
})

const agostoDeLocal = JSON.parse(localStorage.getItem("agosto"))


let sueldoHistorico = document.getElementById("importeSueldo")
sueldoHistorico.innerText= agostoDeLocal.sueldo.toLocaleString("es-AR", monedaPesos)
let sacHistorico = document.getElementById("importeSac")
sacHistorico.innerText= agostoDeLocal.sac.toLocaleString("es-AR", monedaPesos)
let interesHistorico = document.getElementById("importeIntereses")
interesHistorico.innerText= agostoDeLocal.intereses.toLocaleString("es-AR", monedaPesos)
let otrosHistorico = document.getElementById("importeotrosingresos")
otrosHistorico.innerText= agostoDeLocal.otros.toLocaleString("es-AR", monedaPesos)
let subtotalIngresosHistorico = document.getElementById("ImporteSubtotalIngresos")
subtotalIngresosHistorico.innerText= agostoDeLocal.subtotalIngresos.toLocaleString("es-AR", monedaPesos)
// let subtotalIngresos
// subtotalIngresos = (parseFloat(sueldoHistorico.textContent)+parseFloat(sacHistorico.textContent)+parseFloat(interesHistorico.textContent)+parseFloat(otrosHistorico.textContent))
// let subtotalIngresosHistorico = document.getElementById("SubtotalIngresos").innerText = subtotalIngresos

const resumenEgresos = document.getElementById("egresos")
resumenEgresos.addEventListener("submit", (e) =>{
    // e.preventDefault()
    let tarjetas = parseFloat(e.target[0].value)
    let impyServ = parseFloat(e.target[1].value)
    let otrasCompras = parseFloat(e.target[2].value)

    let tarjetasPesos = tarjetas.toLocaleString("es-AR", monedaPesos)
    let impyServPesos = impyServ.toLocaleString("es-AR", monedaPesos)
    let otrasComprasPesos = otrasCompras.toLocaleString("es-AR", monedaPesos)

    e.target[0].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[12].childNodes[3].innerText = tarjetasPesos
    e.target[1].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[14].childNodes[3].innerText = impyServPesos
    e.target[2].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[16].childNodes[3].innerText = otrasComprasPesos

    let subtotalEgresos = (tarjetas+impyServ+otrasCompras)
    let subtotalEgresosPesos = subtotalEgresos.toLocaleString("es-AR", monedaPesos)
    e.target[2].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[18].childNodes[3].innerText = subtotalEgresosPesos

    function MesEgresos(nombre, tarjetas, impuestos, otros, subtotalEgresos){
        this.nombre=nombre
        this.tarjetas=tarjetas
        this.impuestos=impuestos
        this.otros=otros
        this.subtotalEgresos=subtotalEgresos
    }
    const mes1 =new MesEgresos("agosto", tarjetas, impyServ, otrasCompras, subtotalEgresos)
    localStorage.setItem("EgresosAgosto", JSON.stringify(mes1))
})

const egresosAgostoDeLocal = JSON.parse(localStorage.getItem("EgresosAgosto"))

let tarjetaHistorico = document.getElementById("importeTarjetas")
tarjetaHistorico.innerText= egresosAgostoDeLocal.tarjetas.toLocaleString("es-AR", monedaPesos)

let impuestosyServiciosHistorico = document.getElementById("ImporteIyS")
impuestosyServiciosHistorico.innerText=egresosAgostoDeLocal.impuestos.toLocaleString("es-AR", monedaPesos)

let OtrosEgresosHistorico = document.getElementById("ImporteOtrosEgresos")
OtrosEgresosHistorico.innerText=egresosAgostoDeLocal.otros.toLocaleString("es-AR", monedaPesos)

let totalEgresosHistorico = document.getElementById("ImporteTotalEgresos")
totalEgresosHistorico.innerText=egresosAgostoDeLocal.subtotalEgresos.toLocaleString("es-AR", monedaPesos)



let saldos = (agostoDeLocal.subtotalIngresos-egresosAgostoDeLocal.subtotalEgresos)
let saldoMes = document.getElementById("ImporteSaldo")
saldoMes.innerText= saldos.toLocaleString("es-AR", monedaPesos)

const cotizacionDolar = JSON.parse(localStorage.getItem("valorDolar"))
let saldoendolar= saldos/cotizacionDolar

const guardar = document.getElementById("guardarMes")
const botonGuardar = document.querySelector("#botonGuardar")
botonGuardar.addEventListener("click", ()=>{

    if (saldos>0) {
        Swal.fire({
            background:"#21132B",
            title: "Excelente!",
            text: "Pudiste ahorrar " + saldos.toLocaleString("es-AR", monedaPesos) + " lo que equivale a " + saldoendolar.toLocaleString("en-US", monedaDolar) + " dólares", 
            color: 	"#FFFFFF",
            imageUrl: "./img/PudisteAhorrar.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Pudiste ahorrar",
            confirmButtonColor: "#AA1638"
          });
    } else {
        Swal.fire({
            background:"#21132B",
            title: "Oohh nooo!",
            
            text: "Quedaste debiendo $" + saldos.toLocaleString("es-AR", monedaPesos),
            imageUrl: "./img/noPudisteAhorrar.jpg",
            color: 	"#FFFFFF",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Este mes no pudiste ahorrar",
            confirmButtonColor: "#AA1638"
          });
        
    }
})

