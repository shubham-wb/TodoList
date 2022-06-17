import React, { useState } from "react";
import UnCompletedTasks from "./UnCompletedTasks";
import CompletedTasks from "./CompletedTasks";
import { Button } from "@mui/material";
import "../assets/css/TasksList.css"; //css file
export default function TasksList(props) {
  let [showPendingList, setShowPendingList] = useState(false);
  return (
    <div className='task-list'>
      <div className='btn-container'>
        <Button
          variant='outlined'
          onClick={() => {
            setShowPendingList(false);
          }}
        >
          Tasks To Do
        </Button>
        <Button
          variant='outlined'
          onClick={() => {
            setShowPendingList(true);
          }}
        >
          Completed
        </Button>
      </div>
      {!showPendingList ? (
        <div className='uncompleted-tasks-wrapper'>
          <h2>Tasks</h2>
          <div className='uncompleted-tasks'>
            <UnCompletedTasks
              data={{
                list: props.data.todosList,
                markComplete: props.data.markAsCompleted,
                delete: props.data.deleteTask,
              }}
            />
          </div>
        </div>
      ) : (
        <div className='completed-tasks-wrapper'>
          <h2>Tasks Completed</h2>
          <CompletedTasks data={props.data.completedTasks} />
        </div>
      )}{" "}
    </div>
  );
}
