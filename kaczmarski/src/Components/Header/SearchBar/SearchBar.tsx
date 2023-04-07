import React from "react";
import './SearchBar.scss'

export interface SearchBarProps {
    ButtonText: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ButtonText}) => {
    return(
        <div className="Searchbar_Container">
            <input className='Searchbar-input'/>
            <button className='Searchbar-button'>{ButtonText}</button>
        </div>
    )
}

export default SearchBar;