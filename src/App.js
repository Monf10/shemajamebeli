import { useState } from 'react';
import './App.css';
import ChangeLanguage from './ChangeLanguage';
import Header from './Header';
import Users from './User';

function App() {
  const [language, setLanguage] = useState("geo")
  return (
    <ChangeLanguage.Provider value={{language,setLanguage}}>
      <Header></Header>
      <Users></Users>
    </ChangeLanguage.Provider>
  );
}

export default App;
