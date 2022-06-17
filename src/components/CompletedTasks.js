import React from "react";

export default function CompletedTasks(props) {
  let completed_task = props.data;

  return (
    <div className='completed-tasks-container'>
      {completed_task && completed_task.length !== 0 ? (
        completed_task.map((elem) => (
          <div className='cp-cmp'>
            <div className='cp-cmp-details'>
              <div className='cp-tag'>{elem.tag}</div>
              <div className='cp-title'>{elem.title}</div>
            </div>
            <div className='cp-date'>{elem.date}</div>
          </div>
        ))
      ) : (
        <div style={{ height: "100%", width: "100%" }}>
          No Task completed Yet
        </div>
      )}
    </div>
  );
}
