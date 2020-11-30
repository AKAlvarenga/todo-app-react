// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function App() {
  const api = 'http://localhost:8081/api/task';
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchAll().then(res => setTasks(res.data));
  }, []);
  const fetchAll = () => axios.get(api);
  const addNew = (task) => axios.post(api, {description: task}).then(() => fetchAll());
  return (
    <div className="App">
      <header className="App-header">
        Todo App
      </header>
      <div className="Container">
        <AddTask onClickHandler={addNew}/>
        <ListTask tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
