document.addEventListener("DOMContentLoaded", () => {
    // FECHAS EDITADAS en formato MM/DD/AAAA para compatibilidad con new Date()
    const fechas = [
        { fecha: "2/3/2025", evento: "Inicio de Clases", tipo: "Escolar", descripcion: "Inicio oficial del año escolar, con acto de inauguración y bienvenida a los estudiantes." },
        { fecha: "3/19/2025", evento: "Día del Padre", tipo: "Escolar", descripcion: "Los estudiantes preparan tarjetas y actividades para homenajear a los padres." },
        { fecha: "4/22/2025", evento: "Día de la Tierra", tipo: "Ecológico", descripcion: "Se realizan ferias ecológicas, campañas de limpieza y charlas sobre el medio ambiente." },
        { fecha: "5/1/2025", evento: "Día del Trabajador", tipo: "Nacional", descripcion: "Feriado nacional, no hay clases." },
        { fecha: "5/27/2025", evento: "Día de la Madre", tipo: "Escolar", descripcion: "Festival escolar con poesías, bailes y reconocimientos a las madres." },
        { fecha: "6/21/2025", evento: "Año Nuevo Andino Amazónico", tipo: "Cultural", descripcion: "Ceremonia ancestral en honor al sol y la renovación del ciclo agrícola." },
        { fecha: "8/6/2025", evento: "Día de la Independencia de Bolivia", tipo: "Nacional", descripcion: "Acto cívico, desfile escolar y actividades patrióticas." },
        { fecha: "6/6/2025", evento: "Día del Maestro", tipo: "Escolar", descripcion: "Los alumnos realizan homenajes, obras teatrales y regalos a los docentes." },
        { fecha: "9/21/2025", evento: "Día del Estudiante y Primavera", tipo: "Escolar", descripcion: "Desfiles, festivales de danza y deportes para celebrar la juventud y la amistad." },
        { fecha: "10/12/2025", evento: "Día de la Diversidad Cultural", tipo: "Cultural", descripcion: "Muestras culturales y exposiciones sobre las raíces indígenas y mestizas." },
        { fecha: "11/2/2025", evento: "Todos Santos", tipo: "Religioso", descripcion: "Se preparan mesas con tantawawas, masitas y se recuerda a los seres queridos." },
        { fecha: "12/15/2025", evento: "Clausura del Año Escolar", tipo: "Escolar", descripcion: "Acto de cierre con entrega de certificados y reconocimientos a los mejores estudiantes." }
    ];

    const tabla = document.querySelector("#tabla-fechas tbody");
    const cardsContainer = document.getElementById("cards-actividades");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrar-modal");
    const modalFecha = document.getElementById("modal-fecha");
    const modalEvento = document.getElementById("modal-evento");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const contador = document.getElementById("contador-proximo");

    // Llenar tabla y modal
    fechas.forEach(e => {
        const fila = document.createElement("tr");
        // Nota: new Date() interpreta las fechas en formato MM/DD/AAAA
        const dateObj = new Date(e.fecha); 
        const options = { day: 'numeric', month: 'long' };
        
        // Agregar la fila a la tabla
        fila.innerHTML = `<td>${dateObj.toLocaleDateString('es-ES', options)}</td><td>${e.evento}</td><td>${e.tipo}</td>`;
        fila.addEventListener("click", () => {
            // Se recomienda usar 'flex' en el JS para que el CSS pueda centrarlo fácilmente
            modal.style.display = "flex"; 
            modalFecha.textContent = dateObj.toLocaleDateString('es-ES', options);
            modalEvento.textContent = e.evento;
            modalDescripcion.textContent = e.descripcion;
        });
        tabla.appendChild(fila);

        // Llenar sección de actividades (cards)
        const card = document.createElement("div");
        // Asegúrate que el nombre de clase "card" coincida con el CSS
        card.classList.add("card-actividad"); 
        card.innerHTML = `<h3>${e.evento}</h3><p>${e.descripcion}</p>`;
        cardsContainer.appendChild(card);
    });

    // Modal cerrar
    cerrarModal.addEventListener("click", () => modal.style.display = "none");
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener("click", (event) => { 
        if (event.target == modal) modal.style.display = "none"; 
    });

    // Contador de próximo evento
    function actualizarContador() {
        const hoy = new Date();
        // Resetear la hora de hoy a 00:00:00 para una comparación precisa de días
        hoy.setHours(0, 0, 0, 0); 
        
        // Filtrar eventos futuros y ordenar
        let proximo = fechas
            .filter(f => new Date(f.fecha) >= hoy)
            .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))[0];
            
        if (proximo) {
            const fechaProx = new Date(proximo.fecha);
            // Calcular la diferencia en días
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;
            const utc1 = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
            const utc2 = Date.UTC(fechaProx.getFullYear(), fechaProx.getMonth(), fechaProx.getDate());
            const diff = Math.floor((utc2 - utc1) / _MS_PER_DAY);
            
            contador.textContent = `🕒 Próximo evento: ${proximo.evento} en ${diff} días`;
        } else {
            contador.textContent = "🎉 Todos los eventos del año escolar han pasado!";
        }
    }
    
    // Llamar a la función al cargar y establecer un intervalo (opcional)
    actualizarContador();
    // setInterval(actualizarContador, 1000 * 60 * 60); // Actualizar cada hora si se desea
});