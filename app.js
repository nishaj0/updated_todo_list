const addbtn = document.querySelector('.addbtn')
const Input = document.querySelector('.input')
const TodoLists = document.querySelector('.todo-lists')
function showMenu(){
  let InputValue = Input.value
  let li = document.createElement('li')
  li.innerText = InputValue;
  TodoLists.appendChild(li)
  Input.value = ""

}

addbtn.addEventListener('click',showMenu)