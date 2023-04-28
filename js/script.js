//add listener
document.querySelector("#ok").addEventListener("click", addNote);
//get elements
let body = document.querySelector("#form");


let checkbox = document.getElementById("important");

function addNote() {
    //  name + note
    const br = document.createElement("br");
    let one = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");


    //   GET DATE
    const today = new Date();
 

    //text
    h3.textContent = today.toLocaleString() +  " (" + fullName.value +")";
    p.textContent = note.value;
    one.appendChild(h3);
    one.appendChild(br);
    one.appendChild(p);


    //if checkbox checked add css .important
    if (checkbox.checked) {
        one.classList.add("important");
    }

    body.append(one, document.createElement("hr"));
}