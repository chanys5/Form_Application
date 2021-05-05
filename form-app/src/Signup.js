import {useState} from 'react'

const useSignUpForm = (callback) => {
    const defaultValue = {username: "", password1: "", password2: ""};
    const [inputs, setInputs] = useState(defaultValue);

    const handleSubmit = (event) => {
        if(event)
        {
          event.preventDefault();
        }

        alert(`Form Submitted \nUsername: ${inputs.username}`);
        setInputs(defaultValue);
      }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        console.log(inputs)
    }

    const handleReset = (event) => {
        setInputs(defaultValue);
    }

    return {
        handleSubmit,
        handleInputChange,
        handleReset,
        inputs,
    }
}

export default useSignUpForm;