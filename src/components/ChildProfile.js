import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './stylesheet.css'

const ChildProfile = () => {
  const { childId } = useParams();
  const [child, setChild] = useState(null);

  useEffect(() => {
    // Retrieve child data from local storage based on childId

    const storedChildren = JSON.parse(localStorage.getItem('children')) || [];
    const selectedChild = storedChildren.find((c) => c.id === parseInt(childId, 10));

    setChild(selectedChild);
  }, [childId]);

  return (
    <div className='container' id="profile-body">
       <h1>Child Profile</h1>
    <div className='container' id="profile-details">
 
      {child ? (
        <div>
          <p>First Name: {child.firstName}</p>
          <p>Last Name: {child.lastName}</p>
          <p>Age: {child.age} years old</p>
          <p>Gender: {child.gender}</p>
          <p>Immunization: {child.immunizations}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default ChildProfile;
