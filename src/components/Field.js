import React, { Component } from 'react';
import LanguageContex from '../context/LanguageContext';

class Field extends Component {
    static contextType = LanguageContex;

    render() {
        const text = (this.context === 'English') ? 'Name' : (this.context === 'Spanish') ? 'Nombre' : 'Nome';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;
