import React from 'react';

// Add css into the header componenter (import it)
import './Header.css';

// Create your component
// Ideally you have one main component that is exported per file
const Header = () => {
  // Do Javascript
  const title = "Day 5 Demo";

  // Return you JSX to be rendered when <Header /> is used
  // In JSX you use className instead of class. This is for JSX interpretation and it's just the way it is
  return (
    <header className="appHeader">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;