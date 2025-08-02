

let chasyi = document.querySelector("#hour");
let minuta = document.querySelector("#minute");
let sekund = document.querySelector("#second");

function vremya(){
    let date = new Date();
    let chas = date.getHours();
    let min = date.getMinutes();
    let sek = date.getSeconds();

    chasyi.firstChild.textContent = chas + " ";
    minuta.firstChild.textContent = min + " ";
    sekund.firstChild.textContent = sek + " ";

    document.querySelectorAll(".time").forEach(label => {
        label.classList.add("show");
    });
}
setInterval(vremya, 500);
