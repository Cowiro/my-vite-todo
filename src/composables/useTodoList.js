import { ref } from 'vue';

export const useTodoList = () => {
  // 初期化
  const ls = localStorage.todoList;
  const todoListRef = ref([]);
  todoListRef.value = ls ? JSON.parse(ls) : [];

  // 共通処理
  const findById = (id) => {
    return todoListRef.value.find((todo) => todo.id === id);
  };
  const findIndexById = (id) => {
    return todoListRef.value.findIndex((todo) => todo.id === id);
  };

  // 追加
  const add = (task) => {
    const id = new Date().getTime();
    todoListRef.value.push({ id: id, task: task });
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  // 編集
  const editId = ref(-1);
  // フォームの変更
  const show = (id) => {
    const todo = findById(id);
    editId.value = id;
    return todo.task;
  };
  // 値の上書き
  const edit = (task) => {
    const todo = findById(editId.value);
    const idx = findIndexById(editId.value);

    todo.task = task;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
    editId.value = -1;
  };

  // 削除
  const del = (id) => {
    const todo = findById(id);
    const delMsg = '「' + todo.task + '」を削除しますか？';
    if (!confirm(delMsg)) return;

    const idx = findIndexById(id);
    todoListRef.value.splice(idx, 1);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  // タスクの完了
  const check = (id) => {
    // チェックボックスの状態変更
    const todo = findById(id);
    todo.checked = !todo.checked;

    // TODOリストから完了したタスクを削除
    const idx = findIndexById(id);
    todoListRef.value.splice(idx, 1);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  return { todoListRef, add, show, edit, del, check };
};
