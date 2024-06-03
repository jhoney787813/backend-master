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


ejecución de consulta

<img width="900" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/cc2808a6-d725-4452-a39c-c5407a6d3ce4">
<img width="818" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/cf18751c-c01c-4360-9341-a0f12aa8a007">





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

R/= para dar cumplimiento con lo solicitado, primero recomendaria no solo renombar las variables si no aplicar los princios  KISS,SLAP  por lo que empezariamos por separar responsabilides en metodos que hagan una sola cosa y demanera muy simple, y posteriormente en un metodo que los engloble llamar a dichas funciones, para asi cumplir con la responsabilidad unica.

<img width="850" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/9b67aaa9-0bdf-4e12-ad80-8fc45dd86f55">

Luego al mimso codigo planteado inicialmente, realizamos un renombre de sus variables de entrada, para que sean mas dicientes sobre el origen 

<img width="870" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/1613d3cc-3d07-4bc4-9935-475f26f2da02">


Ejercicio 3: Pensamiento lógico
Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].

evidencias de ejecución de salida
Se asiga el valor inicial "9" y se ejecuta el metodo
<img width="890" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/951151c4-356c-4670-8257-76161964cfed">
<img width="901" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/f2b9acbf-6e6c-4f98-a7e7-b7056baa7a8f">




Ejercicio 4: Modelado de bases de datos
Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
de integridad necesarias para que el sistema funcione correctamente.

para la elaboración del modelo he utilizado una herramienta online llamada(https://www.dbdiagram.io/d) la cual permite de manera agil y con estructura json elaborar un modelo en tiempo de ejecución para ahorro de tiempos.

<img width="605" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/6a6176e5-fc6f-43ee-919f-1407392352ad">


<img width="326" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/397b919d-b87f-4e28-836d-62647165088d">

<img width="353" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/9d75d492-17e6-4403-9de7-3216d8ff7547">

<img width="959" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/126da772-e20c-4348-9539-f35d3242a447">

NOTA: por normalizaciones de bd, el modelo propuesto cumple con lo solicitado sin embargo de requerirse una mejor optimización, se puede considerar crear una tabla detalle, que relaciónes los autores,videos y comentarios en una sola, para evitar relaciones circulares.

se incluyen los scripts de sql en el codigo fuente 

<img width="733" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/f659606b-1551-43f0-91ba-7ce009a72b69">


Ejercicio 5: Arquitectura del backend
Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla
sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
diseño, etc.

Existen varias tecnologias que yo podria utilizar para realizar esta implementación, sin emgargo voy a proponer dos marcos de trabajo tanto para back como front. 

podemos utlizar tecnologias como node.js o  marcos robustos como .NET.


Propuesta 1)  como nuestra aplicación de comercio electronico su principal driver de arquitectura puede ser que sea escalable, segura y con una alta disponiblidad.

propondria implmentar el patron CQRS and Vertical Slice Architecure, para satisfacer la premisa inicial de que sea escalabre, ya que:

Vertical Slice Architecture​:La arquitectura de corte vertical es una técnica que nos ayuda a crear aplicaciones mantenibles separando la aplicación en torno a características o "cortes verticales" y  CQRS: significa segregación de responsabilidades de comandos y consultas, un patrón que separa las operaciones de lectura y actualización de un almacén de datos. La implementación de CQRS en la aplicación puede maximizar el rendimiento, la escalabilidad y la seguridad.

Teniendo esto presente, debemos definir si nuestra api o backend tendra una tactica de diseño BFF que es lo mas recomando si queremos exponer nuestras capacidades en un futuro en algun desarrollo para aplicación movil de nuesta app decomercio electronico. 


voy a dejar un recurso elaborado por mi para mi compañia actual donde incursiono en tecnologia .NET y enfatizo en la importancia de CQRS

<img width="506" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/5adfd68b-372a-4379-9546-c95b1152f3b8">

<img width="500" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/d7a1680f-87cb-468f-acea-a018c38aef45">

Tecnologías
ASP.NET Core para el backend API
Entity Framework Core para el ORM
MediatR para implementar CQRS
Dapper para consultas SQL optimizadas
Swagger para documentación de API
xUnit para pruebas unitarias

<img width="379" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/500798fa-bbb8-4aa2-a06f-36cd7164fed1">


Patrones de diseño
CQRS (Command and Query Responsibility Segregation): Separa las operaciones de lectura (consultas) de las de escritura (comandos) en diferentes objetos. Cada rebanada vertical implementa un comando o una consulta.
Arquitectura de rebanadas verticales: Organiza el código alrededor de características o casos de uso. Cada rebanada vertical contiene todos los componentes necesarios para implementar una funcionalidad, como controladores, modelos de datos, lógica de negocio, etc.
Repository Pattern: Abstrae el acceso a los datos, permitiendo diferentes implementaciones (EF Core, Dapper, etc.) sin afectar el resto del código.
Unit of Work Pattern: Coordina múltiples operaciones de repositorio en una sola transacción.
Beneficios
Acoplamiento reducido entre rebanadas: Cada rebanada es independiente y puede cambiar sin afectar a las demás.
Alta cohesión dentro de una rebanada: Todos los componentes relacionados con una funcionalidad están juntos, lo que facilita el desarrollo y el mantenimiento.
Flexibilidad de implementación: Cada rebanada puede usar la tecnología más adecuada para sus requisitos específicos (EF Core, Dapper, etc.).
Escalabilidad: Las rebanadas pueden escalarse independientemente según sea necesario.
Pruebas más fáciles: Las rebanadas se prestan a pruebas unitarias aisladas.

Propuesta 2) si milar a como se realizo el codigo del api de node del punto 1, sin embargo  debemos considerar, utilizar tambien  bases de datos relacionales y no relacionales segun lo deseado, se sugiere antes de comenzar con la implementación del proyecto sin importar su tecnologia, realizar una sesión o varias de modelamiento de las necesidades y se puede utilizar la metodo logia WDD(Wine Driven Design). en donde levantemos las restriciones del negocio, drivers de arquitectura empresarial, riesgos del sistema y priorización de funcionalidades base.

<img width="781" alt="image" src="https://github.com/jhoney787813/backend-master/assets/51183760/631132d8-02b5-4d59-8661-1910d8cb512d">


Ejercicio 6: Nomenclatura
Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc.
