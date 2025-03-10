// class component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Duc Sang',
        address: 'Ha Noi',
        age: 20
    };

    // jsx
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.age} years old
            </div>
        );
    }
}

export default MyComponent;