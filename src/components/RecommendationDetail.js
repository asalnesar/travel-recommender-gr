import React, { Component } from 'react';
import Donut from "./Donut";
import BarChartComponent from './BarChartComponent';


export default class RecommendationDetail extends Component {
    
    render() {
        return (
            <div>
                <div className="justify-content-center accordion-body-details">
                    <Donut scores={this.props.country.scores} changeSize={false}/>
                    <h1 className="label-on-donut">{this.props.index}</h1>
                </div>
                <h3>{this.props.country.name}</h3>
                <div>
                    <BarChartComponent scores={this.props.country.scores}/>
                </div>
            </div>
            
        )
    }
}

