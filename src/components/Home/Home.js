import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTeams(data.teams)
            let teamArray = data.teams
            let newArray = teamArray.slice(0, 18)
        setTeams(newArray);
        // console.log(newArray);

    });
    },[])

    return (
        <div>
        <Header></Header>
              {
                  teams && teams.map(team =><Teams team={team} key ={team.idTeam}></Teams>)
              }  
               
    </div>
    );
};

export default Home;