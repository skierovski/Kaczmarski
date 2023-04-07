import'./App.scss';
import Header from './Components/Header/Header';
import React from 'react';
import Table from './Components/Table/Table';

const  App: React.FC =() => {
  return (
    <div className="App">
      <Header/>
      <Table/>
    </div>
  );
}

export default App;
