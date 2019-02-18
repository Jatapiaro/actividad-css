    /**
     * Called before the page is loaded
     * 5cc4e5f911d67fae169903ac2b859169
     * dec74d66f16edb902f7aea5b4b05d325727f09ec
     */
    /*componentWillMount() {
        this.props.marvelService.getSeriesComics()
            .then((res) => {
                res.map((sc, i) => {
                    if (sc.characters.available !== 0) {

                        let serieComic = new SeriesComic();
                        serieComic.fillWitResponseData(sc);
                        //console.log(serieComic);
                        let seriesComics = this.state.seriesComics;

                        seriesComics.push(serieComic);
                        this.setState({
                            seriesComics: seriesComics
                        }, () => {this.getCharacters(sc, i)});

                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getCharacters = (sc, i) => {
        sc.characters.items.map((c) => {
            this.props.marvelService.getCharacter(c.resourceURI)
                .then((res) => {
                    if (res[0].description.length !== 0) {
                        let seriesComics = this.state.seriesComics;
                        let character = new Character();
                        character.fillWithResponseData(res[0]);
                        if ( typeof seriesComics[i] !== 'undefined' ) {
                            seriesComics[i].characters.push(character);
                            this.setState({
                                seriesComics: seriesComics
                            });
                            console.log(JSON.parse(seriesComics));
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }*/