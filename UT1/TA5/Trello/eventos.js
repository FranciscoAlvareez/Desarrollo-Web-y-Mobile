// Función para cerrar el modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Función para abrir el modal
function openModal(modal) {
  modal.style.display = "block";
}

// Función para crear una nueva tarjeta
function createTaskCard(task = {}, columnIndex) {
  let newCard = document.createElement("div");
  newCard.className = "tarjeta";

  // Formatear las fechas antes de mostrarlas
  let startDateFormatted = formatDate(task.startDate);
  let endDateFormatted = formatDate(task.endDate);

  let cardContent = `
    <div class="inputs">
      <button class="openTask">
        <p>${task.title || 'Nueva Tarea'}</p>
      </button>
      <div class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <input type="text" placeholder="Titulo" class="title" value="${task.title || ''}" />
          <input type="text" placeholder="Descripción" class="description" value="${task.description || ''}" />
          <input type="text" placeholder="Responsable" class="assignedTo" value="${task.assignedTo || ''}" />
          <input type="date" class="startDate" value="${startDateFormatted || ''}" />
          <input type="date" class="endDate" value="${endDateFormatted || ''}" />
          <input type="text" placeholder="Estado" class="status" value="${task.status || ''}" />
          <input type="text" placeholder="Prioridad" class="priority" value="${task.priority || ''}" />
          <input type="text" placeholder="Comentarios" class="comments" value="${(task.comments || []).join(', ')}" />
        </div>
      </div>
    </div>
  `;

  newCard.innerHTML = cardContent;

  // Agregar la nueva tarjeta al contenedor de tarjetas correspondiente
  let columns = document.querySelectorAll(".cards");
  let cardsContainer = columns[columnIndex].querySelector(".headerCard ~ .listaTareas");
  cardsContainer.appendChild(newCard);

  // Agregar evento de abrir modal al botón de la tarjeta
  let openTaskButton = newCard.querySelector(".openTask");
  openTaskButton.addEventListener("click", function () {
    let modal = newCard.querySelector(".modal");
    openModal(modal);
  });

  // Agregar evento de cerrar modal al botón de cerrar dentro del modal
  let closeButton = newCard.querySelector(".close");
  closeButton.addEventListener("click", function () {
    let modal = closeButton.closest(".modal");
    closeModal(modal);
  });

  // Agregar eventos de cerrar modal haciendo clic fuera del modal
  let modal = newCard.querySelector(".modal");
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

// Función para obtener los datos y crear tarjetas
async function getData() {
  let response = await fetch("http://localhost:3000/api/tasks");
  let tasks = await response.json();

  tasks.forEach((task, index) => {
    createTaskCard(task, index);
  });

  // Agregar eventos de cerrar modal a los botones que se crean dinámicamente
  let modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Evento para abrir el modal al hacer clic en el botón de abrir
  let openTaskButtons = document.querySelectorAll(".openTask");
  openTaskButtons.forEach(button => {
    button.addEventListener("click", function () {
      let modal = button.nextElementSibling; // Obtiene el modal siguiente al botón
      openModal(modal);
    });
  });
}

// Función para formatear la fecha
function formatDate(dateString) {
  if (!dateString) return ''; // Manejar el caso de fecha no definida
  const [day, month, year] = dateString.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

// Cuando el DOM se carga completamente, obtener los datos y agregar eventos
document.addEventListener("DOMContentLoaded", () => {
  getData();

  // Agregar evento para crear una nueva tarjeta
  let addCardButtons = document.querySelectorAll(".addCardButton");
  addCardButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let newTask = {
        title: "Nueva Tarea",
        description: "",
        assignedTo: "",
        startDate: '', // Fecha vacía
        endDate: '', // Fecha vacía
        status: "Por hacer",
        priority: "Normal",
        comments: []
      };

      createTaskCard(newTask, index);
    });
  });
});
