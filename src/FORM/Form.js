import React, { useState } from 'react'
import style from './Form_module.css';

export default function Form() {
const [name, setName] = useState ("")
const [email, setEmail] = useState ("")
const [password, setPassword] = useState ("")

const handleNameChange = (e) => {
  setName(e.target.value);
}

const handleEmailChange = (e) => {
  setEmail(e.target.value);
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
}
const handleSubmit = (e) => {
  console.log("From is Called")
  let userInfo ={
    name: name,
    email: email,
    password: password

  }
  console.log(userInfo);
  e.preventDefault();
}

  return (
    <div>
        <h1>Resister Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className='from_design'>
           <label htmlFor="name">Name: </label>
           <input type="text" name='name' id='name' value={name} onChange={handleNameChange}/>
        </div>
        <div className='from_design'>
           <label htmlFor="email">Email: </label>
           <input type="email" name='email' id='email' value={email} onChange={handleEmailChange}/>
        </div>
        <div className='from_design'>
           <label htmlFor="password">Password: </label>
           <input type="password" name='password' id='password' value={password} onChange={handlePasswordChange} />
        </div>
        <div className='from_design'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
    
  )
}
