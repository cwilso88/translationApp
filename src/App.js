import React from 'react';


class App extends React.Component {
  state = { language: 'english' };

  render() {

    return (
      <div className="ui container">
        <div>
          Select A Language: 
          <i onClick={() => this.onLanguageChange('english')} className="flag us"></i>
          <i onClick={() => this.onLanguageChange('spanish')} className="flag do"></i>
          <i onClick={() => this.onLanguageChange('portuguese')} className="flag br"></i>
        </div>
      </div>
    );
  }
}

export default App;
