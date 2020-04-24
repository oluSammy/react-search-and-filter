import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import './card.styles.css';

const Card = (props)=>{
    const {city, name, cuisineStyle, rating, review} = {...props}
    return(
        <div className="col s12 m4 l4">
            <div className="card z-depth-2 cuisine-card">
                <div className="city">{city}</div>
                <div className="name">{name}</div>
                <ul className="collection">
                    {
                        cuisineStyle.map(cuisine => <li className="collection-item" key={cuisine}>{cuisine}</li> )
                    }
                </ul>
                <div className="card-bottom">
                    <p className="rating">{rating}</p>
                    <p className="review">{review}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;