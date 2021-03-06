import React from "react";
import { Button } from "@mui/material";

export default function UnCompletedTasks(props) {
  let unCompletedTasks = props.data.list;

  return (
    <>
      {unCompletedTasks && unCompletedTasks !== true ? (
        [...unCompletedTasks.keys()]
          .sort((a, b) => a.id - b.id)
          .map((k) => (
            <div className='un-cmp' key={k}>
              <div className='un-cmp-details'>
                <input
                  type='checkbox'
                  variant='contained'
                  onChange={() => {
                    props.data.markComplete(k);
                  }}
                ></input>
                <div className='un-cmp-tag'>{unCompletedTasks.get(k).tag}</div>

                <div className='un-cmp-title'>
                  {unCompletedTasks.get(k).title}
                </div>
              </div>
              <div className='un-cmp-date'>{unCompletedTasks.get(k).date}</div>
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
      ) : (
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          Hooray All Tasks completed
        </div>
      )}
    </>
  );
}
