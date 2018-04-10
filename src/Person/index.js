import React from 'react';
const Person = (props) =>{
	return(<div className="person">
			<h1> {`hi my name is ${props.name} and my age is ${props.age}`}</h1>
			<input type="text" value={props.age} />
		</div>)
}
export default Person;