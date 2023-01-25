
// SIMULACION DE PLATAFORMA DE CURSOS

/*const { green } = require("color-name");

//clases
class Alumno {
    
    constructor(nombre, dni, curso) {
        this.nombre = nombre;
        this.dni = dni;
        this.curso = curso;
    }
}

// Funciones
function obtenerIndiceDeAlumnoPorDNI (dni) {

let indiceAlumno = -1;

    for(let i = 0; i < alumnos.length; i++) {

    if(alumnos[i].dni === dni) {
        indiceAlumno = i;
        break;
    }
}

return indiceAlumno;
}

function alumnoExiste (dni) {

let encontrado = false;

    for(const alumno of alumnos) {

        if(alumno.dni === dni) {
            encontrado = true;
            break;
        }

    }

    return encontrado;
}

let cursoIngresado = prompt("Ingrese el nombre del curso que compró (Desarrollo, Idiomas o Diseño)");

function consultarCurso(){
    while (cursoIngresado !== "desarrollo" && cursoIngresado !== "idiomas" && cursoIngresado !== "diseño") {
        cursoIngresado = prompt("Ingrese la opción correcta (Desarrollo, Idiomas o Diseño)");
    }
}
function mostrarInfoDeCursos(){

    switch(cursoIngresado){

    case "Desarrollo":
            console.log("Su curso de " + cursoIngresado + " finaliza el dia 24/02/20223");
            mostrarMenu();
            break;
    case "Idiomas":
            console.log("Su curso de " + cursoIngresado + " finaliza el dia 10/03/20223");
            mostrarMenu();
            break;
    case "Diseño":
            console.log("Su curso de " + cursoIngresado + " finaliza el dia 14/04/2023");
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
function pagarCuota(){

    let verCuota = parseInt(prompt("Ingrese el número de la cuota que quiere abonar: "));

    const precioCuota = 1500;
    const cuota = [
        1, 1, 1, 1, 1, 1,
    ]
        
}
*/
const clases = {
//     % asist-prom-t.p
    html: [100,6,3,"html"],
    css: [100,8,2,"css"],
    boxModeling: [80,8,4,"boxModeling"],
    flexbox: [92,8,2,"flexbox"],
    grids: [86,6,3,"grids"],
    git: [95,9,4,"git"],
    gitHub: [100,6,2,"gitHub"],
    frameworks: [98,10,4,"frameworks"],
}

const asistencia = ()=>{
    for (clase in clases){
        let asistencias = clases[clase][0];
        if (asistencias >= 90){
            console.log(clases[clase][3]);
            console.log("%c  Aprobado", "color:green");
        } else {
            console.log(clases[clase][3]);
            console.log("%c  Desaprobado", "color:red");
        }
    }
}
asistencia();





    // Lista de Alumnos
const alumnos = [     
    new Alumno("Santiago", "36589456", "Desarrollo"),
    new Alumno("Xiomara", "42058377", "Diseño"),
    new Alumno("Agustina", "39867425", "Idiomas"),
    new Alumno("Lucas", "44049989", "Desarrollo"),
    new Alumno("Lucia", "40213705", "Diseño"),
    new Alumno("Fernando", "37596812", "Idiomas"),
];

let operacion = prompt("Ingrese alguna operación: 1- Consultar finalización de mi Curso, 2- Pagar cuota, 3- Ver mis Notas, 4- Salir");

while(operacion !== "Salir") {

    switch(operacion) {

        case "1":
        consultarCurso();
            break;

        case "2":
            pagarCuota();
            break;

        case "3":
            verMisNotas();
            break;

        default:
            console.log("Opción incorrecta");
            break;
    }

     // Vuelvo a pedir que ingrese una operación
    operacion = prompt("Ingrese una nueva operación: 1- Consultar finalización de mi Curso, 2- Pagar cuota, 3- Ver mis Notas, 4- Salir");
}


console.log(alumnos);