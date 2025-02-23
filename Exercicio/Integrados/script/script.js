function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        li.onclick = function() {
            this.classList.toggle("important");
        };
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function changeTextColor() {
    let textElement = document.getElementById("color-text");
    textElement.style.color = textElement.style.color === "green" ? "blue" : "green";
}