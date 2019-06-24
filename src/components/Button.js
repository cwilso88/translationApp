import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends Component {
    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Enviar'}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button;
