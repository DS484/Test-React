import React from "react";

class UserInfo extends React.Component {
     state = {
            name: 'Duc Sang',
            address: 'Ha Noi',
            age: 20
        };
    
        handleOnMouseOver() {
            console.log('Mouse over');
        }
    
        handleOnChange = (event) => {
            this.setState({
                name: event.target.value
            });
        }
    
        handleOnChangeAge = (event) => {
            this.setState({
                age: event.target.value
            });
        }
    
        handleOnSubmit = (event) => {
            event.preventDefault(); // ngan chan reload trang
            alert(this.state)
        }
    
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.age} years old<br></br>
                {/* <button onClick={(event) => {this.handleCLick(event)}}>Click me</button> */}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChange(event)} />
                    <button type="submit">Submit</button>

                    <label>Age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;