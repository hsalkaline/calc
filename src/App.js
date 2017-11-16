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
            sum: '0',
            dif: '0',
            mult: '0',
            div: '0',
            deg: '0',
            root: '0'

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

    onClick = () => {
        this.setState({ sum: +this.state.userInput1 + +this.state.userInput2 });
        this.setState({ dif: +this.state.userInput1 - +this.state.userInput2 });
        this.setState({ mult: +this.state.userInput1 * +this.state.userInput2 });
        this.setState({ div: +this.state.userInput1 / +this.state.userInput2 });
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
                    <button onClick={this.onClick}>
                        Calculation
                    </button>
                </p>
                <h1>
                   Sum: {this.state.sum}
                   Dif:{this.state.dif}
                    Mult:{this.state.mult}
                    Div:{this.state.div}
                </h1>
            </div>
        );
    }
}

export default App;
