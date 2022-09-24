let input = document.querySelector("#input");
let addBtn = document.querySelector("#add-btn")
let ul = document.querySelector("#ul")

let addLi = () => {
   if (input.value) {
      const liCreate = document.createElement("li");

      liCreate.append(input.value)
      ul.append(liCreate)
   }
};