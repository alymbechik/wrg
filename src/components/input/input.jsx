import React, { useState } from 'react';
import './input.css';
import logo from '../../assets/icon _search_.png';

const Input = (props) => {
  const {
    setisinput,
    getweather,
    setweather,
  } = props;

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setisinput(value);
  };

  const reset = () => {
    setInputValue('');
    setweather([]);
    setisinput('');
  };

  return (
    <div>
      <div className='input'>
        <div className="search">
          <img src={logo} alt="" className='logo'/>
          <input 
            type="text" 
            className='txtfield' 
            placeholder='Search location...' 
            value={inputValue}
            onChange={handleChange}  
          />
        </div>
        <div className='btns'>
          <button className='start' onClick={getweather}>Show weather</button>
          <button className='reset' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
