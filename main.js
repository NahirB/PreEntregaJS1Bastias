/*Realizo un programa en el cual se ingrese el plan que quiere realizar la persona (A, B, C o D), la cantidad de horas que puede hacer por semana 
y se calcule cuánto tiempo va a tardar, teniendo en cuenta que el curso dura 8 meses estudiando 5 hs por semana:
 * Estudiante del plan A = 2 hs por semana
 * Estuadiante del plan B = 3 hs por semana
 *  Estudiante del plan C = 4 hs por semana
 * Estudiante del plan D = 5 hs por semana
 */

let estudiante = "";

while(estudiante !== "Salir") {

    // Le pido al usuario el plam a realizar
    let plan = prompt("Ingrese el curso (A, B, C o D)");

    // While 
    while(plan !== "A" && plan !== "B" && plan !== "C" && plan !== "D") {

        plan = prompt("Ingrese CORRECTAMENTE el plan (A, B, C o D)");

    }

    // Le pido al estudiante las horas que puede estudiar por semana
    const horasDeEstudio = parseInt(prompt("Ingrese la cantidad de horas que puede estudiar por semana"));

    // Calcular cuanto le tomaria
    let tiempo = 0;

    switch(plan) {

        case "A":
            tiempo = (horasDeEstudio * 4) +  ;
            break;

        case "B":
            tiempo = horasDeEstudio * 50;
            break;

        case "C":
            tiempo = horasDeEstudio * 75;
            break;

        case "D":
            tiempo = horasDeEstudio * 100;
            break;
    }

    // Mostrar el resultado
    console.log("El estudiante del plan " + plan + " por " + horasDeEstudio + " horas, le va a llevar: " + tiempo);

    // Preguntar al usuario si quiere ingresar otro curso
    curso = prompt("Ingrese Salir si no quiere ingresar otro curso");

}
