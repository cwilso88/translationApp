import React from 'react';


class App extends React.Component {
  state = { language: 'english' };

  render() {
    return (
      <div className="ui container">
        <div>
          Select A Language: 
          <i className="flag us"></i>
          <i className="flag do"></i>
          <i className="flag br"></i>
        </div>
      </div>
    );
  }
}

export default App;
