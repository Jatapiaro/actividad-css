import React from 'react';
import Card from '../components/Card';
import Image from './../assets/images/avengers.jpeg';

export default class Home extends React.Component {

    state = {
        seriesComics: []
    }

    /**
     * Called before the page is loaded
     */
    componentWillMount() {
        this.props.marvelService.getComics()
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
     * Renders the component
     */
    render() {
        return (
            <div className="content">
                <img className="banner-image" src={this.props.image}/>
                <div className="container">
                    
                    <h1>Bienvenido</h1>
                    <p>En este sitio podrás navegar y encontrar información de algunos cómics de Marvel.</p>

                    <div className="cards">
                        {
                            this.state.seriesComics.map((sc, i) => 
                                <Card key={i} comic={sc}/>
                            )
                        }
                    </div>

                </div>
            </div>
        );
    }

}

Home.defaultProps = {
    image: "https://www.geekinsider.com/wp-content/uploads/2015/03/cover.jpeg"
}