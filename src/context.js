// import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[leagues,setLeagues] = useState([]);
  const [loading,setLoading] = useState(true)

 
  

  const fetchLeagues = async(url)=>{
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json()
    setLoading(false)
    const leagues = data.leagues
    setLeagues(leagues)
  }
 

  return <AppContext.Provider value={{leagues,loading,fetchLeagues}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
