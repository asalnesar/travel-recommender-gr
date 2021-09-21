import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Map from "./components/Map";
import RecommenderContainer from "./components/RecommenderContainer";
import { Col, Row } from "react-bootstrap";
import CustomizationContainer from "./components/CustomizationContainer";
import { Countries } from "./Data/Countries.js";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [clickedCountryId, setClickedCountryId] = useState(0);
  const [userData, setUserData] = useState({
    price: 50,
    nightLife: 50,
    adventure: 50,
    sightSeeing: 50,
  });

  useEffect(() => {
    var unsorted = calculateCountryScores(Countries);
    var sorted = unsorted.sort((a, b) => b.overallScore - a.overallScore);
    setData(sorted);
  }, [userData]);

  const calculateCountryScores = (countries) => {
    const scoredCountries = [];
    countries.map((country) => {
      const priceScore = calculateScore(userData.price, country.stats.cost);
      const nightLifeScore = calculateScore(
        userData.nightLife,
        country.stats.nightLife
      );
      const adventureScore = calculateScore(
        userData.adventure,
        country.stats.adventure
      );
      const sightScore = calculateScore(
        userData.sightSeeing,
        country.stats.sightSeeing
      );
      const scoredCountry = {
        ...country,
        scores: [
          {
            name: "price",
            value: priceScore,
          },
          {
            name: "nightLife",
            value: nightLifeScore,
          },
          {
            name: "adventure",
            value: adventureScore,
          },
          {
            name: "sightSeeing",
            value: sightScore,
          },
        ],
        overallScore:
          (priceScore + adventureScore + nightLifeScore + sightScore) / 4,
      };
      scoredCountries.push(scoredCountry);
      return scoredCountry;
    });
    return scoredCountries;
  };

  const calculateScore = (userPreference, countryScore) => {
    const difference = Math.abs(userPreference - countryScore);
    return 100 - difference;
  };

  return (
    <div className="App">
      <Row className="mainContainer">
        <Col>
          <CustomizationContainer
            userData={userData}
            setUserData={setUserData}
          />
        </Col>
        <Col xs={6}>
          <Map countries={data} countryClicked={setClickedCountryId} />
        </Col>
        <Col className="recommenderContainer">
          <RecommenderContainer
            className="col-3"
            countries={data}
            activeRecommendation={clickedCountryId}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
