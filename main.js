let cursoIngresado = prompt("Ingrese el nombre del curso que compró (Desarrollo, Idiomas o Diseño)")

while (cursoIngresado !== "Desarrollo" && cursoIngresado !== "Idiomas" && cursoIngresado !== "Diseño") {

    cursoIngresado(prompt("Ingrese la opción correcta (Desarrollo, Idiomas o Diseño)"));
}

switch(cursoIngresado){

    case "Desarrollo":
            console.log("Su curso de " + cursoIngresado + " incia el dia 13/02/20223");
            break

    case "Idiomas":
            console.log("Su curso de " + cursoIngresado + " incia el dia 20/02/20223");
            break

    case "Diseño":
            console.log("Su curso de " + cursoIngresado + " incia el dia 06/03/20223");
            break

        default:
            console.log("Usted ingreso un curso que no se dicta")
            break;
}

let otraConsulta = (prompt("Ingrese otro curso del que desee saber la fecha de inicio (Desarrollo, Idiomas o Diseño) o por el contrario Salir para terminar el proceso"));
if (otraConsulta !== "Salir" && cursoIngresado !== "salir" && cursoIngresado !== "SALIR") {

    switch(otraConsulta){

        case "Desarrollo":
                console.log("Su curso de " + otraConsulta + " incia el dia 13/02/20223");
                break
    
        case "Idiomas":
                console.log("Su curso de " + otraConsulta + " incia el dia 20/02/20223");
                break
    
        case "Diseño":
                console.log("Su curso de " + otraConsulta + " incia el dia 06/03/20223");
                break
    
            default:
                console.log("Usted ingreso un curso que no se dicta")
                break;
    }
} else (otraConsulta === "Salir" && otraConsulta === "salir" && otraConsulta === "SALIR") 
    alert ("Gracias por su consulta!");
