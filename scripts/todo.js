'use strict'

let inputTask = document.getElementById('input-task');
let btnAdd = document.getElementById('btn-add');
let toDoList = document.getElementById('todo-list');
let todoItem = document.getElementsByClassName('todo');

let toDoArr = JSON.parse(localStorage.getItem('key')) || [];
let dataUser = JSON.parse(localStorage.getItem('dataUserCurentKey'));
loadTodos(toDoArr);


btnAdd.addEventListener('click', () => {
    let data = inputTask.value;
    if (data) {
        // Thêm data vào toDoArr
        // render lại 
        toDoArr.push({
            job: data,
            checked: false,
        });
        loadTodos(toDoArr);
        console.log(data);
        console.log(toDoArr);
        inputTask.value = '';
    } else {
        alert('Please enter a content');
    }
    // console.log(toDoArr)
    localStorage.setItem('key', JSON.stringify(toDoArr));
    // console.log(data); //test
});

function loadTodos(arr) {
    // text:
    // status:
    toDoList.innerHTML = ''
    let contentString = ''
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${arr[i].job}`
        let span = document.createElement('span');
        span.classList.add("close")
        span.addEventListener('click', function(e) { removeJob(e, i); })
        span.innerHTML = "x";
        li.appendChild(span);
        if (arr[i].checked) li.classList.add("checked");
        li.addEventListener('click', () => { doneJob(i) });
        toDoList.appendChild(li);
    }

};



function doneJob(index) {
    console.log("done " + index)
    let todos = toDoList.getElementsByTagName('li');
    todos[index].classList.add("checked");
    toDoArr[index].checked = true;
    localStorage.setItem('key', JSON.stringify(toDoArr));
}

function removeJob(e, index) {
    e.stopPropagation();
    toDoArr.splice(index, 1);
    loadTodos(toDoArr);
    localStorage.setItem('key', JSON.stringify(toDoArr));
}