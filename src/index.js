// Import React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = function () {
    const buttonText = "Click me!";

    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}> {buttonText} </button>

        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)