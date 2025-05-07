import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import tick from "../assets/tick.png";
import React, { useRef, useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState(["Eat", "Shower", "Sleep"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
    //console.log(newTask);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleMoveUpTaskApp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function handleMoveDownTaskApp(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt=""></img>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          onClick={handleAddTask}
        >
          ADD +
        </button>
      </div>

      <div className="flex-1 items-center my-3 gap-2">
        <ol>
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex flex-1 items-center cursor-pointer my-3"
            >
              <div className="flex flex-1">
                <img src={tick} alt="" className="w-7" />
                <span className="text-slate-700 ml-4 text-[17px]">{item}</span>
              </div>
              <div className="ml-3 space-x-2">
                <button
                  className="border-none rounded-full bg-red-600 w-19 h-7 text-white cursor-pointer"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="border-none rounded-full bg-black w-19 h-7 text-white cursor-pointer"
                  onClick={() => handleMoveUpTaskApp(index)}
                >
                  Up
                </button>
                <button
                  className="border-none rounded-full bg-black w-19 h-7 text-white cursor-pointer"
                  onClick={() => handleMoveDownTaskApp(index)}
                >
                  Down
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
