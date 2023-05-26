"use strict";
function mostrarMenu() {
    console.log("\x1b[36m╔═══════════════════════════════════════════════════════════════════╗\x1b[0m");
    console.log("\x1b[36m║                        \x1b[1mMENÚ PRINCIPAL                             \x1b[36m║\x1b[0m");
    console.log("\x1b[36m╠═══════════════════════════════════════════════════════════════════╣\x1b[0m");
    console.log("\x1b[36m║ 1.  \x1b[0mMostrar el listado de todas las series                        \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 2.  \x1b[0mMostrar el detalle de una serie en particular                 \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 3.  \x1b[0mMostrar el listado de categorías                              \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 4.  \x1b[0mMostrar el listado de directores y actores de una serie       \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 5.  \x1b[0mMostrar el detalle de un director y de un actor               \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 6.  \x1b[0mMostrar el listado de las plataformas                         \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 7.  \x1b[0mMostrar detalle de una plataforma                             \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 8.  \x1b[0mCrear una nueva serie                                         \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 9.  \x1b[0mCrear una nueva categoría                                     \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║10.  \x1b[0mCrear un nuevo actor                                          \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║11.  \x1b[0mCrear un nuevo director                                       \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║12.  \x1b[0mAgregar una categoría a una serie                             \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║13.  \x1b[0mAgregar un actor a una serie                                  \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║14.  \x1b[0mAgregar un director a una serie                               \x1b[36m║\x1b[0m");
    console.log("\x1b[36m║ 0.  \x1b[0mSalir                                                         \x1b[36m║\x1b[0m");
    console.log("\x1b[36m╚═══════════════════════════════════════════════════════════════════╝\x1b[0m");
}
function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            console.log(opcion);
            break;
        case "2":
            console.log(opcion);
            break;
        case "3":
            console.log(opcion);
            break;
        case "4":
            console.log(opcion);
            break;
        case "5":
            console.log(opcion);
            break;
        case "6":
            console.log(opcion);
            break;
        case "7":
            console.log(opcion);
            break;
        case "8":
            console.log(opcion);
            break;
        case "9":
            console.log(opcion);
            break;
        case "10":
            console.log(opcion);
            break;
        case "11":
            console.log(opcion);
            break;
        case "12":
            console.log(opcion);
            break;
        case "13":
            console.log(opcion);
            break;
        case "14":
            console.log(opcion);
            break;
        case "0":
            console.log("Saliendo del programa...");
            process.exit(0);
        default:
            console.log("Opción no válida.");
            break;
    }
}
function iniciarMenu() {
    mostrarMenu();
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Selecciona una opción: ", (opcion) => {
        ejecutarOpcion(opcion);
        rl.close();
        iniciarMenu();
    });
}
function main() {
    iniciarMenu();
}
main();
