let cursoIngresado = prompt("Ingrese el nombre del curso que compró (Desarrollo, Idiomas o Diseño)");

function consultarCurso(){
    while (cursoIngresado !== "desarrollo" && cursoIngresado !== "idiomas" && cursoIngresado !== "diseño") {
        cursoIngresado = prompt("Ingrese la opción correcta (Desarrollo, Idiomas o Diseño)");
    }
}


function mostrarInfoDeCursos(){

    switch(cursoIngresado){

    case "Desarrollo":
            console.log("Su curso de " + cursoIngresado + " incia el dia 13/02/20223");
            mostrarMenu();
            break;
    case "Idiomas":
            console.log("Su curso de " + cursoIngresado + " incia el dia 20/02/20223");
            mostrarMenu();
            break;
    case "Diseño":
            console.log("Su curso de " + cursoIngresado + " incia el dia 06/03/2023");
            mostrarMenu();
            break;
        default:
            console.log("Usted ingreso un curso que no se dicta")
            mostrarMenu();
            break;
    }
}
mostrarInfoDeCursos();

function mostrarMenu(){
    let otraConsulta = prompt("¿Desea realizar otra consulta? SI para continuar o NO para salir del sistema").toLowerCase();

    switch(otraConsulta){

        case "si":
            mostrarInfoDeCursos();
            break;
        case "no":
            break;
        default:
            console.log("Error")
            mostrarMenu();
            break;
    }
}