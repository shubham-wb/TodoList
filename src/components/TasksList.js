import React from "react";
import UnCompletedTasks from "./UnCompletedTasks";
import CompletedTasks from "./CompletedTasks";

export default function TasksList(props) {
  return (
    <div className='task-list'>
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
      <div className='completed-tasks-wrapper'>
        <h2>CompletedTasks</h2>
        <CompletedTasks data={props.data.completedTasks} />
      </div>
    </div>
  );
}
