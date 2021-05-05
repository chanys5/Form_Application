import React, {useState} from 'react'
import './App.css';

function App() {
  const [inputs, setInputs] = useState({})


  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    if(event)
    {
      event.preventDefault();
    }
      
    alert(`Form Submitted \nUsername: ${inputs.username}`);
    // setInputs(inputs => ({...inputs, [event.target.name]: ""}));
  }

  const handleReset = (event) => {
    setInputs(inputs => ({...inputs, [event.target.name]: ""}));
  }

  console.log("refreshed")
  return (
    <div className="App">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label>
            Username:
            <input type="text" value={inputs.username} onChange={handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={inputs.password1} onChange={handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Re-enter Password:
            <input type="password" value={inputs.password2} onChange={handleInputChange}/>
          </label>
        </div>
        <input type="submit" value="Submit"/>
        <input type="reset"/>
      </form>
    </div>
  );
}

export default App;
