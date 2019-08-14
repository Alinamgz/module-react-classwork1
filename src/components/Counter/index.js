import React from 'react';
import './style.sass';

export class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            status: false,
            startValue: this.props.startValue,
        }
    }

    increaseCounter = () => {
        this.setState( (state) => {
            return {
                ...this.state,
                startValue: state.startValue +1
            }
        });
    };

    componentDidMount() {
        console.log("counter mounted");
    }

    componentDidUpdate(prevVal, newVal) {
        console.log("counter updated ", prevVal, newVal);
    }

    componentWillUnmount() {
        console.log("counter unmount");
    }

    render() {
        return (
            <div className="counter">
                <div className="counterValue">
                    {this.state.startValue}
                </div>
                <button onClick={this.increaseCounter}> + </button>
            </div>
        )
    }
}