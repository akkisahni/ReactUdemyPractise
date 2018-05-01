import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      persons :[
      {name:'Akhil', age:26 , id:'1'},
      {name:'Amit', age:26 , id:'2'},
      {name:'Ankur', age:26 , id:'3'}
      ],
      showPersons:false
    };
  }

  showPersons = () =>{
    this.setState({showPersons:true});
  }

  render() {
    const {persons} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.showPersons}>Toggle person</button>
          {this.state.showPersons && persons.map((person) =>{return <Person name={person.name} age={person.age} id={person.id}/>})}
        </p>
      </div>
    );
  }
}

export default App;
