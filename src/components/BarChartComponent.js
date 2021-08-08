import React, { Component, PureComponent,useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList, Cell } from 'recharts';
import '../App.css';


const COLORS = ['#7030a0', '#00b050', '#ffc000', '#0070c0'];

export default class BarChartComponent extends Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount(props){
      
      
  }

  handleClick(){
    
  }
  render() {
    return (
      <BarChart width={240} height={200} data={this.props.scores} barCategoryGap={1} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" width={10} padding={{ left: 20 }} dataKey="name" hide/>
        <Bar width={20} name="name" dataKey="value">
          {
            this.props.scores.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % 20]}/>
            ))
          }
          <LabelList dataKey="name" position="inside" style={{'fill':'#fff'}}/>
        </Bar>
    </BarChart>
    );
  }
}