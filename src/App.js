import React from 'react';
import './App.scss';

import Sidebar from './components/sidebar/sidebar.js';
import Content from './components/content/content.js';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
