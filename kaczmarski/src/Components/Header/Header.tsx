import './Header.scss'
import React from 'react';
import SearchBar from './SearchBar/SearchBar'

const Header: React.FC = () => {
    return (
        <header className="Header">
            <div className="Header_Container">
            <p>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</p>
            <SearchBar ButtonText="SZUKAJ"/>
            </div>
        </header>
    )
}

export default Header;