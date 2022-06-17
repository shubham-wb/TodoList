import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { TextField, Button } from "@mui/material";
import "../assets/css/createTask.css";
import { toast, Toaster } from "react-hot-toast";

function CreateTask(props) {
  let [date, setDate] = useState("");
  let [title, setTitle] = useState("");

  let [tag, setTag] = useState();

  function handleTagSelect(tag, id, color) {
    let btn = document.querySelectorAll(".tag-btn");
    let btns = document.getElementsByClassName("tag-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.backgroundColor = "white";
      btns[i].style.color = "black";
    }
    btn[id - 1].style.backgroundColor = `${color}`;
    btn[id - 1].style.color = "white";

    setTag(tag);
  }

  function handleSubmit() {
    if (!title && !date && !tag) {
      toast.error("Please add something");
    } else if (!title || !date || !tag) {
      toast.error(
        `Please specify ${!title ? "Title " : ""}${!date ? "Date " : ""} ${
          !tag ? "Tag" : ""
        }`
      );
    } else {
      let task = {
        id: Date.now(),
        title: title,
        date: date,
        tag: tag,
      };
      props.data(task);
    }
  }

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='create-task-wrapper'>
        <div className='add-task'>
          <TextField
            id='outlined-basic'
            label='Enter your task '
            variant='outlined'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Select Date'
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='create-task-options'>
          <div className='tags'>
            <Button
              className='tag-btn'
              variant='outlined'
              style={{ borderwidth: "5px", borderColor: "orange" }}
              onClick={() => {
                handleTagSelect("home", 1, "orange");
              }}
            >
              Home
            </Button>
            <Button
              className='tag-btn'
              variant='outlined'
              style={{ borderColor: "red" }}
              onClick={() => {
                handleTagSelect("work", 2, "red");
              }}
            >
              Work
            </Button>
            <Button
              className='tag-btn'
              variant='outlined'
              style={{ borderColor: "purple" }}
              onClick={() => {
                handleTagSelect("personal", 3, "purple");
              }}
            >
              Personal
            </Button>
            <Button
              className='tag-btn'
              variant='outlined'
              style={{ borderColor: "pink" }}
              onClick={() => {
                handleTagSelect("hobby", 4, "pink");
              }}
            >
              Hobby
            </Button>
            <Button
              className='tag-btn'
              variant='outlined'
              style={{ borderColor: "green" }}
              onClick={() => {
                handleTagSelect("shopping", 5, "green");
              }}
            >
              Shopping
            </Button>
          </div>
        </div>
        <div className='submit-task'>
          <Button
            variant='contained'
            onClick={() => {
              handleSubmit();
            }}
          >
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateTask;