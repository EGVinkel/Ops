import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AnimatedNumber from 'react-animated-number';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 200, watt: 40, seconds: 0, consumption: 0}
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    tick(){
        this.setState(prevState => ({
            seconds: prevState.seconds +1,
            consumption: prevState.consumption + (this.state.value * this.state.watt)
        }));
    }
    componentDidMount() {
        setInterval(()=>this.tick(), 1000);
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <input type="number" value={this.state.value} onChange={this.handleChange}/>
                    <div>{this.state.value * this.state.watt} Watt</div>
                    <div>Energy Comsumption {this.state.value} Computers</div>
                    <p>
                        <AnimatedNumber component="text" value={this.state.consumption + (this.state.value * this.state.watt)}
                                        style={{
                                            transition: '0.8s ease-out',
                                            fontSize: 150,
                                            transitionProperty:
                                                'background-color, color, opacity'
                                        }}
                                        duration={1000}
                                        stepPrecision={0}
                                        initialValue={this.state.consumption}
                        /> Joules

                        <p>{parseInt(this.state.consumption/125000)} Pieces of paper</p>

                    </p>
                </header>
            </div>

        );
    }

}

export default App;
