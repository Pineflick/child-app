import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheet.css'

const ChildrenList = () => {
  const navigate = useNavigate();
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Retrieve children data from local storage

    const storedChildren = JSON.parse(localStorage.getItem('children')) || [];
    setChildren(storedChildren);
  }, []);

  const handleChildClick = (childId) => {
    // Navigate to the child profile page
    
    navigate(`/child-profile/${childId}`);
  };

  return (
    <div className='container' id="list-profile">
      <h1>List of Saved Children</h1>
      <div className='profile-container'>
      <ul>
        {children.map((child) => (
          
          <li key={child.id} onClick={() => handleChildClick(child.id)}>
            {child.firstName} {child.lastName}
          </li>
          
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ChildrenList;
