import React, { useState } from "react";
// import Nav from "./Nav";
// import "./todo.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setEdit] = useState("");
  const [newValue, setNew] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    if (task === "") return;

    setList([...list, task]);
    setTask("");
  };

  let handleDelete = e => {
    let index = e.target.id;
    let currentList = list.splice(0, list.length);
    currentList.splice(index, 1);
    setList([...currentList]);
  };
  let handleEdit = e => {
    let index = e.target.attributes.listno.nodeValue;
    if (e.target.innerText === "Update") {
      let currentList = list.slice(0, list.length);
      console.log(currentList);
      currentList[index] = newValue;
      console.log(currentList);
      setList(currentList);
      setEdit("");
      return;
    }
    setNew(list[index]);
    setEdit(index);
  };
  
  return (
    <section className="todo-wrapper">
      <article className="todo-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>-:TODO LIST:-</h1>
          <div className="inner-container">
            <div className="submit-block">
              <input
                type="text"
                placeholder="Enter Your Task"
                value={task}
                onChange={e => setTask(e.target.value)}
              />
              <button>Add</button>
            </div>
            <div className="list-container">
              <ul>
                {list.map((item, index) => {
                  return (
                    <li key={index} className="single-list">
                      {isEdit === `${index}` ? (
                        <input
                          value={newValue}
                          onChange={e => setNew(e.target.value)}
                        ></input>
                      ) : (
                        <h3>{item}</h3>
                      )}

                      <div>
                        <button onClick={handleEdit} listno={index}>
                          {isEdit === `${index}` ? `Update` : "Edit"}
                        </button>
                        <button onClick={handleDelete} id={index}>
                          del
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};

export default TodoList;
