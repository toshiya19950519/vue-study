import { ref } from "vue";

export const useTodoList = () => {
  const todoList = ref<{ id: number; task: string; checked: boolean }[]>([]);
  const ls = localStorage.todoList;
  todoList.value = ls ? JSON.parse(ls) : [];

  const findById = (id: number) => {
    return todoList.value.find((todo) => todo.id === id);
  };
  const findByIdIndex = (id: number) => {
    return todoList.value.findIndex((todo) => todo.id === id);
  };

  const add = (task: string) => {
    const id = new Date().getTime();
    todoList.value.push({ id: id, task: task, checked: false });

    localStorage.todoList = JSON.stringify(todoList.value);
  };

  const editId = ref(-1);
  const show = (id: number) => {
    const todo = findById(id);
    editId.value = id;
    return todo?.task;
  };

  const edit = (task: string) => {
    const todo = findById(editId.value);
    const idx = findByIdIndex(editId.value);

    if (todo) {
      todo.task = task;
      todoList.value.splice(idx, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);

      editId.value = -1;
    }
  };

  const del = (id: number) => {
    const todo = findById(id);
    if (todo) {
      const delMsg = "けす？";
      if (!confirm(delMsg)) return;

      const idx = findByIdIndex(id);
      todoList.value.splice(idx, 1);
      localStorage.todoList = JSON.stringify(todoList.value);
    }
  };

  const check = (id: number) => {
    const todo = findById(id);
    const idx = findByIdIndex(id);

    if (todo) {
      todo.checked = !todo.checked;
      todoList.value.splice(idx, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);
    }
  };

  return { todoList, add, show, edit, del, check };
};
