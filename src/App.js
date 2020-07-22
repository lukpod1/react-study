import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "João", age: 20 },
      { name: "Maria", age: 18 },
      { name: "José", age: 22 }
    ]
  })

  // const [otherState, setOtherState] = useState('some other value');

  const [showPersons, setShowPersons] = useState(false);

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  }

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({persons: persons}); 
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Lucas", age: 21 },
        { name: event.target.value, age: 18 }
      ],
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person 
              click={() => deletePersonHandler(index)}
              name={person.name} 
              age={person.age}/>
          )
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi, I'm React APP</h1>
      <button
        style={style}
        onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}

    </div>
  );
}

export default App;
