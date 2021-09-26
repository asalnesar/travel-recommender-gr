import React from "react";
import { Form, Card } from "react-bootstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassCheers,
  faMoneyBillWave,
  faCampground,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const COLORS = ["#14B1B2", "#FF910B", "#04A2DF", "#F05E67"];

const strings = (item) => {
  switch (item) {
    case "price":
      return {
        title: "Price",
        description: "How much are you willing to spend?",
        symbol: faMoneyBillWave,
      };
    case "sightSeeing":
      return {
        title: "Sight-seeing",
        description: "How important is sight-seeing to you?",
        symbol: faCamera,
      };
    case "adventure":
      return {
        title: "Adventure",
        description: "How  important is adventure to you?",
        symbol: faCampground,
      };
    case "nightLife":
      return {
        title: "Night-life",
        description: "How much  night-life do you expect on your vacation?",
        symbol: faGlassCheers,
      };
    default:
      return {
        title: item,
        description: "",
        symbol: "",
      };
  }
};
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.3)"
    );
  }
  throw new Error("Bad Hex");
}

const CustomizationContainer = ({ userData, setUserData }) => {
  const findEmoji = (item, value, parameterIndex) => {
    let count = 0;
    let result = [];
    if (value > 0 && value <= 25) {
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
      result.push(
        <FontAwesomeIcon
          icon={strings(item).symbol}
          color={COLORS[parameterIndex % COLORS.length]}
          style={{ paddingRight: 1 }}
        ></FontAwesomeIcon>
      );
    }
    return <span>{result}</span>;
  };
  return (
    <div>
      <h3>Customize to find your next destination</h3>
      <Form>
        {Object.keys(userData).map((item, index) => (
          <div
            className="sliders-box"
            style={{
              backgroundColor: hexToRgbA(COLORS[index % COLORS.length]),
            }}
            key={index}
          >
            <Form.Label>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {strings(item).title}:
              </span>{" "}
              {findEmoji(item, userData[item], index)}
            </Form.Label>
            <Form.Range
              value={userData[item]}
              onChange={(e) => {
                setUserData({ ...userData, [item]: e.target.valueAsNumber });
              }}
              step={25}
            />
            <p className="footer-note">{strings(item).description}</p>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default CustomizationContainer;
