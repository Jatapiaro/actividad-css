import React from 'react';
import Card from '../components/Card';

export default class Guardians extends React.Component {

    state = {
        seriesComics: []
    }

    /**
     * Called before the page is loaded
     */
    componentWillMount() {
        this.props.marvelService.getComics('GUARDIANS')
            .then((res) => {
                this.setState({
                    seriesComics: res
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    /**
     * Renders the content
     */
    render() {
        return (
            <div className="content">
                <img className="banner-image" src={this.props.image} />
                <div className="container">

                    <h1>Guardianes de la galaxia</h1>
                    <p>En este sitio podrás navegar por algunos de los comics de Guardianes de la galaxia</p>

                    <div className="cards">
                        {
                            this.state.seriesComics.map((sc, i) =>
                                <Card key={i} comic={sc} />
                            )
                        }
                    </div>

                </div>
            </div>
        );
    }

}

Guardians.defaultProps = {
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/03/Top-15-Guardians-of-the-Galaxy-Stories-Featured-Image.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5"
}