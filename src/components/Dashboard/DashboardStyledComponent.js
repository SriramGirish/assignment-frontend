import styled  from "styled-components";

export const Header=styled.div`
    display:flex;
    justify-content:space-between;
    padding-left:20px;
    padding-right:20px;
    font-family: 'Courier New', Courier, monospace;
`

export const Heading=styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-weight:bold;
    color:white;
`

export const LogoutButton=styled.button`
    font-size:18px;
    border:none;
    background-color:transparent;
    border-radius:5px;
    font-weight:bold;
    cursor:pointer;
    color:white;
    font-family: 'Courier New', Courier, monospace;
`

export const Div = styled.div`
    display:flex;
    padding:40px;
    justify-content:space-around;
    align-items:center;
    height:60%;
`

export const DashboardMainContainer=styled.div`
    height:100vh;
    background-color:black;
`

export const LinksCon=styled.div`
    display:flex;
    align-items:center;
`

export const Card=styled.div`
    width:50vw;
    color:white;
  
    border-radius:10px;
    display:flex;
    align-items:flex-end;
    width:400px;
    box-shadow:1px 2px 1px 4px #212020;
    padding:20px;
    margin:40px;
    background-image:url('https://cdn.pixabay.com/animation/2022/11/13/07/16/07-16-41-513_512.gif');
    background-size:cover;
    height:300px;
`

export const India=styled.p`
    font-size:20px;
    font-weight:bold;
    font-family:sans-serif;
`

export const Text=styled.p`
    color:white;
    font-size:20px;
    margin-left:20px;
    font-family: 'Courier New', Courier, monospace;
`