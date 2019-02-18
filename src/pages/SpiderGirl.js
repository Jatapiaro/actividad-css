import React from 'react';
import Card from '../components/Card';

export default class SpiderGirl extends React.Component {

    state = {
        seriesComics: []
    }


    /**
     * Called before the page is loaded
     */
    componentWillMount() {
        this.props.marvelService.getComics('SPIDERGIRL')
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

                    <h1>Spider-Girl</h1>
                    <p>En este sitio podrás navegar por algunos de los comics de Spider-Girl</p>

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

SpiderGirl.defaultProps = {
    image: 'https://cinergetica.com.mx/wp-content/uploads/2014/10/Spider-Girl.jpg'
}