let input = document.querySelector("#input");
let addBtn = document.querySelector("#add-btn")
let ul = document.querySelector("#ul")
let close = document.querySelector(".close")
let li = document.querySelector("li")


let liArray = [
   " hello world "
]


let liReturn = function (item) {


   for (i = 0; i < liArray.length; i++) {
      let li = document.createElement("li")
      li.append(liArray[i])
      ul.append(li)
      console.log(liArray[i]);

   }
}


let addLi = () => {
   if (input.value) {
      liArray = [...liArray, input.value]

      if(!ul.value){
         liReturn()
      }
      else{
         li.remove()
      }
      

      console.log(liArray)
   }
};
