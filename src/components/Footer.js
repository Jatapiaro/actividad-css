import React from 'react';

export default class Footer extends React.Component {

    /**
    * Renders the component
    */
    render() {
        return (
            <div className="footer">
                <p>©Jacobo Tapia - {new Date().getFullYear()}</p>
            </div>
        );
    }

}