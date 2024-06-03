# backend-master
Desarrollador FullsTack  aplicado en Linkedin para MASTER COMPANY

CONTENIDO DE LA PRUEBA TECNICA

Objetivo de la prueba: Evaluar tus habilidades en Backend
Ejercicio 1: Consumo de APIs
Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios
más populares del usuario "google".

R/ Se me pide raliza la APi que consuma de google en node js, para eso implemente los paquetes de Axios, express server y documentación de swagger.  
no se me espeficica que patron o tacticas utilizas para el desarrollo de esta api, sin embargo la implemente del siguiente modo ya que resalto lo siguiente segun las esperiencias obtenidas en proyectos anteriores.

Utilizo una arquitectura limpia o (Clean Architecture), ya que nos permite escalar una aplicación y nos promueve la extensión y mantenibilidad de la misma, donde tambien se tienen en cuenta los principios SOLID.

para mi esto es lo fundamental de esta implementación:

+ Ayuda a separar la lógica de negocio de la lógica de presentación.
+ Permite una mayor flexibilidad y escalabilidad.
+ Facilita la mantenibilidad y el desarrollo de la aplicación.
+ Reduce la complejidad y la cantidad de código.
+ Mejora la legibilidad y la comprensión del código.
 yo he querido plasmar con esta pequeña aplicación el patrón de diseño "Clean Architecture", ya que se basa en la separación de concerns (preocupaciones) y la utilización de interfaces para comunicar entre los diferentes capas de la aplicación. dando como resultado una distribución logia entre componentes y carpetas, sin embargo tambien puede ser planteada en paquetes externos a el proyecto, para mayor modularidad.

<img width="340" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/9ebbc070-1ad2-45ce-ad6a-6498a6575adf">


Ejercicio 2: Nomenclatura
Te presentamos el siguiente fragmento de código:
function f(x, y, z) {
let a = x + y;
let b = a * z;
let c = Math.sin(b);
return c;
}

Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función.

Ejercicio 3: Pensamiento lógico
Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
Ejercicio 4: Modelado de bases de datos
Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
de integridad necesarias para que el sistema funcione correctamente.


Ejercicio 5: Arquitectura del backend
Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla
sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
diseño, etc.




Ejercicio 6: Nomenclatura
Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc.
