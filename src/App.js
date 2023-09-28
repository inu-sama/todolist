import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import React, { useState } from 'react';

function App() {

    const toBeCompleted = (complete) => {
        console.log('hello')
    }

    return (
        <div className="App">
            <TodoWrapper title='Get Things Done!' completeState={toBeCompleted}/>
        </div>
    );
}

export default App;
