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

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 21 },
        { name: "Maria", age: 19 },
      ],
      // otherState: personsState.otherState
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
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
        {personsState.persons.map(person => {
          return (
            <Person name={person.name} age={person.age}/>
          )
        })}
        {/* <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, 'Lucas!')}
          changed={nameChangeHandler}
        >
          My Hobbies: Signing
          </Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
          /> */}
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
