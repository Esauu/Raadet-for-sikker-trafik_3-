const values = [6, 46, 29];
const offset = [0];
const omkreds = Math.PI * 100;
let total = 0;
values.forEach(v => total += v);

const faktor = omkreds / total;
console.log(omkreds, total, faktor);

window.addEventListener("load", animer);

function animer() {

    document.querySelectorAll("#diagramkage circle").forEach((cirkel, i) => {
        offset.push(values[i] + offset[i])


        cirkel.style.strokeDasharray = values[i] * faktor + " " + omkreds;
        cirkel.style.strokeDashoffset = -offset[i] * faktor;
    })

    document.querySelectorAll("#diagramkage circle").forEach((bar, i) => {
        console.log(bar, i);
        bar.setAttribute("y2", 100 - values[i]);
        bar.addEventListener("mouseover", e => {

            document.querySelector("#disp").textContent = values[i] + " uheld";

            bar.setAttribute("data-value", values[i])
            console.log(bar.dataset.value)
        })
    })
}
