import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Table, { DataType } from './Components/Table/Table';

function App() {
  const [searchResult, setSearchResult] = useState<DataType[]>([]);

  const handleSearchResult = (result: DataType[]) => {
    setSearchResult(result);
    console.log(searchResult)
  };

  return (
    <div className="App">
      <Header onSearchResult={handleSearchResult} ButtonText={'SZUKAJ'} />
      <Table searchData={searchResult} />
    </div>
  );
}

export default App;
