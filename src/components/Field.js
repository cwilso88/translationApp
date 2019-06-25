import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;

    render() {
        const text = (this.context.language === 'english') ? 'Name' : (this.context.language === 'spanish') ? 'Nombre' : 'Nome';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;
