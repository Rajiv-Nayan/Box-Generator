const $number1 = document.getElementById("text").value;
var count = 0;

function generator() {
    $number1 = document.getElementById("text").value;
    for (var i = 0; i < $number1; i++) {
        count++;
        btn = document.createElement("button");
        btn.id = "btn1";
        btn.innerHTML = "New Button " + count;
        document.getElementById("new").appendChild(btn);
    }
}