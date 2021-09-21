import React from "react";
import { Form, Card } from "react-bootstrap";
import "../App.css";

const COLORS = ["#7030a0", "#00b050", "#ffc000", "#0070c0"];

const strings = (item) => {
  switch (item) {
    case "price":
      return {
        title: "Price",
        description: "How much are you willing to spend?",
        symbol: "💶",
      };
    case "sightSeeing":
      return {
        title: "Sight-seeing",
        description: "How important is sight-seeing to you?",
        symbol: "📷",
      };
    case "adventure":
      return {
        title: "Adventure",
        description: "How  important is adventure to you?",
        symbol: "⛺️",
      };
    case "nightLife":
      return {
        title: "Night-life",
        description: "How much  night-life do you expect on your vacation?",
        symbol: "💃🏻",
      };
    default:
      return {
        title: item,
        description: "",
        symbol: "",
      };
  }
};

const CustomizationContainer = ({ userData, setUserData }) => {
  const findEmoji = (item, value) => {
    let count = 0;
    let result = "";
    if (value >= 0 && value <= 25) {
      count = 1;
    } else if (value > 25 && value <= 50) {
      count = 2;
    } else if (value > 50 && value <= 75) {
      count = 3;
    } else if (value > 75 && value <= 100) {
      count = 4;
    } else {
      count = 0;
    }
    for (let index = 0; index < count; index++) {
      result = result.concat(" " + strings(item).symbol);
    }
    return result;
  };
  return (
    <div>
      <h3>Customize to find your next destination</h3>
      <Form>
        {Object.keys(userData).map((item, index) => (
          <>
            <div
              className="sliders-box"
              style={{ borderColor: COLORS[index % COLORS.length] }}
              key={index}
            >
              <Form.Label>
                {strings(item).title}: {findEmoji(item, userData[item])}
              </Form.Label>
              <Form.Range
                value={userData[item]}
                onChange={(e) => {
                  console.log(userData);
                  setUserData({ ...userData, [item]: e.target.valueAsNumber });
                }}
                step={10}
              />
              <p className="footer-note">{strings(item).description}</p>
            </div>
          </>
        ))}
      </Form>
    </div>
  );
};

export default CustomizationContainer;
