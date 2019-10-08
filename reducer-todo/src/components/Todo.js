import React, { useState, useReducer } from 'react';
import { initialState, Reducer } from '../reducers/Reducer';

const Todo = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  console.log(state);
  return (
    <div>
      <div className='Container'>
        {state.map(state => {
          return (
            <div
              className={state.completed ? 'completed' : ''}
              onClick={() => {
                dispatch({ type: 'Toggle', payload: state.id });
              }}>
              {state.item}
            </div>
          );
        })}

        <input
          className='Input'
          type='text'
          name='newTitle'
          value={newTitleText}
          placeholder='what to do next?'
          onChange={handleChanges}
        />

        <button
          className='button'
          onClick={() => {
            dispatch({ type: 'AddTodo', payload: newTitleText });
          }}>
          Add to Lists
        </button>

        <button
          className='button'
          onClick={() => {
            dispatch({ type: 'RemoveTodo', payload: newTitleText });
          }}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Todo;
