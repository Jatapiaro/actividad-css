export default class Character {

    constructor() {
        this.name = "";
        this.description = "";
        this.thumbnail = "";
    }

    fillWithResponseData(character) {
        this.name = character.name;
        this.description = character.description;
        this.thumbnail = `${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`;
    }

}