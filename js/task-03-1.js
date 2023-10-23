const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const revoveBtn = document.getElementById('remove');
const listElement = document.getElementById('list');

const notes = loadFromLocalStorage('notes');

function render() {
  listElement.innerHTML = '';
  if (notes.length === 0) {
    listElement.innerHTML = `<p>Немає записів</p>`;
  }

  notes.map((note, i) => {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note, i));
  });
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };

  notes.push(newNote);

  saveToLocalStorage('notes', notes);

  render();

  inputElement.value = '';
};

revoveBtn.onclick = function () {
  deleteFromLocalStorage('notes');
  notes.splice(0, notes.length);
  render();
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed;
      saveToLocalStorage('notes', notes);
    } else if (type === 'remove') {
      notes.splice(index, 1);
      saveToLocalStorage('notes', notes);
    }
  }
  render();
};

function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data === null ? [] : JSON.parse(data);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function deleteFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function getNoteTemplate(note, index) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? 'warning' : 'success'
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>`;
}
