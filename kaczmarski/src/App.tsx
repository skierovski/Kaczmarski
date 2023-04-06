import styles from './App.module.css';
import Header from './Components/Header/Header';
import React from 'react';

const  App: React.FC =() => {
  return (
    <div className={styles.App}>
      <Header/>
    </div>
  );
}

export default App;
