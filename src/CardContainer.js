import React from 'react';
import {robots} from './robots';
import Card from './Card';

const CardContainer = () => {
     return(<div>{
        robots.map((key, index) => {
           return(<Card 
            name={key.name} 
            username={key.username} 
            email={key.email}/>);

        })
    }</div>);

}
export default CardContainer;