import React, { useState } from "react";
import "../components/Todo.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Todo2 = () => {
  const [task, setTask] = useState("");

  const [allTasks, setAllTasks] = useState([]);

  const newTask = () => {
    if (task !== "") {
      setAllTasks([...allTasks, task]);
    }

    setTask("");
    console.log(allTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = allTasks.filter((elem, id) => {
      return id !== index;
    });

    setAllTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 div">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 todo-flow">
              <div className="heading">Add Tasks</div>

              <form class="row g-3">
                <div class="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  ></input>
                </div>
                <div class="col-auto">
                  <div type="submit" className="">
                    <i
                      className="bi bi-plus-circle-fill"
                      title="add task"
                      onClick={newTask}
                    ></i>
                  </div>
                </div>
              </form>

              <div className="showTasks">
                {allTasks.map((elem, id) => {
                  return (
                    <div className="eachTasks" key={id}>
                      <h3 className="taskDesc">{elem}</h3>
                      <i
                        className="bi bi-trash3-fill trash"
                        type="submit"
                        title="delete task"
                        onClick={() => deleteTask(id)}
                      ></i>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo2;
