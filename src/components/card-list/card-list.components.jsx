import React from 'react';

import Card from '../card/card.components';
import cusineData from '../../data';

import './card-list.styles.css';
import 'materialize-css/dist/css/materialize.min.css';



const filteredCusines = (cusineData, cusine, rank)=>{
    if (cusine  === 'all'){
        if(rank === 'asc'){
            return cusineData;
        }
        else if(rank === 'dec')
            return cusineData.reverse();
    } else{
        let filteredArr = cusineData.filter(cuisineObj => cuisineObj.CuisineStyle.includes(cusine))
        if(rank === 'asc'){
            return filteredArr;
        }
        else if(rank === 'dec')
            return filteredArr.reverse();
    }
    
};




const CardList = (props)=>{
    
    const {cuisine, rank} = {...props};  
    
        return(
            <div className="row container">
                {            
                filteredCusines(cusineData,cuisine, rank).map(
                    cuisine => <Card 
                        city={cuisine.City} 
                        name={cuisine.Name} 
                        cuisineStyle={cuisine.CuisineStyle} 
                        rating={cuisine.Rating}
                        review={cuisine.Reviews}    
                        key={cuisine.Name}                
                    />)           
                    
                }
            </div>
        )        
    

    

};

export default CardList;