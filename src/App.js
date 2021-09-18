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
    adventure: 50,
    nightLife: 50,
    sightSeeing: 50,
  });

  useEffect(() => {
    setData(calculateCountryScores(Countries));
  }, [userData]);

  const calculateCountryScores = (countries) => {
    const scoredCountries = [];
    countries.map((country) => {
      const scoredCountry = {
        ...country,
        scores: [
          {
            name: "price",
            value: calculateScore(userData.price, country.stats.cost),
          },
          {
            name: "nightLife",
            value: calculateScore(userData.nightLife, country.stats.nightLife),
          },
          {
            name: "adventure",
            value: calculateScore(userData.adventure, country.stats.adventure),
          },
          {
            name: "sightSeeing",
            value: calculateScore(
              userData.sightSeeing,
              country.stats.sightSeeing
            ),
          },
        ],
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
        <Col xs={7}>
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
