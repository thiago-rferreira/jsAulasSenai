function classificar() {
    let telefonou = document.getElementById("telefonou").checked;
    let local = document.getElementById("local").checked;
    let mora_perto = document.getElementById("mora_perto").checked;
    let devia = document.getElementById("devia").checked;
    let trabalhou = document.getElementById("trabalhou").checked;

    console.log(telefonou);
    console.log(local);
    console.log(mora_perto);
    console.log(devia);
    console.log(trabalhou);

    let contador = 0;

    if (telefonou) {
        contador++;
    }
    if (local) {
        contador++;
    }
    if (mora_perto) {
        contador++;
    }
    if (devia) {
        contador++;
    }
    if (trabalhou) {
        contador++;
    }

    console.log("Contador = " + contador);

    let resultado;
    if (contador == 2) {
        resultado = "Suspeita";
    }
    if (contador == 3 || contador == 4) {
        resultado = "Cúmplice";
    }
    if (contador == 5) {
        resultado = "Assassino";
    }
    if (contador < 2) {
        resultado = "Inocente";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
