import { Actor } from "./Actor";
import { Category } from "./Category";
import { CuevanaAndes } from "./CuevanaAndes";
import { Director } from "./Director";
import { Episode } from "./Episode";
import { Plan } from "./Plan";
import { Platform } from "./Platform";
import { Serie } from "./Serie";
import readlineSync from 'readline-sync';

var app: CuevanaAndes = getCuevanaAndes();

function menuGetSerie(): void {
  let serie = undefined;
  console.log('Bienvenido al menú de obtención de series');
  const name = readlineSync.question("Ingrese el nombre de la serie: ");
  serie = app.getSerie(name);
  if(serie != undefined){
    console.log(serie);
  }else{
    console.log('No se encontró la serie');
  }
}

function menuGetCollaborators(): void {
  let collaborators = undefined;
  console.log('Bienvenido al menú de colaboradores de series');
  const name = readlineSync.question("Ingrese el nombre de la serie: ");
  collaborators = app.getCollaboratorsBySerie(name);
  if(collaborators != undefined){
    console.log(collaborators);
  }else{
    console.log('No hay colaboradores registrados para la serie');
  }
}

function menuGetCollaborator(): void {
  let collaborator = undefined;
  console.log('Bienvenido al menú de informacion colaboradores de series');
  const name = readlineSync.question("Ingrese el nombre del colaborador de la serie: ");
  collaborator = app.getCollaborator(name);
  if(collaborator != undefined){
    console.log(collaborator);
  }else{
    console.log('No se encontró el colaborador');
  }
}

function menuGetPlatform(): void {
  let platform = undefined;
  console.log('Bienvenido al menú de informacion plataformas');
  const name = readlineSync.question("Ingrese el nombre de la plataforma: ");
  platform = app.getPlatform(name);
  if(platform != undefined){
    console.log(platform);
  }else{
    console.log('No se encontró la plataforma');
  }
}

function menuCrearSerie(){
  console.log('=== CREAR SERIE ===');
  const platformName = readlineSync.question('Ingrese el nombre de la plataforma: ');
  const categoryName = readlineSync.question('Ingrese el nombre de la categoria: ');
  const image = readlineSync.question('Ingrese la URL de la imagen: ');
  const name = readlineSync.question('Ingrese el nombre de la serie: ');
  let serie = app.createSerie(categoryName,image,name,platformName);
  if(serie != undefined){
    console.log(serie);
  }else{
    console.log('No se pudo crear la serie');
  }

}

function menuCrearCategory(){
  console.log('=== CREAR CATEGORIA ===');
  const categoryName = readlineSync.question('Ingrese el nombre de la categoria: ');
  const descripcion = readlineSync.question('Ingrese la descripcion de la categoria: ');
  let category = app.createCategory(categoryName,descripcion);
  if(category != undefined){
    console.log(category);
  }else{
    console.log('No se pudo crear la categoria');
  }

}

function menuCrearActor(){
  console.log('=== CREAR ACTOR ===');
  const nameSerie = readlineSync.question('Ingrese el nombre de la serie: ');
  const nameActor = readlineSync.question('Ingrese el nombre del Actor de la serie: ');
  const imageActor = readlineSync.question('Ingrese la url de la imagen del actor: ');
  const descriptionActor = readlineSync.question('Ingrese la descripcion del actor: ');
  let actor = app.createActor(nameActor,imageActor,descriptionActor,nameSerie);
  if(actor != undefined){
    console.log(actor);
  }else{
    console.log('No se pudo crear el actor');
  }

}

function menuCrearDirector(){
  console.log('=== CREAR DIRECTOR ===');
  const nameSerie = readlineSync.question('Ingrese el nombre de la serie: ');
  const nameDirector = readlineSync.question('Ingrese el nombre del Director de la serie: ');
  const imageDirector = readlineSync.question('Ingrese la url de la imagen del director: ');
  const descriptionDirector = readlineSync.question('Ingrese la descripcion del director: ');
  let director = app.createDirector(nameDirector,imageDirector,descriptionDirector,nameSerie);
  if(director != undefined){
    console.log(director);
  }else{
    console.log('No se pudo crear el director');
  }

}

function menuAddCategoryToSerie(){
  console.log('=== Agregar Categoria ===');
  const nameCategory = readlineSync.question('Ingrese el nombre de la categoria: ');
  const nameSerie = readlineSync.question('Ingrese el nombre de la serie: ');
  let ans = app.addCategoryToSerie(nameCategory,nameSerie);
  if(ans){
    console.log('Categoria agregada a la serie');
  }else{
    console.log('No se pudo agregar la categoria');
  }

}

