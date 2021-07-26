import './App.css';
import React, {useState} from 'react';
import MyComponent from './components/MyComponent';
import {navigate, Router} from '@reach/router';


function App() {

  const [id, setId] = useState("");
  const [selectData, setSelectData] = useState("people");

  const handleSubmit = e =>{
    e.preventDefault();
    navigate("/"+selectData+"/"+id);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstInput">Search for:</label>
          <select value={selectData} onChange={e => setSelectData(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="secondInput">ID:</label>
          <input type="number" onChange={e => setId(e.target.value)}/>
          <input type="submit" value="Search"/>
        </form>
      </div>

      <Router>
        <MyComponent path = "/:select/:id"/>
      </Router>
    </div>
  );
}

export default App;
