import React from 'react';
import { Link } from 'react-router-dom';
// import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;