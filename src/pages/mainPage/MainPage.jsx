import React from 'react';
import './MainPage.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import video from '../../assets/47802-451812879_small.mp4';

const MainPage = () => {
  return (
    <div className='Main'>
      <div className='video-background'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Link to="/weather" className="btn-link">
        <Button variant="contained" className='btn1'>Прогноз Погоды</Button>
      </Link>
      <Link to="/currency" className="btn-link">
        <Button variant="contained" className='btn2'>Курс валют</Button>
      </Link>
      <Link to="/got" className="btn-link">
        <Button variant="contained" className='btn3'>Игра престолов</Button>
      </Link>
    </div>
  );
};

export default MainPage;
