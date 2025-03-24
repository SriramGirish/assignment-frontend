import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

import {LoginMainContainer,LogoImg, Label,InputEl, Form, SubmitBtn, InputElContainer, PasswordInputEl, ShowHideBtn} from './LoginStyledComponent'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword]= useState(false)
  const navigate = useNavigate();

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('https://assignment-backend-qwoa.onrender.com/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

  const inputType=showPassword? "type" : "password"

  const token=localStorage.getItem("token")
  console.log(token);
  

  return (
    <LoginMainContainer>
      <Form onSubmit={handleLogin}>
      <LogoImg src='https://img.icons8.com/?size=100&id=58751&format=png&color=000000' alt='logo image'/>
      <Label  htmlFor='username'>USERNAME</Label>
      <InputEl type="text"  id='username' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Label  htmlFor='password'>PASSWORD</Label>
      <InputElContainer>
      <PasswordInputEl type={inputType}  id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <ShowHideBtn type='button' onClick={()=>setShowPassword(prev=>!prev)}>
        {showPassword ? <BiHide /> : <BiShow />}
      </ShowHideBtn>
      </InputElContainer>
      
      <SubmitBtn className='submit-btn' type='submit'>Login</SubmitBtn>
      </Form>
    </LoginMainContainer>
  );
};

export default Login;