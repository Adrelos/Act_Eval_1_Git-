function addTask() {
  const text = readInputTrimmed();

  if (!text) {
    setStatus("No puedes añadir una tarea vacía.", "danger");
    return;
  }

  tasks.push({
    id: nextId++,
    text: text,
    done: false
  });

  clearInput();
  setStatus("Tarea añadida correctamente.", "ok");
  render();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  render();
}

function editTask(id, newText) {
  const task = tasks.find(t => t.id === id);

  if (task) {
    task.text = newText;
  }

  render();
}