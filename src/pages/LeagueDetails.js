import React, { useEffect ,useState} from 'react'
import { useGlobalContext } from '../context';
import { useParams} from 'react-router-dom'
import Banner from '../components/Banner';
import Icon from '../components/Icon';

const LeagueDetails = () => {
  const urls = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';

  const {leagues,loading,fetchLeagues} = useGlobalContext();
   const{id} = useParams()

   useEffect(()=>{
    fetchLeagues(`${urls}${id}`)
  },[id])
 if(loading){
  return(
   <main>
    <h2 style={{textAlign:'center'}}>Please Wait, Data Loading...</h2>
   </main>
  )
 }
 return (
  <main>
  
  <div>
   {leagues.map((league)=>{
    const{strLogo,idLeague,strCountry,intFormedYear,strLeague,strGender,strDescriptionEN, strSport} = league
    return(
      
     <article key={idLeague}>
      <Banner  logo={strLogo}/>
      <div className="main-content">
       <div className="league-info">
         <div className="left">
          <h2>{strLeague}</h2>
          <h4>Founded : {intFormedYear}</h4>
          <h4>Country : {strCountry}</h4>
          <h4>Sports Type : {strSport}</h4>
          <h4>Gender : {strGender}</h4>
         </div>
         <div className="right">
          {strGender === 'Male'? <img src="../images/male.png" alt=""/> : <img src="../images/female.png" alt=""/> }
         </div>
       </div>
       <div className="desc">
       <p>{strDescriptionEN}</p>
       </div>
       <div className="icon">
        <Icon/>
       </div>
      </div>
     </article>
    )
   })}
  </div>
  </main>
 )
}

export default LeagueDetails
