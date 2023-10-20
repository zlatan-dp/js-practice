const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = ['note 1', 'note 2'];

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  listElement.insertAdjacentHTML(
    'beforeend',
    `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${inputElement.value}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`
  );
  inputElement.value = '';
};

function getNoteTemplate(title) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`;
}
