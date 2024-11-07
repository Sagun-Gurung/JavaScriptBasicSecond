const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    // const todo = todoList[i];
    const { name, dueDate } = todoList[i];
    // console.log(`render todo list ${name} ${dueDate}`);
    //generating the html
    const html = `
    <div>${name}</div>
    <div> ${dueDate} </div> 
    <button onclick="
        todoList.slice(${i}, 1)
        renderTodoList()
      ">Delete
    </button>`;

    todoListHtml += html;
  }
  console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });
  console.log(todoList);

  renderTodoList();
}
