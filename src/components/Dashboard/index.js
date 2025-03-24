import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { Header, Heading,LogoutButton,Div,DashboardMainContainer , LinksCon, Card, India, Text} from './DashboardStyledComponent';

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  console.log(cards);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get('https://assignment-backend-qwoa.onrender.com/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCards(response.data.cards[0]);
      } catch (error) {
        alert('User not logged in');
        navigate('/login');
      }
    };
    fetchData();
  }, [navigate]);

  const renderHeader=()=>(
    <Header className='header'>
      <Heading>Dashboard</Heading>
      <LinksCon>
      <Link to='/' className='link'>
        <LogoutButton>Home</LogoutButton>
      </Link>
      <Link to='/map' className='link'>
        <LogoutButton>Maps</LogoutButton>
      </Link>
      <LogoutButton onClick={onLogoutBtn}>Logout</LogoutButton>
      </LinksCon>
    </Header>
  )

  const onLogoutBtn=()=>{
    localStorage.removeItem("token")
    navigate('/')
  }


  if (token===null){
    return navigate("/login")
  }

  return (
    <DashboardMainContainer>
      {renderHeader()}
      <Text>Explore India</Text>
      <Div>
      
        <Card   onClick={() => navigate('/map')}>
          <India className='country-name'>India</India>
        </Card>
      
      </Div>
    </DashboardMainContainer>
  );
};

export default Dashboard;