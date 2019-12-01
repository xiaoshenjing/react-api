import React from 'react';
import '@/styles/views/App.scss';
import HSideItem from '../components/HSideItem'
import HHeader from '../components/HHeader'
import HContent from '../components/HContent'

function App() {
  return (
    <div className="App">
      <HSideItem />
      <div className="wrapper">
        <HHeader />
        <HContent />
      </div>
    </div>
  );
}

export default App;
