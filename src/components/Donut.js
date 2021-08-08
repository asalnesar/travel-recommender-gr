import React, { Component, PureComponent,useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import '../App.css';


const COLORS = ['#7030a0', '#00b050', '#ffc000', '#0070c0'];

export default class Donut extends Component {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  constructor(props) {
    super(props);
    this.state = {
        data: this.props.scores,
        overallScore: 0,
        innerRadius:40,
        outerRadius:60, 
        showLabels: false,
        changeSize: this.props.changeSize,
        isMapChart: this.props.isMapChart
    }
    this.calculateOverallScore = this.calculateOverallScore.bind(this);
    this.calculateDonutSize = this.calculateDonutSize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(props){
      let score = this.calculateOverallScore();
      this.setState({overallScore: score},()=>{
        if(this.state.changeSize)
        {
          this.calculateDonutSize();
        }
      });
      
  }

  calculateOverallScore() {
    let sum =0;
    this.state.data.forEach(item => {
        sum += item.value;
    });
    sum = sum/4;
    return sum;
  }

  calculateDonutSize() {
    if(this.state.overallScore <= 25){
        this.setState({innerRadius: 5});
        this.setState({outerRadius: 15});
    }
    else if(this.state.overallScore > 25 && this.state.overallScore <= 50){
        this.setState({innerRadius:10});
        this.setState({outerRadius: 20});
    }
    else if(this.state.overallScore > 50 && this.state.overallScore <= 75){
        this.setState({innerRadius: 15});
        this.setState({outerRadius: 25});
    }
    else { // 75 < this.state.overallScore <= 100
        this.setState({innerRadius: 20});
        this.setState({outerRadius: 30});
    }
  }
  handleClick(){
    if(!this.state.showLabels)
    {
        this.setState({showLabels: true});
    }
    else {
        this.setState({showLabels: false});
    }
  }
  render() {
    return (
      <PieChart className={this.state.isMapChart ? 'map-donut-container' : null} width={this.state.isMapChart? 120 : 200} height={this.state.isMapChart? 120 : 200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={this.state.data}
          cx={this.state.isMapChart? 55 : 90}
          cy={55}
          innerRadius={this.state.innerRadius}
          outerRadius={this.state.outerRadius}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label = {this.state.showLabels}
          onClick={this.handleClick}
          isAnimationActive={this.state.isMapChart}
          onMouseEnter={this.onPieEnter}
        >
          {this.state.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}