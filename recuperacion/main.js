
function nivelacion(){console.log( " 1. Liquidación de comisión por ventas Una empresa necesita calcular la comisión de un vendedor según sus ventas mensuales y su antiguedad en la empresa");

    let nv; //numbre del vendedor
    let vv; //valor de la venta
    let aa; // años de antiguedad
    let c; // variable comicion de las ventas
    let p;// variable porsentaje de las ventas

    nv = prompt("Dame el nombre del vendedor:");
    vv = parseInt(prompt("Dame el valor de la venta:"));
    aa = parseInt(prompt("Dame los años de antiguedad:"));
    c = 0;
    p = 0;

    if(vv >= 8000000 && aa >= 2){ 
        p = 10; c = vv * 0.10;

     }else if(vv >= 3000000){ 
    p = 5; c = vv * 0.05;

     }else{
    p = 0; c = 0;


     }
     console.log("-----RESULTADOS DE LA LIQUIDACION-----");
    console.log("Vendedor "+nv);
    console.log("Ventas realizadas $"+vv);
    console.log("valor de la comicion $"+c);
    console.log("porsentaje de la comicion %"+p);

    alert("-------LIQUIDACION DE COMICION-------\n"+
        "Nombre: "+nv+"\n" + 
        "Ventas realizadas $"+vv+"\n"+
        "Porsentaje de la comicion %"+p+"\n"+
        "valor de la comicion $"+c+"\n");

}

function evaluacion(){alert("5. Evaluación de desempeño académico un programa de formación necesita determinar el resultado final de un aprendiz a partir de tres calificaciones y su porcentaje de asistencia. datos de entrada: nombre del aprendiz, tres calificaciones de 0 a 100 y porcentaje de asistencia.");

    let na; // numbre del aprendiz
    let n1; // primera nota
    let n2; // segunda nota
    let n3; // ercera nota
    let pa = 0; // porsetanje de asistencia
    let rf = ""; // resultado final

    na = prompt("Dame el nombre:");
    n1 = parseInt(prompt("Dame la primera nota:(entre 0 y 100)"));
    n2 = parseInt(prompt("Dame la segunda nota:(entre 0 y 100)"));
    n3 = parseInt(prompt("Dame la tersera nota:(entre 0 y 100)"));
    pa =  parseFloat(prompt("Dame el porsentaje de asistencia:(entre 0 y 100)"));

    if(n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100 ||pa < 0 || pa > 100){
        
    rf = "Error: las calificaciones y las asistencias deben estar entre (0 y 100)";
    p = 0;

    }else{
    p = (n1 + n2 + n3) / 3;
    if(pa < 80){
    rf = "No aprobado por asistencia";
    }else if(p < 60){
    rf = "No aprobado por rendimiento";
    }else{
        rf = "Aprobado";
    }
    }
    alert("------EL RESULTADO DEL APRENDIZ------\n"+
        "Nombre: "+na+"\n"+
        "Promedio: "+p.toFixed(2)+"\n"+
        "Asistencia: "+pa+"\n"+
        "Resultado final: "+rf
    )

}

function registro(){console.log("6. Registro de ventas de una jornada una tienda necesita registrar las ventas realizadas durante una jornada laboral para conocer el comportamiento de sus ingresos. datos de entrada: cantidad de ventas y valor de cada venta.");

let cv; // cantidad de ventas
let tr = 0; // total recaudado
let vm2 = 0; // venta mayores a 200 mil
let vm = 0; // venta mayor
let i; // contador del ciclo for
let vv; // valor de la venta
let p; // promedio

cv = parseInt(prompt("Dame la cantidad de ventas de la jornada"));

if(isNaN(cv) || cv <= 0){
    alert("Porfavor ingresa una cantidad de ventas valida");

}else{
for (i = 1; i <= cv; i++) {
   vv = parseFloat(prompt("dame el valor de la venta #"+i+":"));
   if(isNaN(vv) || vv <= 0){
    alert("Dame un valor de venta valido");
    i--;
    continue;
   }
   tr = tr+vv;

}if(vv > 200000){
    vm2++;

}if(i ===1 || vv > vm ){
    vm = vv;
}
}
p = tr / cv;


console.log("Cantidad de ventas: "+cv);
console.log("Total recaudado "+tr);
console.log("Promedio de ventas: $"+p.toFixed(2));
console.log("ventas mayores a 200.000 :"+vm2);
console.log("venta con mayor valor: $"+vm);

alert("-------RESUMEN DE LA JORNADA-------\n"+
    "Cantidad de ventas: "+cv+"\n"+
    "Total recaudado: $"+tr+" \n"+
    "promedio de ventas: $"+p.toFixed(2)+"\n"+
    "ventas mayores a $200.000 :"+vm2+"\n"+
    "venta com mayor valor: $"+vm
)



}


function registroDeNumeros(){console.log("9. Registro de números y estadísticasdiseñe un algoritmo que permita ingresar una cantidad determinada de números enteros y analizar sus características.datos de entrada: cantidad de números que se van a ingresar y cada número entero.");
let cn; //cantidad de numeros
let n; //numeros ingresados
let np = 0; // cantidad de positivo
let nn = 0; // cantidad de negativo
let nc = 0;//cantidad de numero cero
let s = 0; // suma
let i; // contador del ciclo for
let nm = 0; // numero mayor
let p = 0; // promedio

cn = parseFloat(prompt("Dame la cantidad de numeros a ingresar:"));

for (i = 1; i <= cn; i++) {
    n = parseFloat(prompt("Dame :"+i+"numero:"));
  s = s + n;
  if(n == 0){
    nc++;
  }else if(n > 0){
    np++;
  }else{
    nn++
  }
  }if(i ===1 || n > nm ){
    nm = n;

    
} 
p = s / cn;

console.log("suma de los numeros: "+s);
console.log("el promedio es: "+p);
console.log("cantidad de numeros positivos: "+np);
console.log("cantidad de numeros negativos "+nn);
console.log("cantidad de numeros cero: "+nc);
console.log("numero mayor: "+nm);




}