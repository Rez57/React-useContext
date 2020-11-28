import React, {useState} from 'react'
import Profile from './components/Profile'
import {UserContext, ColorContext} from './components/MyContext'

function App() {

  const [user, setUser] = useState(
    {
      name: "Lisa",
      age: 8
    }
  )
  


  return (
    <UserContext.Provider value={user}>
      <ColorContext.Provider value={'red'}>
        <Profile/>
      </ColorContext.Provider>
    </UserContext.Provider>   
  );
}

export default App;
