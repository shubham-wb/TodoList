import React from "react";

export default function CompletedTasks(props) {
  let completed_task = props.data;
  console.log(completed_task, "completed task");
  return (
    <>{completed_task ? completed_task.map((elem) => elem.title) : null}</>
  );
}
