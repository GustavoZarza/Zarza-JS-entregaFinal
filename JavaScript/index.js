
const ingresos = document.getElementById("ingresos")

ingresos.addEventListener("submit", (e) =>{
    // e.preventDefault()
    e.target[0].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[2].childNodes[3].innerText = e.target[0].value
    e.target[1].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[4].childNodes[3].innerText = e.target[1].value
    e.target[2].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[6].childNodes[3].innerText = e.target[2].value
    e.target[3].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[8].childNodes[3].innerText = e.target[3].value
    
    let subtotalIngresos
    subtotalIngresos = (parseFloat(e.target[0].value)+parseFloat(e.target[1].value)+parseFloat(e.target[2].value)+parseFloat(e.target[3].value))
    e.target[3].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[10].childNodes[3].innerText = subtotalIngresos

    function Mes(nombre, sueldo, sac, intereses, otros){ 
        this.nombre=nombre
        this.sueldo=sueldo
        this.sac=sac
        this.intereses=intereses
        this.otros=otros
    }
    
    const mes1 = new Mes("agosto", e.target[0].value, e.target[1].value , e.target[2].value, e.target[3].value)
    console.log(mes1)
    localStorage.setItem("agosto", JSON.stringify(mes1))
})

const agostoDeLocal = JSON.parse(localStorage.getItem("agosto"))


let sueldoHistorico = document.getElementById("importeSueldo")
sueldoHistorico.innerText= agostoDeLocal.sueldo

let sacHistorico = document.getElementById("importeSac")
sacHistorico.innerText= agostoDeLocal.sac

let interesHistorico = document.getElementById("importeIntereses")
interesHistorico.innerText= agostoDeLocal.intereses
let otrosHistorico = document.getElementById("importeotrosingresos")
otrosHistorico.innerText= agostoDeLocal.otros



let subtotalIngresos
subtotalIngresos = (parseFloat(sueldoHistorico.textContent)+parseFloat(sacHistorico.textContent)+parseFloat(interesHistorico.textContent)+parseFloat(otrosHistorico.textContent))
let subtotalIngresosHistorico = document.getElementById("SubtotalIngresos").innerText = subtotalIngresos




const resumenEgresos = document.getElementById("egresos")
resumenEgresos.addEventListener("submit", (e) =>{
    // e.preventDefault()
    e.target[0].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[12].childNodes[3].innerText = e.target[0].value
    e.target[1].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[14].childNodes[3].innerText = e.target[1].value
    e.target[2].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[16].childNodes[3].innerText = e.target[2].value

    let subtotalEgresos
    subtotalEgresos = (parseFloat(e.target[0].value)+parseFloat(e.target[1].value)+parseFloat(e.target[2].value))
    console.dir(subtotalEgresos)
    e.target[2].parentNode.parentNode.childNodes[7].childNodes[1].childNodes[18].childNodes[3].innerText = subtotalEgresos

    function MesEgresos(nombre, tarjetas, impuestos, otros, subtotal){
        this.nombre=nombre
        this.tarjetas=tarjetas
        this.impuestos=impuestos
        this.otros=otros
        this.subtotal=subtotal
    }
    const mes1 =new MesEgresos("agosto", e.target[0].value, e.target[1].value, e.target[2].value, subtotalEgresos)
    localStorage.setItem("EgresosAgosto", JSON.stringify(mes1))
})

const egresosAgostoDeLocal = JSON.parse(localStorage.getItem("EgresosAgosto"))

let tarjetaHistorico = document.getElementById("importeTarjetas")
tarjetaHistorico.innerText= egresosAgostoDeLocal.tarjetas

let impuestosyServiciosHistorico = document.getElementById("ImporteIyS")
impuestosyServiciosHistorico.innerText=egresosAgostoDeLocal.impuestos

let OtrosEgresosHistorico = document.getElementById("ImporteOtrosEgresos")
OtrosEgresosHistorico.innerText=egresosAgostoDeLocal.otros
let totalEgresosHistorico = document.getElementById("ImporteTotalEgresos")
totalEgresosHistorico.innerText=egresosAgostoDeLocal.subtotal

let saldos = (parseFloat(subtotalIngresos)-parseFloat(egresosAgostoDeLocal.subtotal))
let saldoMes = document.getElementById("ImporteSaldo")
saldoMes.innerText= saldos