import React, { useState } from "react";
import './SearchBar.scss';
import { DataType } from "../../Table/Table";

export interface SearchBarProps {
  ButtonText: string;
  onSearchResult: (result: DataType[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ ButtonText, onSearchResult }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [lenghtError, setLenghtError] = useState(false);
  const [nodata, setNoData] = useState(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchValue.length > 3) {
      setLoading(true);
    fetch(`https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        searchPhrase: searchValue
        })
    })
    .then((response) => response.json())
    .then((data: DataType[]) =>{
        setLoading(false);
        console.log(data)
        if (data.length > 0){
          onSearchResult(data)
        }
        else {
          setNoData(!nodata)
        }

    });
    }
    else {
      setLenghtError(!lenghtError)
    }
    
  };

  return (
    <div>
    <div className="Searchbar_Container">
      <input className="Searchbar-input" value={searchValue} onChange={handleSearchChange} style={{border: lenghtError? "1px solid red": 'none'}} />
      <button className="Searchbar-button" onClick={handleSearchClick}>{ButtonText}</button>
      {loading && <div className="Searchbar-loading"/>}
    </div>
    {nodata && <span className="Searchbar-error">No data</span>}
    {lenghtError && <span className="Searchbar-error">Must be more than 3 signs</span>}
    </div>
  );
};

export default SearchBar;
