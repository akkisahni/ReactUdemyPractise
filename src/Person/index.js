import React from 'react';
import './person.css';
const Person = (props) =>{
	return(<div className="person">
			<p> {`hi my name is ${props.name} and my age is ${props.age}`}</p>
			<input type="text" value={props.age} onChange={(event)=>{props.inputChangeHandler(event,props.id)}}/>
		</div>)
}
export default Person;