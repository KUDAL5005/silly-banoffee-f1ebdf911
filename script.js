function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Add delete button
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}