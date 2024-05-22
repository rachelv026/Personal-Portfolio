import React from 'react';
import './loader.css';
import { ReactComponent as Logo } from './loader.svg'; // Ensure you have the correct path to your SVG

const Loader = () => {
  return (
    <div className="loader-container">
      <Logo className="loader-logo" />
    </div>
  );
};

export default Loader;
