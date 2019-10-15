const values = [6, 46, 29];
const offset = [0];
const omkreds = Math.PI * 100;
let total = 0;
values.forEach(v => total += v);

const faktor = omkreds / total;
console.log(omkreds, total, faktor);

window.addEventListener("load", animer);




function animer() {
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelectorAll("#diagramkage circle").forEach((cirkel, i) => {
        offset.push(values[i] + offset[i])


        cirkel.style.strokeDasharray = values[i] * faktor + " " + omkreds;
        cirkel.style.strokeDashoffset = -offset[i] * faktor;
    })

    document.querySelectorAll("#diagramkage circle").forEach((bar, i) => {
        bar.setAttribute("y2", 100 - values[i]);
        bar.addEventListener("mouseover", e => {

            document.querySelector("#disp").textContent = values[i] + " ";

            bar.setAttribute("data-value", values[i])

        })
    })
}

const values1 = [23, 48, 87, ]

document.querySelectorAll("#bars line").forEach((bar, i) => {

    bar.setAttribute("y2", 100 - values1[i])
    bar.addEventListener("mouseover", e => {

        document.querySelector("#dispp").textContent = values1[i] + "%";

        bar.setAttribute("data-value", values1[i])
    })
})


/** BURGERMENU **/

function sidenVises() {
    console.log("sidenVises");

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }
}
