import React from "react";

export default function CompletedTasks(props) {
  let completed_task = props.data;
  return (
    <>{completed_task ? completed_task.map((elem) => elem.title) : null}</>
  );
}
