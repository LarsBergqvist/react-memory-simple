import React, { Component } from 'react';
import './Game.css';

class CardView extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (!this.props.matched && !this.props.imageUp) {
            this.props.onClick(this.props.id, this.props.image);
        }
    }

    render() {
        let imPath = `${window.location.href}/images/${this.props.image}.jpg`;
        if (!this.props.imageUp) {
            imPath = `${window.location.href}/images/back.jpg`;
        }

        let className = 'Card';
        if (this.props.matched) {
            className = className + ' Matched';
        }

        return (
            <img className={className} src={`${imPath}`} alt='' onClick={this.onClick} />
        );
    };
};

export default CardView;
