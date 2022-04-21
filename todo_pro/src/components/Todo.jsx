import React, { useState } from "react";
// import { useRoutes } from "react-router-dom";

const Todo = () => {
  let [store, setStore] = useState("");
  let [iterate, setIterate] = useState([]);
  const [isEdit, setEdit] = useState("");
  const [newValue, setNew] = useState("");
  // useRoutes()
  


  //  to store the data
  let handlesubmit = e => {
    e.preventDefault();
    if (store === "")
    return;
    setIterate([...iterate, store]);
    setStore("")
  }


  // to delete the data
  let handleDelete = e => {
    console.log("delete");
    let index = e.target.id;
    let currentList = iterate.slice(0, iterate.length);
    currentList.splice(index, 1);
    setIterate([...currentList]);
  }


  // to edit and update
    let handleEdit = e => {
    let index = e.target.attributes.listno.nodeValue;
    if (e.target.innerText === "Update") {
      let currentList = iterate.slice(0, iterate.length);
      console.log(currentList);
      currentList[index] = newValue;
      console.log(currentList);
      setIterate(currentList);
      setEdit("");
      return;
    }
    setNew(iterate[index]);
    setEdit(index);
  }

  return (
    <section>
      <article>
        <h1>TODO LIST</h1>
        <form className="info" onSubmit={handlesubmit}>
          <input
            type="text"
            name="task"
            id="task"
            onChange={e => setStore(e.target.value)}
            value={store}
          />
          <button>Submit</button>
          <div className="adding_tasks">
            {iterate.map((item, index) => {
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
                  <div className="task_btns">
                    <button onClick={handleEdit} listno={index}>
                      {isEdit === `${index}` ? `Update` : "Edit"}
                    </button>
                    <button onClick={handleDelete} id={index}>
                      Delete
                    </button>
                  </div>
                </li>               
              )
            })}
          </div>
        </form>
      </article>
    </section>
  );
};

export default Todo;
