function showMessage() {
    alert("で？");
}

let position = 0;

function moveButton() {
    const button = document.getElementById("myButton");
    position += 10;
    button.style.marginLeft = position + "px";
}

setInterval(moveButton, 100);