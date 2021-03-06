export default class MarvelService {

    /**
     * 
     * @param {*} httpService 
     */
    constructor(httpService) {
        this.httpService = httpService;
        this.route = "https://gateway.marvel.com:443/v1/public";
        this.series = {
            AVENGERS: 9085,
            GUARDIANS: 16410,
            SPIDERGIRL: 417,
        };
        this.comics = {
            AVENGERS: 'https://api.myjson.com/bins/10npdu',
            GUARDIANS: 'https://api.myjson.com/bins/iv242',
            SPIDERGIRL: 'https://api.myjson.com/bins/1283h6',
        }
    }

    getComics(series = 'AVENGERS') {
        return this.httpService.simpleGet(this.comics[series])
            .then((res) => {
                return Promise.resolve(res);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

    /**
     * This was only used to fetch data from the API
     * As the API has a limit of 3000 request at day
     * I moved the processed data to a custom server
     * @param {*} series 
     */
    getSeriesComics(series = 'AVENGERS') {
        const url = `${this.route}/series/${this.series[series]}/comics`;
        return this.httpService.makeGet(url)
            .then((res) => {
                return Promise.resolve(res);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

    /**
    * This was only used to fetch data from the API
    * As the API has a limit of 3000 request at day
    * I moved the processed data to a custom server
    * @param {*} characterURL
    */
    getCharacter(characterUrl) {
        return this.httpService.makeGet(characterUrl)
            .then((res) => {
                return Promise.resolve(res);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

}