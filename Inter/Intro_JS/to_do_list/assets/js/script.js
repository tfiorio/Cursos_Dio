var toDoList = [];
var texto = document.getElementById("textInsert");

function insertTextToDo() {
   let adicionar = toDoList.push(texto.value);
   inserirTarefa();

}

function inserirTarefa() {
   for(i = 0; i < toDoList.length; i++) {
      let newItem = document.getElementById("todo");
      newItem.innerHTML = "<input type='radio' id='" + toDoList[i] + "'>" +
      "<label>" + toDoList[i] + "</label>"
   }  
}

console.log(toDoList);