import React, { Component } from 'react';
import Empty_Star from './Empty_Star.png';
import Filled_Star from './Filled_Star.png';
import './App.css'


class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {currRating : 0}
        this.onHover = this.onHover.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onHover(e) {
        if (e.target.className === 'star') {
        this.setRating(e.target.dataset.value)
        }
    }

    onClick(e) {
        if (e.target.dataset.value === this.state.currRating) {
            this.setRating(e.target.dataset.value)
        }
    }

    setRating(value) {
        this.setState({currRating : value})
    }

    render(){
        return(
            [...Array(this.props.starCount).keys()].map((index) => {
                return (
                    <center>
                    <img
                        onMouseOver = {this.onHover}
                        onClick = {this.onClick}
                        data-value={index+1}
                        className={"star"}
                        src={index+1 <= this.state.currRating ?
                            Filled_Star : Empty_Star}
                        alt={index+1 <= this.state.currRating ?
                            "filled star" : "empty star"}
                    />
                    </center>
                )
        })
        )
    }
}

const RatingSystem = (props) => {
    return (
        <div>
            <h1>Speech Therapy</h1>
        <div className = 'rating'>
            <Stars starCount={props.starCount}/>
        </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <RatingSystem starCount={5} />
        </div>
    )
}