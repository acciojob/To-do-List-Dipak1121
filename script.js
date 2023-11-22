//your code here
let inputField = document.getElementById("newTodoInput");
let btn = document.getElementById("addTodoBtn");
let list = document.getElementById("todoList");
btn.addEventListener("click", onClick);
function onClick() {
	if(inputField.value == ""){
		return;
	}
	let task = document.createElement("li");
	task.innerText = inputField.value;
	list.appendChild(task);
    inputField.value = "";
}
