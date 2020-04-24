import React from 'react';

import './App.css';


import InputBox from './components/input-box/inputbox.component';
import CardList from './components/card-list/card-list.components';



class App extends React.Component {
  state={
    cuisine: 'all',
    rank: 'asc'
  }

  handleChange = (e)=>{
    // console.log(this.state)
    e.preventDefault();
     const {name, value} = e.target;
     console.log(name, value);
    this.setState({[name]: value})
  }

  render(){
    return (
      <div>
        <InputBox selectedCuisine={this.state.cuisine} rank={this.state.rank} handleChange={this.handleChange}/> 
        <CardList cuisine={this.state.cuisine} rank={this.state.rank}/>     
      </div>
    );
  }
}

export default App;
