// class component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Duc Sang',
        address: 'Ha Noi',
        age: 20
    };

    handleCLick = (event) => {
        console.log('Clicked');
        console.log('My name is ', this.state.name);

        this.setState({
            name: 'Duc Sang 2',
            age: Math.floor(Math.random() * 100)
        });
    }

    handleOnMouseOver() {
        console.log('Mouse over');
    }

    // jsx
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.age} years old<br></br>
                <button onClick={(event) => {this.handleCLick(event)}}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;