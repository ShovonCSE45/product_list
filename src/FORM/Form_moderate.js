import React, { useState } from 'react'
import style from './Form_module.css';

export default function Form_moderate() {
    
    const [user,setUser] =useState({name: "", email: "",password: ""});
    const {name,email,password}=user;


    const handleChange = (e) => {
        const fieldName = e.target.name;
        if (fieldName === 'name'){
            setUser({name: e.target.value, email, password});
        }
        if (fieldName === 'email'){
            setUser({name, email: e.target.value, password});
        }
        if (fieldName === 'password'){
            setUser({name, email, password: e.target.value});
        }
   

    }
    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
    }
  return (
    <div>
        <h2>Modereted Form..</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='form_design_update' onChange={handleChange}>
               <label htmlFor="name">Name</label>
               <input type="text" name='name' id='name' />
            </div>
            <div className='form_design_update' onChange={handleChange}>
               <label htmlFor="email">Email</label>
               <input type="email" name='email' id='email' />
            </div>
            <div className='form_design_update' onChange={handleChange}>
               <label htmlFor="password">Password</label>
               <input type="password" name='password' id='password' />
            </div>
            <div className='form_design_update'>
                <button>Resistered</button>
            </div>
           
        </form>
    </div>
  )
}
