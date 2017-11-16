import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sum (a,b) {
    return(a+b);
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput1: '',
            userInput2: '',
            sum: '0'
        };
    }

    handleUserInput1 = (e) => {
        this.setState({
            userInput1: e.target.value
        });
    };

    handleUserInput2 = (e) => {
        this.setState({
            userInput2: e.target.value
        });
    };

    calc = () => {
        this.setState({ sum: +this.state.userInput1 + +this.state.userInput2 });
    };

    render() {
        return (
            <div className="App">

                <form>
                    <label>
                        <p>Var 1:
                            <input onChange={this.handleUserInput1} value1={this.state.userInput1}/>
                        </p>
                        <p>
                            Var 2:
                            <input onChange={this.handleUserInput2} value2={this.state.userInput2}/>
                        </p>
                    </label>

                </form>
                <p>
                    <button onClick={this.calc}>
                        Sum
                    </button>
                </p>
                <h1>
                    {this.state.sum}
                </h1>
            </div>
        );
    }
}

export default App;
