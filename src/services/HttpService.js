import axios from 'axios';

export default class HttpService {

    /**
     * Makes an http GET request
     * @param {*} url to be called
     */
    makeGet(url, params) {
        const config = this.getConfiguration(params);
        return axios.get(url, config)
            .then((res) => {
                return Promise.resolve(res.data.data.results);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

    simpleGet(url) {
        return axios.get(url)
            .then(res => Promise.resolve(res.data))
            .catch(err => Promise.reject(err));
    }

    getConfiguration(params = {}) {
        let config = {
            params: params,
            headers: {
                "Accept": "application/json"
            }
        }
        config.params['apikey'] = '';
        return config;
    }

}