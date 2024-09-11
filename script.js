const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
// adding a event listener to a form
form.addEventListener('submit',function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        const li = document.createElement('button');
        li.textContent = taskText;

        //work of delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';

    }
});
taskList.addEventListener('click', function(event){
    if (event.target.classList.contains('delete-button')) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});

