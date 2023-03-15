import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import { useFormInputValidation } from 'react-form-input-validation';
const Login = () => {
   // var[value,valuename]=useState();
    //const cap_value=(e)=>{
    //valuename(sname=(e.target.value)) 
    //console.log(value)   
    //}
    const [fields,errors,form]=useFormInputValidation({
    email_address:"",
    password:""
    },{
        email_address:"required|email",
        password:"required"
    })


  return (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
          <h1>WELCOME TO LOGIN</h1>
          <br/>
        <TextField
      
        value={fields.email_address}
        onChange={form.handleChangeEvent}
        onBlur={form.handleBlurEvent}
        name='email_address'
          id="outlined-error"
          label="email"
          helperText={errors.email_address?errors.email_address:""}
        /><br/>
        <TextField
        value={fields.password}
        onChange={form.handleChangeEvent}
        onBlur={form.handleBlurEvent}
        name='password'
          id="outlined-error-helper-text"
          label="password"
          helperText={errors.password?errors.password:""}
        /><br/>
      </div>
    </Box>
  )
}

export default Login
