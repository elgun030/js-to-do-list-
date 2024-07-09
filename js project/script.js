const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    
    taskList.appendChild(listItem);
    taskInput.value = '';

    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });
}