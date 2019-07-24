import React from 'react';


const Card = (props) =>{
    return(
        <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow5'>
            <img alt='photo' src={'https://robohash.org/' + props.username + '?200x200'}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );

}

export default Card;