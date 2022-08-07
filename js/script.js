const horaE1 = document.getElementById("horas");
const minutoE1 = document.getElementById("minutos");
const segundoE1 = document.getElementById("segundos");
const ampmE1 = document.getElementById("ampm");

function atualizaRelogio(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    horaE1.innerText = h;
    minutoE1.innerText = m;
    segundoE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => {
        atualizaRelogio();
    }, 1000)
}

atualizaRelogio();