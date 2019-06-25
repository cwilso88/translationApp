import React from 'react';
import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';
import { LanguageStore } from './context/LanguageContext';


class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
      <LanguageStore>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
            <UserCreate /> 
        </LanguageStore>
      </div>
    );
  }
}

export default App;
