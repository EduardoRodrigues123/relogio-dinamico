const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const relogio = setInterval(function time() {
    //new date() vai pegar as horas do dia
    let dateToday = new Date();
    // aqui fazemos a Variavel HORA receber a variavel DATETODAY que esta com as horas do dia
    let hora  = dateToday.getHours();
    // aqui fazemos a Variavel MIN receber a variavel DATETODAY que esta com os MIN do dia
    let min  = dateToday.getMinutes();
    // aqui fazemos a Variavel SEG receber a variavel DATETODAY que esta com as SEG do dia
    let seg  = dateToday.getSeconds();


    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seg
})