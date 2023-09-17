import React, { useState } from 'react';
import style from '../styles/Dropdown.module.css';

const Dropdown1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={style.dropdown} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={style.dropbtn1} onClick={toggleDropdown}>
        {selectedOption ? selectedOption : ''}
      </button>
      {isOpen && (
        <div className={style.dropdownContent}>
          <a href="#" onClick={() => handleOptionClick('1')} className={selectedOption === '1' ? style.selected : ''}>1</a>
          <a href="#" onClick={() => handleOptionClick('2')} className={selectedOption === '2' ? style.selected : ''}>2</a>
          <a href="#" onClick={() => handleOptionClick('3')} className={selectedOption === '3' ? style.selected : ''}>3</a>
          <a href="#" onClick={() => handleOptionClick('4')} className={selectedOption === '4' ? style.selected : ''}>4</a>
          <a href="#" onClick={() => handleOptionClick('5')} className={selectedOption === '5' ? style.selected : ''}>5</a>
          <a href="#" onClick={() => handleOptionClick('6')} className={selectedOption === '6' ? style.selected : ''}>6</a>
          
        </div>
      )}
    </div>
  );
};

export default Dropdown1;