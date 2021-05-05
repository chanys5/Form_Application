import React from 'react'
import './Form1.css';
import useSignUpForm from './Signup.js';

function Form1() {

  const {inputs, handleInputChange, handleSubmit, handleReset} = useSignUpForm();

  console.log("refreshed")
  return (
    <div className="App">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={inputs.username} onChange={handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password1" value={inputs.password1} onChange={handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Re-enter Password:
            <input type="password" name="password2" value={inputs.password2} onChange={handleInputChange}/>
          </label>
        </div>
        <input type="submit" value="Submit"/>
        <input type="reset"/>
      </form>
    </div>
  );
}

export default Form1;
