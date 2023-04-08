import React from "react";
import './Header.scss'
import { SearchBarProps } from "./SearchBar/SearchBar";
import SearchBar from "./SearchBar/SearchBar";
import { DataType } from "../Table/Table";

interface HeaderProps {
  onSearchResult: (result: DataType[]) => void;
}

const Header: React.FC<HeaderProps & SearchBarProps> = ({ onSearchResult, ButtonText }: HeaderProps & SearchBarProps) => {

  return (
    <header className="Header">
            <div className="Header_Container">
            <p>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</p>
            <SearchBar ButtonText="SZUKAJ" onSearchResult={onSearchResult}/>
            </div>
        </header>
  );
}

export default Header;
