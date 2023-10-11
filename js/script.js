window.onload = () => {
  const btnAdd = document.getElementById("add-task");
  btnAdd.onclick = function (e) {
    e.preventDefault();
    const task = document.getElementById("task");

    const main = document.getElementsByTagName("main")[0];
    console.log(main);

    const newTask = task.value;

    const divNewTask = document.createElement("div");

    const pNewTask = document.createElement("p");
    pNewTask.innerText = newTask;

    pNewTask.onclick = function (e) {
      const ptext = e.target;
      ptext.className = "barred-text";
    };

    const btnNewTask = document.createElement("button");
    btnNewTask.innerText = "Delete";

    btnNewTask.onclick = function (e) {
      const clickedBtn = e.target;
      clickedBtn.parentNode.remove();
    };

    divNewTask.appendChild(pNewTask);
    divNewTask.appendChild(btnNewTask);

    main.appendChild(divNewTask);
    task.value = "";
  };
};

console.log(document.getElementsByTagName("main"));
