class Tarea{
    constructor(){
        let cardContent = `
        <div class="inputs">
          <button class="openTask">
            <p>tarea</p>
          </button> <!-- Cambiado a clase -->
          <div class="modal"> <!-- Cambiado a clase -->
            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
              <input type="text" placeholder="Titulo" class="title" />
              <input type="text" placeholder="Descripción" class="description" />
              <input type="text" placeholder="Responsable" class="assignedTo" />
              <input type="date" class="startDate" />
              <input type="date" class="endDate" />
              <input type="text" placeholder="Estado" class="status" />
              <input type="text" placeholder="Prioridad" class="priority" />
              <input type="text" placeholder="Comentarios" class="comments" />
            </div>
          </div>
        </div>
        `;
    }
}