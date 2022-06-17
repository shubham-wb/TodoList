import React, { useState, useEffect } from "react";
import "../assets/css/App.css";
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";

export default function App() {
  let [todosList, setTodosList] = useState();
  let [completedTasks, setCompletedTasks] = useState([]);

  //set tasks from local storage to state
  useEffect(() => {
    let data = localStorage.getItem("todos");
    var todos;
    if (data) {
      todos = new Map(JSON.parse(data));
    }
    let completedTasks = localStorage.getItem("tasks_cmp");
    setTodosList(todos || []); // if todos present set to todos otherwise empty array
    if (completedTasks) {
      setCompletedTasks(JSON.parse(completedTasks));
    }
  }, []);

  //handle todolist state update
  useEffect(() => {
    if (todosList === true) {
      //if todolist gets empty
      localStorage.removeItem("todos");
    }
    if (todosList && todosList !== true) {
      //if todolist !empty
      localStorage.todos = JSON.stringify(Array.from(todosList.entries()));
    }
  }, [todosList]);

  //handle completed tasks update
  useEffect(() => {
    localStorage.setItem("tasks_cmp", JSON.stringify(completedTasks));
  }, [completedTasks]);
  //delete task
  function deleteTask(id) {
    todosList.delete(id); //delete from map
  }

  //mark task as completed
  function markAsCompleted(id) {
    let completed_task = todosList.get(id);
    setCompletedTasks((prev) => [completed_task, ...prev]);
    setTodosList(todosList.delete(id)); //delete from map
  }

  //add task to uncompleted list
  function addTodo(task) {
    if (!todosList || todosList === true) {
      setTodosList(new Map());
    }
    setTodosList((prev) => new Map(prev).set(task.id, task));
    // setTodosList((prev) => new Map([...prev, [task.id, task]]));
  }

  return (
    <div className='App'>
      <CreateTask data={addTodo} />
      <TasksList
        data={{ todosList, completedTasks, deleteTask, markAsCompleted }}
      />
    </div>
  );
}
