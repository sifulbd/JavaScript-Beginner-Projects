const h2 = document.querySelector('h2');
const thetodo = document.querySelector('.thetodo');
const todoInput = document.querySelector('.todoinput');
const todoAddbtn = document.querySelector('.addbtn');
const ulTodo = document.querySelector('.todo-collection');
const finterInput = document.querySelector('.todofilter');
const clearBtn = document.querySelector('.clrbtn');
const alerts = document.querySelector('.alert-success');
const alertd = document.querySelector('.alert-danger');

document.addEventListener('DOMContentLoaded', gettasks);
todoAddbtn.addEventListener('click', addTodo);
ulTodo.addEventListener('click', deleteTodo);
clearBtn.addEventListener('click', clearalltask);

// Load tasks from local storage
function gettasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Add li to ul
        const liTodo = document.createElement('li');
        liTodo.className = 'list-group-item';
        liTodo.textContent = task;
        // add li todo text 
        const liText = document.createElement('span');
        liText.className = 'badge';
        liText.innerHTML = '<i class="glyphicon glyphicon-remove"></i>';        
        liTodo.appendChild(liText);  
        // Add li text to ul
        ulTodo.appendChild(liTodo);  
    });
}

function addTodo() {
    const TodoInputContent  = todoInput.value;  
    if(TodoInputContent === '') {
        
    }else {
        // Add li to ul
        const liTodo = document.createElement('li');
        liTodo.className = 'list-group-item';
        liTodo.textContent = TodoInputContent;
        // add li todo text 
        const liText = document.createElement('span');
        liText.className = 'badge';
        liText.innerHTML = '<i class="glyphicon glyphicon-remove"></i>';        
        liTodo.appendChild(liText);  
        // Add li text to ul
        ulTodo.appendChild(liTodo);  

        storeTaskInLocalStorage(todoInput.value);
        // Clear input
        todoInput.value  = '';
    }
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Delete single todo
function deleteTodo(e) {
    if(e.target.parentElement.classList.contains('list-group-item')) {
       e.target.parentElement.remove();
    }
    removeraskfromlocalstorage(e.target.parentElement);
}

function removeraskfromlocalstorage(tasksItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(tasksItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear all
function clearalltask() {

    // Normal ways
    // ulTodo.innerHTML = '';
    while(ulTodo.firstChild) {
        ulTodo.removeChild(ulTodo.firstChild);
    }
    //remove from local storage
    clearalltaskfromlocals();
}

function clearalltaskfromlocals() {
    localStorage.clear();
}