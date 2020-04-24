import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import './inputbox.styles.css';

const InputBox = (props)=>{

    console.log(props);

    const cuisines = ["French", "Dutch", "Europea", "European", "Gluten Free Options", 
                            "Mediterranean", "International", "Vegan Option", "Contemporary", "Vegan Options", "Asian", "Indonesian", 
                            "Japanese", "Seafood", "Fast Food", "Bar", "American", "Central European", "Vegetarian Friendly", "Pu", 
                            "Healthy", "Cafe", "British", "Italian", "Indian", "Tibetan", "Nepali"];

    return(
        <div className="row">                
            <div className="col s6 m6 l2 offset-l3">
                <form>
                    <label className="label grey-text text-darken-4">Select Cuisine:</label>
                    <select value={props.selectedCuisine} className="browser-default" onChange={props.handleChange} name="cuisine">  
                        <option value='all' >All</option>                      
                        {cuisines.map(cuisine => <option value={cuisine} key={cuisine}>{cuisine}</option> )}
                    </select>
                </form>
            </div>  
            <div className="col s6 m6 l2 offset-l1">
                <label className="label grey-text text-darken-4">Sort By:</label>
                <select value={props.Ranking} className="browser-default" onChange={props.handleChange} name="rank">
                    
                    <option value="asc">Rating: Low to High</option>
                    <option value="dec">Rating: High to Low</option>                        
                </select>
            </div>                
        </div>
    )
};

export default InputBox;