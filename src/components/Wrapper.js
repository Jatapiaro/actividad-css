import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import HttpService from '../services/HttpService';
import MarvelService from '../services/MarvelService';
import Guardians from '../pages/Guardians';
import SpiderGirl from '../pages/SpiderGirl';

export default class Wrapper extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = new HttpService();
        this.marvelService = new MarvelService(this.httpService);
    }

    /**
    * Renders the component
    */
    render() {
        return (
            <div>
                <Navbar />
                    <BrowserRouter>
                        <Switch>
                            <Route
                                path="/"
                                render={(props) =>
                                    <Home
                                        marvelService={this.marvelService}
                                        {...props} />
                                }
                            exact={true} />
                            <Route
                                path="/guardians-of-the-galaxy"
                                render={(props) =>
                                    <Guardians
                                        marvelService={this.marvelService}
                                        {...props} />
                                }
                                exact={true} />
                            <Route
                                path="/spider-girl"
                                render={(props) =>
                                    <SpiderGirl
                                        marvelService={this.marvelService}
                                        {...props} />
                                }
                                exact={true} />
                        </Switch>
                    </BrowserRouter>
                <Footer />
            </div>
        ); 
    }

}