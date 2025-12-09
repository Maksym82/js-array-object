const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = ['записать блок про массивы', 'рассказать теорию объектов'];

function render() {
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]));
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]));
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  listElement.insertAdjacentHTML(
    'beforeend',
    getNoteTemplate(inputElement.value)
  );
  inputElement.value = '';
};

function getNoteTemplate(title) {
  return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${title}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
    `;
}