function menuAddActorToSerie(){
  console.log('=== Agregar Actor ===');
  const nameSerie = readlineSync.question('Ingrese el nombre de la serie: ');
  const nameActor = readlineSync.question('Ingrese el nombre del Actor que desea agregar: ');
  let ans = app.addActorToSerie(nameActor,nameSerie);
  if(ans){
    console.log('Actor agregado a la serie');
  }else{
    console.log('No se pudo agregar el Actor');
  }

}

function menuAddDirectorToSerie(){
  console.log('=== Agregar Director ===');
  const nameSerie = readlineSync.question('Ingrese el nombre de la serie: ');
  const nameDirector = readlineSync.question('Ingrese el nombre del Director que desea agregar: ');
  let ans = app.addDirectorToSerie(nameDirector,nameSerie);
  if(ans){
    console.log('Director agregado a la serie');
  }else{
    console.log('No se pudo agregar el Director');
  }

}






function getCuevanaAndes() : CuevanaAndes {
  let actor1: Actor = new Actor("Johnny deep","deep.png","Actor conocido por piratas del caribe");
  let director1: Director = new Director("James Cameron","Cameron.png","Director de avatar");
  let actor2: Actor = new Actor("Actor prueba 2","deep.png","Actor prueba2");
  let director2: Director = new Director("Director2","Cameron.png","Director de prueba2");
  let collaborators = [actor1,director1];
  let collaborators2 = [actor2,director2];
  let episode1BlackList = new Episode("Episode1","Episodio de introduccion",50);
  let episode2BlackList = new Episode("Episode2","Episodio donde se introduce al villano",50);
  let episode1Boys = new Episode("Episode1","Episodio de introduccion",50);
  let episodes = [episode1BlackList,episode2BlackList];
  let episodes2 = [episode1Boys];
  let blackList: Serie = new Serie("blackList.png","Black List",collaborators,episodes);
  let theBoys: Serie = new Serie("img","The Boys",collaborators2,episodes2);
  let terrorCategory: Category = new Category("Terror","Categoria de Terror",[]);
  let accionCategory: Category = new Category("Acción","Categoria de Acción",[blackList]);
  let comediaCategory: Category = new Category("Comedia","Categoria de comedia",[theBoys]);
  let planNetflixBasico: Plan = new Plan("Basico",20000,"Incluye el mes de una sola pantalla");
  let planNetflixAvanzado: Plan = new Plan("Avanzado",40000,"Incluye el mes de cuatro pantallas");
  let planAmazonBasico: Plan = new Plan("Basico",20000,"Incluye el mes de una sola pantalla");
  let planAmazonAvanzado: Plan = new Plan("Avanzado",40000,"Incluye el mes de cuatro pantallas");
  let planesNetflix = [planNetflixBasico,planNetflixAvanzado];
  let planesAmazon = [planAmazonBasico,planAmazonAvanzado];
  let categories = [terrorCategory,accionCategory,comediaCategory];
  let netflix: Platform = new Platform("Netflix","www.netflix.com",categories,planesNetflix);
  let Amazon: Platform = new Platform("Amazon","www.primevideo.com",categories,planesAmazon);
  let platforms = [netflix,Amazon];
  let app = new CuevanaAndes(platforms);
  return app;
}

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
  
function ejecutarOpcion(opcion: string) {
    switch (opcion) {
      case "1":
        console.log(app.getSeries());
        break;
      case "2":
        menuGetSerie();
        break;
      case "3":
        console.log(app.getCategories());
        break;
      case "4":
        menuGetCollaborators();
        break;
      case "5":
        menuGetCollaborator();
        break;
      case "6":
        console.log(app.getPlatforms());
        break;
      case "7":
        menuGetPlatform();
        break;
      case "8":
        menuCrearSerie();
        break;
      case "9":
        menuCrearCategory();
        break;
      case "10":
        menuCrearActor();
        break;
      case "11":
        menuCrearDirector()
        break;
      case "12":
        menuAddCategoryToSerie()
        break;
      case "13":
        menuAddActorToSerie();
        break;
      case "14":
        menuAddDirectorToSerie();
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
    const opcionMenu = readlineSync.question("Selecciona una opción del menú: ");
    ejecutarOpcion(opcionMenu);
    iniciarMenu();
}

function main(){
    iniciarMenu();
}

main();


