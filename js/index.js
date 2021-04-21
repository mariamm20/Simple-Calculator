var show = document.getElementById("final");
var btn = document.getElementById("btn");
function calcSum() {

    show.style.display = "flex";
    document.getElementById("sign").innerHTML = "+";
    btn.style.display = "flex";
}
function calcMul() {
    show.style.display = "flex";
    document.getElementById("sign").innerHTML = "X";
    btn.style.display = "flex";
}

function calculate() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (document.getElementById("sign").innerHTML === "+") {
        var sum = parseInt(num1) + parseInt(num2);
        document.getElementById("answer").innerHTML = sum;
    }
    else {
        var mul = parseInt(num1) * parseInt(num2);
        document.getElementById("answer").innerHTML = mul;
    }

}
