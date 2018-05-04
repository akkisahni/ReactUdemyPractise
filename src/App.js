import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      persons :[
      {name:'Akhil', age:26 , id:1},
      {name:'Amit', age:26 , id:2},
      {name:'Ankur', age:26 , id:3}
      ],
      showPersons:false
    };
  }

  togglePersons = () =>{
    this.setState({showPersons:!this.state.showPersons});
  }

  inputChangeHandler = (event, id)=>{
      const personArray = [...this.state.persons];
      personArray.find((person)=>{
          if(person.id === id)
              person.age = event.target.value;
          return person;
          } );
      this.setState({persons:personArray});
  }

    deletePersonHandler = (index) =>{
        const persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons:persons});
    }

  render() {
    const {persons} = this.state;
    const buttonStyle = {
      backgroundColor:'#ffffff',
      color:'#000000',
      height:'40px',
      margin:'10px'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button style={buttonStyle} onClick={this.togglePersons}>Toggle person</button>
          {this.state.showPersons &&
          persons.map((person,index) => {
              return <Person
                  key={person.id}
                  name={person.name}
                  deletePerson = {()=>{this.deletePersonHandler(index);}}
                  inputChangeHandler={this.inputChangeHandler}
                  age={person.age}
                  id={person.id}/>})
          }
        </div>
      </div>
    );
  }
}

export default App;
