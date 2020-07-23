import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = (props) => {

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '1', name: "João", age: 20 },
      { id: '2', name: "Maria", age: 18 },
      { id: '3', name: "José", age: 22 }
    ]
  })

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

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons});
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
              age={person.age}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)} 
            />
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
