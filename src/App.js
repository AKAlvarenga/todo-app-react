// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function App() {
  const apiUrl = 'http://localhost:8081/api/task';
  const [tasks, setTasks] = useState([]);
  const api = {
    all: () => axios.get(apiUrl),
    save: (task) => axios.post(apiUrl, {description: task}).then(() => api.all().then(res => setTasks(res.data)))
  };
  useEffect(() => {
    api.all().then(res => setTasks(res.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Todo App
      </header>
      <div className="Container">
        <AddTask onClickHandler={api.save}/>
        <ListTask tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
