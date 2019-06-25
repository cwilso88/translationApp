import React from 'react';
import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';
import { LanguageStore } from './context/LanguageContext';


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
      <LanguageStore>
        <LanguageSelector/>
            <UserCreate /> 
        </LanguageStore>
      </div>
    );
  }
}

export default App;
