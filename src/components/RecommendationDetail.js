import React, { Component } from 'react';
import Donut from "./Donut";


export default class RecommendationDetail extends Component {
    
    render() {
        return (
            <div className="justify-content-center accordion-body-details">
                <Donut scores={this.props.country.scores} changeSize={false}/>
                <h1 className="label-on-donut">{this.props.index}</h1>
            </div>
        )
    }
}

