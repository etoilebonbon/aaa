const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

let toDos = [ ] //빈배열에 담아주기 위함.

function saveToDos() {
    // console.log(toDos)
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(e) { //e = event
    // alert("삭제");
    const li = e.target.parentElement
    li.remove()
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo;
    toDoList.appendChild(li)
}

function handleToDoSubmit (event) {
    event.preventDefault(); //새로고침 막음
    // console.log(toDoInput.value)
    const newTodo = toDoInput.value;

    toDoInput.value = "";

    // 그려주는 함수
    paintToDo(newTodo)
    
    //로컬스토리지에 저장하는 함수
    toDos.push(newTodo)
    saveToDos();
} 

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem("todos")
//console.log(saveToDos) //string타입으로 저장됨

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    toDos.forEach((item) => paintToDo(item))
}


