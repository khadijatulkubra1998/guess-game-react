import React, { Component } from 'react';
import { Button,Icon } from 'antd';
import {
    Link
} from "react-router-dom";
import 'antd/dist/antd.css';
export class Hard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: "",
            answer: parseInt(Math.random() * 1000),
            userAnswer: ""
        };

    }
    inputNumber = (e) => {
        this.setState({
            number: e.target.value,
        });

    }



    guess = () => {
        this.userAnswer = parseInt(this.state.number)

        let guess = this.state.answer === this.userAnswer;
        guess ? alert("yeeeahhh!!! won") : (this.state.answer > this.userAnswer ? alert("Guess number is small!!") : alert("Guess number is big!!"));

    }
    render() {
        console.log(this.state.number)
        console.log(this.state.answer)
        return (
            <div className="game">
                 <div className="mid"> 
                <h1>Hard Level</h1>
                 <input
                    min={1}
                    max={1000}
                    defaultValue={505}
                    onChange={this.inputNumber} />
                <Button type="danger" onClick={() => this.guess()}>Guess</Button>
                <Link to="/">
                    <Button type="primary">
                        <Icon type="left" />
                        Backward
                  </Button>
                </Link>
                </div>
            </div>
        );
    }
}

export default Hard;
