import React from 'react'
import League from '../components/League';

import {data} from '../data'


const Home = () => {

 return (
  <main>
  <div className="hero">
   <h2>World Famous Football Leagues</h2>
  </div>

  <div className='leagues'>
   {data.map((item)=>{
    return(
      <League key={item.id} {...item}/>
    )
   })}
  </div>
    </main>
 )
}

export default Home
