📅 Calendario Escolar 2025
Este proyecto es un Calendario Escolar Interactivo y Responsivo diseñado para la Unidad Educativa Juana Azurduy De Padilla. Su objetivo es servir como una herramienta digital accesible para consultar todas las fechas, eventos y actividades importantes del año escolar.

El diseño está optimizado para dispositivos móviles, utilizando un tema oscuro (Dark Mode) moderno y elementos interactivos impulsados por JavaScript.

✨ Características Destacadas
Diseño Responsivo (Mobile-First): Experiencia de usuario consistente y optimizada en cualquier dispositivo (teléfonos, tablets y escritorio) gracias a las Media Queries del CSS.

Tema Oscuro Moderno: Uso de variables CSS para un esquema de colores atractivo (--fondo, --primario, --secundario).

Contador Regresivo Dinámico: Muestra el número exacto de días restantes para el próximo evento importante.

Interactividad con Modal: Al hacer clic en una fila de la tabla de fechas, se despliega un modal (popup) con la descripción detallada del evento.

Componentes Modulares:

Tabla de Fechas (#tabla-fechas)

Tarjetas de Actividades (#cards-actividades)

Sección de Presentación de Creadores.

🛠️ Tecnologías
El proyecto fue construido utilizando un stack de desarrollo web clásico:

Tecnología	Propósito
HTML5	Estructura semántica del contenido.
CSS3	Estilizado, animaciones, y responsividad (Media Queries y Flexbox).
JavaScript (ES6)	Lógica de la aplicación: carga de datos, contador de días, y gestión del modal.
Google Fonts	Tipografía Poppins.
🚀 Instalación y Ejecución
Para ejecutar este calendario localmente, simplemente sigue estos pasos:

Clonar o Descargar: Obtén todos los archivos del proyecto (index.html, style.css, script.js y las imágenes de creadores).

Abrir el HTML: Haz doble clic en el archivo index.html. El navegador cargará automáticamente los estilos y la lógica interactiva.

Nota: Asegúrate de que las rutas de las imágenes de los creadores en tu index.html sean correctas y relativas al proyecto, por ejemplo: src="imagen-carlos.jpg".

⚙️ Estructura de Archivos
.
├── index.html        # Estructura principal.
├── style.css         # Todos los estilos, variables y responsividad (Media Queries).
├── script.js         # Lógica de la carga de datos, contador y modal.
└── [imagenes]        # Directorio o archivos de imágenes de los creadores (ej: imagen-carlos.jpg).
📝 Edición y Personalización
Para actualizar el calendario, modificar o añadir nuevos eventos, solo debes editar el array fechas en el archivo script.js:

JavaScript

// script.js
const fechas = [
    // Formato de fecha requerido: MM/DD/AAAA
    { fecha: "2/3/2025", evento: "Inicio de Clases", tipo: "Escolar", descripcion: "..." },
    { fecha: "3/19/2025", evento: "Día del Padre", tipo: "Escolar", descripcion: "..." },
    // Añade más eventos aquí...
];
👥 Equipo de Desarrollo
Este proyecto fue desarrollado bajo la metodología Scrum como parte de un Taller Ágil:

Rol	Nombre
Product Owner	Isaura Cardenas
Scrum Master	Antonio Saavedra
Desarrollador Frontend	Carlos Silva
Desarrollador Frontend	Isaac Rodriguez
Desarrollador Frontend	Ricardo Gareca
<p align="center">
&copy; 2025 Unidad Educativa Juana Azurduy De Padilla | Proyecto: Taller Ágil - Scrum
</p>
