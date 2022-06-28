let repetir = true;
let i = 0;

while(repetir){
    i = i + 10;
    alert("al infinito");


    if(i >= 10){
        repetir = false
    }
}


let entrada = "";
while(entrada != "gaspar"){
    entrada = prompt("ingresar otro dato")
    alert("el usuario ingreso " + entrada)
}

let tabla = 4;
let resultado;

for (let num = 3; num <= 10; num++){
resultado = tabla * num;
console.log(tabla + "x" + num + "es igual a " + resultado)
}

