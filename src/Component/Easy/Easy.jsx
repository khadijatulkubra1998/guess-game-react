import React, { Component } from 'react';
import { Button, Icon } from 'antd';
export class Easy extends Component {
    constructor(props) {
        super(props);

        this.state = { number: "", answer: "",userAnswer:"", };
    }
    inputNumber = (e) => {
        this.setState({ 
            number: e.target.value,
            answer : parseInt(Math.random() * 100),
            userAnswer : parseInt(this.state.number)
         });
    }

   
    
    guess = () => {

        let guess = this.state.answer === this.state.userAnswer;
        guess ? alert("yeeeahhh!!! won") : alert("ooopppssss wrong answer")
       
    }
    render() {
        console.log(this.state.number)
        console.log(this.state.answer)

        return (
            <div>
                <input
                    min={1}
                    max={100}
                    defaultValue={3}
                    onChange={this.inputNumber} />
                <Button type="danger" onClick={() => this.guess()}>Guess</Button>
                <Button type="primary">
                    <Icon type="left" />
                    Backward
                 </Button>

            </div>
        );
    }
}

export default Easy;
