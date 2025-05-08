import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/members')
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching members:', error);
      });
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        members.map((member) => (
          <div key={member._id} className="card">
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              width="100"
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/members/${member._id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewMembers;
