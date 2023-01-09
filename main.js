let cursoIngresado = prompt("Ingrese el nombre del curso que compró (Desarrollo, Idiomas o DIseño)")

while (cursoIngresado !== "Desarrollo" && cursoIngresado !== "Idiomas" && cursoIngresado !== "DIseño") {

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
            console.log("Usted ingreso in curso que no se dicta")
            break;
}
