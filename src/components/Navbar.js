import React from 'react';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="nav">

                <div className="nav-header">
                    <a href="/" className="nav-title">SpotyApp</a>
                </div>

                <div className="nav-btn">
                    <label for="menuButton">
                        <span />
                        <span />
                        <span />
                    </label>
                </div>
                <input type="checkbox" id="menuButton"/>

                <div className="nav-links">
                    {
                        this.props.navLinks.map((n, i) => 
                            <a key={i} href={n.href}>{n.name}</a>
                        ) 
                    }
                </div>

            </div>
        );
    }

}

Navbar.defaultProps = {
    navLinks: [
        {
            name: 'México',
            href: '/'
        },
        {
            name: 'Japón',
            href: '/'
        }
    ]
}