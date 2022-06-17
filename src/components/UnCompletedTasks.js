import React from "react";
import { Button } from "@mui/material";
export default function UnCompletedTasks(props) {
  let unCompletedTasks = props.data.list;
  return (
    <>
      {unCompletedTasks && unCompletedTasks !== true
        ? [...unCompletedTasks.keys()].sort().map((k) => (
            <div key={k}>
              <div>{unCompletedTasks.get(k).title}</div>
              <div>{unCompletedTasks.get(k).date}</div>
              <Button
                variant='contained'
                onClick={() => {
                  props.data.markComplete(k);
                }}
              >
                Completed
              </Button>
              <Button
                variant='contained'
                onClick={() => {
                  props.data.delete(k);
                }}
              >
                Delete
              </Button>
            </div>
          ))
        : null}
    </>
  );
}
