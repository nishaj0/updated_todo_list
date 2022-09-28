const addbtn = document.querySelector(".addbtn");
const Input = document.querySelector(".input");
const TodoLists = document.querySelector(".todo-lists");
function showMenu() {
  let InputValue = Input.value;
  let li = document.createElement("li");
  li.innerText = InputValue;
  TodoLists.appendChild(li);
  Input.value = "";
  let trash = document.createElement("i");
  trash.classList.add("ri-delete-bin-4-fill");
  li.appendChild(trash);
}

// This is function for deleting list ,
function deletelist(event) {
  if (event.target.classList[0] == "ri-delete-bin-4-fill") {
    let parent = event.target.parentElement;
    parent.classList.add('slideDown')
    parent.addEventListener("transitionend", () => {
      let parent = event.target.parentElement
      parent.remove();
    });
  }
}

TodoLists.addEventListener("click", deletelist);
addbtn.addEventListener("click", showMenu);
