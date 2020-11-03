import React, { useState } from 'react';
import './Content.css';

// We are going to make a to do list.
const Content = () => {
  // Array of objects to mapped in JSX
  const toDoListInitialValues = [
    {
      id: 1,
      title: "Send email to colleague",
    },
    {
      id: 2,
      title: "Make dinner for family"
    },
    {
      id: 3,
      title: "Read that book you're currently reading..."
    }
  ];

  // This creates a state variable call toDoList that contains the values of toDoListInitialValues
  // It also creates a function that allows you to update your state
  const [toDoList, setToDoList] = useState(toDoListInitialValues);

  // Create another state for the input field
  // Take this state and attach it to the input form field
  // This state is going to control the input field's value
  const [newItemValue, setNewItemValue] = useState('');

  // console.log(newItemValue);

  const handleAddItem = () => {
    // When I add an item, I want to update the state
    // Use spread operator to add the items from the original array into a new array

    const toDoListWithNewItem = [
      ...toDoList, // Spread operator is used to preserve the original array from the state
      {
        id: 4,
        title: newItemValue
      }
    ];
    console.log(toDoListWithNewItem);

    // When a user clicks the add item button, I want to update the different states of the app
    setToDoList(toDoListWithNewItem);
    setNewItemValue('');
  }

  // Returning JSX
  return (
    <div>
      <h2>My Todo List:</h2>
      <ul>
        {toDoList.map((listItem) => {
          return <li>{listItem.title}</li>
        })}
      </ul>
      <hr/>
      <div className="addItemForm">
        <label htmlFor="newItem">Add Item Form</label>
        <input type="text" id="newItem" value={newItemValue} onChange={(event) => setNewItemValue(event.target.value)} />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default Content;