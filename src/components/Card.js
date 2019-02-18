import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="info-hover">
                    <div className="title"><b>Personajes del comic: </b></div>
                    <div className="characters">
                        {
                            this.props.comic.characters.map((c, i) =>
                                <div className="tooltip">
                                    <img src={c.thumbnail} key={i} />
                                    <span class="tooltiptext">
                                        {`${c.name}: ${c.description}`}
                                    </span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${this.props.comic.images[0]})` }} className="image"/>
                <div style={{ backgroundImage: `url(${this.props.comic.images[0]})` }} className="image-hover" />
                <div className="info">
                    <div className="title"><b>{this.props.comic.title}</b></div>
                    <div className="description" 
                        dangerouslySetInnerHTML={{ __html: this.props.comic.description}}/>
                    <div className="heroes-info">
                        {
                            this.props.comic.characters.length > 0 &&
                            <div className="title">
                                <b> Personajes del comic: </b>
                            </div>
                        }
                        {
                            this.props.comic.characters.length > 0 &&
                            this.props.comic.characters.map((c, i) => 
                                <p key={i} className="character-info">
                                    <img src={c.thumbnail} key={i} /><b>{`${c.name}: `}</b>{`${c.description}`}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

}

Card.defaultProps = {
    comic: {
        title: '',
        description: '',
        images: ['', ''],
        characters: []
    }
}