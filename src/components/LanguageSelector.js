import React, { Component } from 'react';

class LanguageSelector extends Component {
    render() {
        return (
        <div>
            Select A Language: 
            <i onClick={() => this.onLanguageChange('english')} className="flag us"></i>
            <i onClick={() => this.onLanguageChange('spanish')} className="flag do"></i>
            <i onClick={() => this.onLanguageChange('portuguese')} className="flag br"></i>
        </div>
        )
    }
}

export default LanguageSelector;
