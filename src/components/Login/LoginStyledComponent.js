import styled from 'styled-components'

export const LoginMainContainer=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
`
export const LogoImg=styled.img`
    width: 60px;
    margin-bottom: 10px;
    align-self: center;
`
export const Label=styled.label`
    margin-bottom: 0px;
    padding-bottom: 0px;
    font-size: 14px;
    font-weight: 500;
`
export const InputEl=styled.input`
    height: 30px;
    border-radius: 4px;
    outline: none;
    box-shadow: 1px 1px 2px 4px whitesmoke;
    margin-top: 10px;
    border: none;
    padding: 4px;
    margin-bottom: 40px;
`

export const Form=styled.form`
    padding: 40px;
    box-shadow: 1px 1px 2px 4px whitesmoke;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SubmitBtn=styled.button`
    height: 30px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 160px;
    padding: 10px;
    background-color: rgb(45, 119, 171);
    align-self: center;
    font-weight: bold;
`

export const InputElContainer=styled.div`
    height: 30px;
    border-radius: 4px;
    outline: none;
    box-shadow: 1px 1px 2px 4px whitesmoke;
    margin-top: 10px;
    border: none;
    padding: 4px;
    margin-bottom: 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const PasswordInputEl=styled.input`
    border:none;
    height:100%;
    outline:none;
    width:100%;
`

export const ShowHideBtn=styled.button`
    outline:none;
    border:none;
    cursor:pointer;
    background-color:transparent;
`