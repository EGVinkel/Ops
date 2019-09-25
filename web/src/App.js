import React from 'react';
import AnimatedNumber from 'react-animated-number';
import './App.css';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>Energy Comsumption 60 Computers</div>
                <p>
                    <AnimatedNumber component="text" value={432000}
                                    style={{
                                        transition: '0.8s ease-out',
                                        fontSize: 150,
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }}
                                    duration={180000}
                                    stepPrecision={0}
                                    initialValue={0}
                    />Joules

                </p>
            </header>
        </div>

    );
}

export default App;
