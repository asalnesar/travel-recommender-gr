import React, { Component, PureComponent } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import RecommendationDetail from './RecommendationDetail';

export default class RecommenderContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            scoredCountries : []
        }
        this.calculateOverallScores = this.calculateOverallScores.bind(this);
        this.sortCountries = this.sortCountries.bind(this);
        let countryArray = this.calculateOverallScores();
        let sorted  = this.sortCountries(countryArray);
        console.log(sorted);
        this.setState({scoredCountries: sorted});
    }

    componentDidMount(props)
    {
        let countryArray = this.calculateOverallScores();
        let sorted  = this.sortCountries(countryArray);
        console.log(sorted);
        this.setState({scoredCountries: sorted});
    }
    calculateOverallScores(){
        let countryArray = [];
        this.props.countries.forEach(country => {
            let sum = 0;
            country.scores.forEach(item =>{
                sum+= item.value;
            });
            let scoredCountry = {
                "score": sum/4,
                "country": country
            }
            countryArray.push(scoredCountry);
        });
        return countryArray;
    }
    sortCountries(unsortedArray)
    {
        let sorted = [].concat(unsortedArray);
        sorted.sort((a,b)=> b.score - a.score);
        return sorted;
    }
    render() {
        return (
            <div style={{'height':'100%'}}>
                <h3>Best Matched countries for your holiday</h3>
                <div className="scrollable-div">
                    <Accordion>
                        {this.state.scoredCountries.map((item,index) => 
                            <Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>{index+1}. {item.country.name}</Accordion.Header>
                                    <Accordion.Body>
                                     <RecommendationDetail country={item.country} index={index+1}/>
                                    </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                    
                </div>
            </div>
        )
    }
}
