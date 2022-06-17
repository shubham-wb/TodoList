import React, { useState } from "react";
import UnCompletedTasks from "./UnCompletedTasks";
import CompletedTasks from "./CompletedTasks";
import { Button } from "@mui/material";

export default function TasksList(props) {
  let [showPendingList, setShowPendingList] = useState(true);
  return (
    <div className='task-list'>
      <div>
        <Button
          variant='contained'
          onClick={() => {
            setShowPendingList(false);
          }}
        >
          Tasks To Do
        </Button>
        <Button
          variant='contained'
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
          <UnCompletedTasks
            data={{
              list: props.data.todosList,
              markComplete: props.data.markAsCompleted,
              delete: props.data.deleteTask,
            }}
          />
        </div>
      ) : (
        <div className='completed-tasks-wrapper'>
          <h2>CompletedTasks</h2>
          <CompletedTasks data={props.data.completedTasks} />
        </div>
      )}{" "}
    </div>
  );
}
