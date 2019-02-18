export default class SeriesComic {

    constructor() {
        this.title = '';
        this.description = '';
        this.images = [];
        this.characters = [];
    }

    fillWitResponseData(serieComic) {
        this.title = serieComic.title;
        this.description = serieComic.description;
        this.images = [
            `${serieComic.images[0].path}/portrait_incredible.${serieComic.images[0].extension}`,
            `${serieComic.images[0].path}/standard_incredible.${serieComic.images[0].extension}`,
        ]
        
    }

}