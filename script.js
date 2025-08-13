const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-button");
const toDoList = document.querySelector("#todo-list");

let editToDo = null;

const addTodo = ()=>{
    const inputText = inputBox.value.trim();

    if(inputText.length <= 0){
        alert("Enter a ToDo");
        return false;
    }

    if(addBtn.value == "Edit"){
        editToDo.target.previousElementSibling.innerText = inputText;
        addBtn.value = "Add";
        inputBox.value  = "";
    }
    else {
    // creating a p and li tag
    const p = document.createElement("p");
    const li = document.createElement("li");
    p.innerText = inputText;
    li.appendChild(p)

    // creating a edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    editBtn.innerText = "Edit"
    li.appendChild(editBtn)

    //creating a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    li.appendChild(deleteBtn);

    //append todolist into ul
    toDoList.appendChild(li)
    inputBox.value = "";
}
}


const updateBtn = (e) => {
    if(e.target.innerText == "Remove"){
        toDoList.removeChild(e.target.parentElement)
    }

    if(e.target.innerText == "Edit"){
        inputBox.value = e.target.previousElementSibling.innerText;
        inputBox.focus();
        addBtn.value = "Edit"
        editToDo = e;
    }
}

toDoList.addEventListener('click', updateBtn)
addBtn.addEventListener('click', addTodo);
