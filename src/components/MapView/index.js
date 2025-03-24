import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import './index.css'


const MapView = () => {
  const [mapData, setMapData] = useState({ center: [20.5937, 78.9629], zoom: 5 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token===null){
          navigate("/login")
        }
        console.log(token);
        
        const response = await axios.get('https://assignment-backend-qwoa.onrender.com/api/map', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMapData(response.data);
      } catch (error) {
        alert('User not logged in');
        navigate('/login');
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className='map-con'>
      <div className='map-header'>
        <h1 className='map-heading'>Map</h1>
        <div className='map-links-con'>
          <Link to="/" className='map-link'>
            <p>Home</p>
          </Link>
          <Link to="/dashboard" className='map-link'>
            <p>Dashboard</p>
          </Link>
        </div>
      </div>
      <MapContainer center={mapData.center} zoom={mapData.zoom} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
    </div>
  );
};

export default MapView;