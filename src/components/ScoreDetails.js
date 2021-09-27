import React from "react";
import { Card } from "react-bootstrap";

const COLORS = ["#14B1B2", "#FF910B", "#04A2DF", "#F05E67"];

export const ScoreRow = ({ name, value, color }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <span
        style={{
          width: 15,
          height: 15,
          backgroundColor: color,
          marginRight: 5,
        }}
      ></span>
      <p className="footer-note">
        {name}: {value}/100
      </p>
    </div>
  );
};

const ScoreDetails = ({ country, rank }) => {
  return (
    <Card style={{ width: 200 }} className="custom-tooltip">
      <Card.Header>
        <Card.Title>{country.name} scores:</Card.Title>
      </Card.Header>
      <Card.Body>
        {country.scores.map((item, index) => (
          <ScoreRow
            key={index}
            name={item.name}
            value={item.value}
            color={COLORS[index % COLORS.length]}
          />
        ))}
      </Card.Body>
      <Card.Footer>
        <Card.Subtitle>Overall score: {country.overallScore}</Card.Subtitle>
        <Card.Text>Rank {rank}</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default ScoreDetails;
