let input = document.querySelector("#input");
let addBtn = document.querySelector("#add-btn")
let ul = document.querySelector("#ul")
let close = document.querySelector(".close")
let li = document.querySelector("li")


//? adding li from input field and its connected to 'liArray'

let liArray = []

let addLi = () => {
   if (input.value) {
      liArray = [...liArray, input.value]

      liReturn()

      console.log(i);
      console.log(liArray)
   }
};

let i = 0;

let liReturn = function (item) {
   for (; i < liArray.length; i++) {

      let li = document.createElement("li")
      let button = document.createElement("button")

      li.append(liArray[i])

      button.append("x")
      li.append(button)

      ul.append(li)

      console.log(liArray[i]);
   }
}
