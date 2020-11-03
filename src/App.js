import React from 'react';
import './App.css';

// Import custom components
import Header from './components/Header/Header';
import Content from './components/Content/Content';

// App component is the main app that contains all your components
// This is where the overarching skeleton of your app lives
function App() {
  return (
    <div>
      <Header />
      <div className="mainContent">
        <Content />
      </div>
    </div>
  );
}

export default App;
