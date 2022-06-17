import React, { useState, useEffect } from "react";
import "../assets/css/App.css"; //css
//components
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";
import { NavBar } from "./NavBar";
//other functions
import { Toaster, toast } from "react-hot-toast";

//App component
export default function App() {
  let [todosList, setTodosList] = useState();
  let [completedTasks, setCompletedTasks] = useState([]);
  let [showCreate, setShowCreate] = useState(false);
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
    setTodosList((prev) => {
      const newState = new Map(prev);
      newState.delete(id);
      return newState;
    });
    toast.success("post deleted succesfully");
    //delete from map
  }

  //mark task as completed
  function markAsCompleted(id) {
    let completed_task = todosList.get(id);
    setCompletedTasks((prev) => [completed_task, ...prev]);
    setTodosList(todosList.delete(id)); //delete from map
    toast.success("Task marked as completed");
  }

  //add task to uncompleted list
  function addTodo(task) {
    if (!todosList || todosList === true) {
      setTodosList(new Map());
    }
    setTodosList((prev) => new Map(prev).set(task.id, task));
    toast.success("Task added Succesfully ");
  }

  function handleShowCreate() {
    setShowCreate(false);
  }
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />{" "}
      <div className='App'>
        <NavBar />
        <div className='create-task-banner'>
          <h1>Add a New Task </h1>
          <button
            className='add-new-btn'
            onClick={() => {
              setShowCreate((prev) => !prev);
            }}
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png'
              alt='add'
            ></img>
          </button>
        </div>
        {showCreate ? (
          <CreateTask data={{ addTodo, handleShowCreate }} />
        ) : null}

        <TasksList
          data={{ todosList, completedTasks, deleteTask, markAsCompleted }}
        />
      </div>
    </>
  );
}
