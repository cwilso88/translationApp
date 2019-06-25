import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    render() {
        return (
        <div>
            Select A Language: 
            <i onClick={() => this.context.onLanguageChange('english')} className="flag us"></i>
            <i onClick={() => this.context.onLanguageChange('spanish')} className="flag do"></i>
            <i onClick={() => this.context.onLanguageChange('portuguese')} className="flag br"></i>
        </div>
        )
    }
}

export default LanguageSelector;
