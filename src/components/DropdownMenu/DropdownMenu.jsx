import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Name</a>
          <a href="#">Cost</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
