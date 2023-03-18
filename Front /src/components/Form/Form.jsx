import React from 'react';
import validate from './validation.js'

export default function Form (props){
    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = React.useState({
        username: '',
        password: '',
    })

    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors(validate({
            ...userData,
            [e.target.name]: e.target.value
        })); 

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }
    return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" name='username' value={userData.username} onChange={handleInputChange} />
            <label htmlFor="">Password</label>
            <input type="text" name='password' value={userData.password} onChange={handleInputChange}  />
            <button>LOGIN</button>
        </form>
    </div>
    )
}