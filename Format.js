import React from 'react'
import react, {useState} from 'react';
import ToDoList from './ToDoList';

function Format() {
    const[inputList,setInputList]=useState("Buy Apple");
    const[Items, setItems]=useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return[...oldItems, inputList];
        });
        setInputList('');

    };

    const deleteItems = (id) => {
        console.log("delected");

        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;

            })
        })
    }
  return (
    <>
    <div className='main'>
        <div className='center'>
            <h1> To Do List </h1>
            <input 
            type='text' 
            placeholder='Add a Items' 
            value={inputList}
            onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>
            <ol>
                <li> {inputList} </li>

                {Items.map((itemval, index) => {
                    return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />
                })}
            </ol>
        </div>
    </div>
    </>
  )
}

export default Format