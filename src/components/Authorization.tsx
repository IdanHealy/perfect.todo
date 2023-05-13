import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {styled} from 'styled-components';

const AuthContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthDiv = styled.div`
  width: 300px;
  height:238px;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'ShaerTechMono';
  z-index: 1000;
  font-size: 15px;
  border-radius: 10px;
`;

const AuthFormSubmitButton = styled.button`
      font-family: play;
      font-size: 20px;
      border: none;
      border-top: transparent;
      border-bottom: 1px solid transparent;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      background: transparent;
      cursor: pointer;
      color: lightgrey;
      user-select: none;
      font-size: 20px;
        text-transform: uppercase;
      &:hover{
        cursor: pointer;
        border-bottom: 2px solid teal;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
      }`

      const AuthInput = styled.input`
        border: none;
        width: 200px;
        height: 50px;
        background-color:rgba(128, 128, 128, 0.2);
        border: none;
        padding-left: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        font-size: 14px;
        color: white;
        font-family: inherit;
        user-select: none;
        &::placeholder {
            font-family: inherit;
            text-transform: uppercase;
            color: lightgrey;
            font-size: inherit;
            font-size: 14px;
        }
        &:focus {
            outline: none;
            font-family: inherit;
            font-size: 14px;
        } 
      `
    const AuthForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content;
        justify-content: center;
        height: 100%;
    `

    const AuthLogo = styled.h1`
        font-family: play;
        color: white;
        font-size: 35px;
        user-select:none;
        text-align: center;
        & span {
        color: teal;
        ;}
    `


const Authorization: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
    <AuthContainer>
      <AuthDiv>
      <AuthLogo className="logo">perfect<span>.todo</span></AuthLogo>
      <AuthForm className="">
        <AuthInput type="email" className="auth-login" required onChange={(e) => setEmail(e.target.value)} value={email}/>
        <AuthInput type="password" className="auth-pass" required onChange={(e) => setPassword(e.target.value)} value={password}/>
        <AuthFormSubmitButton  onClick={()=>store.login(email,password)}>войти</AuthFormSubmitButton>
      </AuthForm>
      </AuthDiv>
      </AuthContainer>
    );
};

export default observer(Authorization);