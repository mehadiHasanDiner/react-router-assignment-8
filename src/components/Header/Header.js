import React from 'react';
// import { useParams } from 'react-router';
import './Header.css';

const Header = () => {
    // const {idTeam} = useParams();

    return (
        <div className= "header-style">
            <div className ="header-name">
            <div>Wikipedia</div>
            <div>Of</div>
            <div>World Famous Football Clubs </div>
            </div>
        </div>
    );
};

export default Header;