import React, {Component} from 'react';
import {robots} from './robots';
import CardContainer from './CardContainer'
import SearchBox from "./SearchBox";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }

   render(){
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase()
            .includes(this.state.searchField.toLowerCase())
    });

    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <CardContainer robots= {filteredRobots}/>
        </div>
    );
   }
} 

export default App;