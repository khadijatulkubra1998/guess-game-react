import React, { Component } from 'react';
import { InputNumber } from 'antd';
export class Easy extends Component {
    constructor(props) {
        super(props);
       
    this.state = {
        number : "",
       
      };
    }
   inputNumber = (event) => {
        this.setState({ number: event.target.value });
    }
    // guess = () => {
    //     event.preventDefault()
    //     let answer = parseInt(Math.random() * 100)
    //     let userAnswer = parseInt({ number })

    // }
    render() {
        
        return (
            <div>
                <InputNumber
                    defaultValue={3}
                    onChange={this.inputNumber} />
            </div>
        );
    }
}

export default Easy;
