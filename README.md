# Entrega Final

A continuación, se detallan los puntos que deben estar implementados para la entrega final:

### Requerimiento #1: Gestión del Carrito y Autenticación de Usuarios

**Objetivo: Implementar un carrito de compras funcional y restringir el acceso a secciones privadas mediante autenticación de usuarios.**

* Carrito de Compras con Context API

* Implementar un CarritoContext que gestione los productos agregados.

* Permitir agregar, eliminar y vaciar el carrito.

* Mantener el estado global con Context API.

* Autenticación de Usuarios

* Crear un AuthContext para manejar el estado de autenticación.

* Implementar un login simulado con localStorage.

* Restringir el acceso al carrito y otras secciones a usuarios autenticados con rutas protegidas.

*Cumpliendo con todos los requerimientos la aplicacion permite navegar por la zonas publicas (`<Sobre mi>` , `<servicios>` , `<productos>`, `<detalle del producto>`) ademas de agregar productos en el carrito del marketplace.*

*Para poder visualizar el carrito y efectuar operaciones. La app obliga al usuario a tener que loguerse mediante un nombre de usuario y correo electronico.*

*Al loguearse con un simple usuario, se puede acceder a la seccion del carrito, en el cual esta detallada los datos de sesion y el listado de productos en el carrito. El cual se puede incrementar o decrementar la cantidad del mismo.*

*Ademas se puede seguir comprando o efectuar la compra o vaciar el carrito.*

*Loguendose como usuario: **admin** y email: **admin@netsurferlp** se accede al panel de control del administrador.*

### Requerimiento #2: CRUD de Productos con MockAPI

**Objetivo: Permitir la administración completa del catálogo de productos mediante operaciones de creación, lectura, actualización y eliminación.**

* Formulario para Agregar Productos

* Implementar un formulario controlado con useState.

* Validar que los campos sean correctos:

* Nombre obligatorio.

* Precio mayor a 0.

* Descripción mínima de 10 caracteres.

* Enviar los datos a MockAPI mediante una solicitud POST.

* Edición y Eliminación de Productos

* Permitir la edición de productos utilizando MockAPI y Context API.

* Mostrar mensajes de error y confirmaciones al usuario.

* Implementar un modal de confirmación antes de eliminar un producto.

* Manejo de Errores

* Mostrar mensajes de error en pantalla si hay problemas con la API.

* Manejar estados de carga y error al obtener los productos.

*Mediante el acceso con las credenciales del administrador se accede al panel de control en el cual se puede realizar las operaciones sobre los productos del marketplace.*

* Agregar Productos
* Editar productos existentes
* Eliminar productos

### Requerimiento #3: Optimización de Diseño y Responsividad

**Objetivo: Mejorar la apariencia y la accesibilidad del sitio utilizando herramientas modernas de diseño y estilización.**

* Diseño Responsivo con Bootstrap y Styled-components

* Implementar el sistema de grillas de Bootstrap para adaptar el contenido a distintos dispositivos.

* Usar styled-components para personalizar los estilos y hacer el código más modular.

* Interactividad Mejorada con React Icons y React Toastify

* Agregar iconos en botones y elementos interactivos con React Icons.

* Implementar React Toastify para mostrar notificaciones de éxito y error.

* SEO y Accesibilidad con React Helmet

* Modificar el `<title>` y `<meta>` con React Helmet para mejorar el SEO.

* Asegurar que los elementos interactivos tengan etiquetas ARIA para accesibilidad.

*Se implemento el uso del framework de css Bootstrap, ademas de la implementacion de styled-components, React Icons, Toastify, etc.*

### Requerimiento #4: Funcionalidades de Búsqueda y Paginación

**Objetivo: Mejorar la usabilidad y navegación del catálogo de productos.**

* Barra de Búsqueda

* Implementar una barra de búsqueda que permita a los usuarios filtrar los productos por nombre o categoría.

* Asegurar que la búsqueda sea rápida y eficiente, mostrando los resultados conforme el usuario escribe.v

* Paginador de Productos

* Implementar un paginador que divida los productos en varias páginas.

* Asegurar que los usuarios puedan navegar entre las páginas sin problemas, mejorando la experiencia de usuario.
*La app incorpora en el market place una barra de busqueda interactiva que busca por nombre de producto como asi tambien por categoria*.
*Ademas de paginar los resultados de las busquedas.*

### Requerimiento #5: Preparación para el Despliegue

**Objetivo: Ajustar los últimos detalles para que la aplicación esté lista para ser publicada en un servidor.**

* Pruebas de Compatibilidad

* Verificar el funcionamiento en móviles, tablets y escritorios.

* Revisar tiempos de carga y experiencia de usuario.

* Optimización del Código

* Revisar el código y eliminar elementos innecesarios.

* Asegurar que el estado global esté bien gestionado.

* Documentación Básica

* Incluir instrucciones en el README.md sobre instalación y uso de la aplicación.

*Deploy realizado sobre servidor de dominio propio.*

* <https://netsurferlp.ar/curso_react/>
