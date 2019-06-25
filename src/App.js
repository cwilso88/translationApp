import React from 'react';
import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';
import LanguageContext from './context/LanguageContext';


class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector />

        <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
        </LanguageContext.Provider>   
      </div>
    );
  }
}

export default App;
