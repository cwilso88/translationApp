import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    render() {
        return (
        <div>
            Select A Language: 
            <i onClick={() => this.props.onLanguageChange('english')} className="flag us"></i>
            <i onClick={() => this.props.onLanguageChange('spanish')} className="flag do"></i>
            <i onClick={() => this.props.onLanguageChange('portuguese')} className="flag br"></i>
        </div>
        )
    }
}

export default LanguageSelector;
