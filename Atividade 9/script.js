var num1, num2, num3;
let obj;

document.getElementById("btn1").onclick = function() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;
    alert(maior(num1, num2, num3));
};

function maior(num1, num2, num3) {
    var maior = num1;
    if (maior < num2) {
        maior = num2;
    }
    if (maior < num3) {
        maior = num3;
    }

    return maior;
}

document.getElementById("btn2").onclick = function() {
    num4 = document.getElementById("num4").value;
    num5 = document.getElementById("num5").value;
    num6 = document.getElementById("num6").value;
    alert(ordena(num4, num5, num6));
};

function ordena(num4, num5, num6) {

    let lista = [num4, num5, num6]
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            if (lista[i] > lista[i + 1]) {
                let aux1 = lista[i];
                let aux2 = lista[i + 1];
                lista[i] = aux2;
                lista[i + 1] = aux1;
            }
        }
    }

    return lista;

}