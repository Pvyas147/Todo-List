//Select Elements
let form = document.querySelector("form")
let input = document.querySelector("input")
let listGroup = document.querySelector("ul")

//Event Handlers
form.addEventListener("submit" , saveTodo)



//Save Todo

function saveTodo(e){
    e.preventDefault()
    let newTodo = document.createElement("li")
    newTodo.className = "list-group-item"
    newTodo.innerText = input.value;
    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.className = "btn btn-danger btn-sm float-end"
    newTodo.appendChild(delBtn)
    listGroup.appendChild(newTodo)
    form.reset()
}



listGroup.addEventListener("click" , deleteTodo = (e) => {
    if(e.target.className.includes("btn-danger")){
      let currentItem = e.target.parentElement
      listGroup.removeChild(currentItem)
    }
  }
)
 
