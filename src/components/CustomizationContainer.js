import React from "react";
import { Form } from "react-bootstrap";
import "../App.css";

const COLORS = ["#7030a0", "#00b050", "#ffc000", "#0070c0"];

const CustomizationContainer = ({ userData, setUserData }) => {
  return (
    <div>
      <h3>Customize to find your next destination</h3>
      <p>How important is each of the following factors in your travel?</p>
      <Form>
        {Object.keys(userData).map((item, index) => (
          <div
            className="sliders-box"
            style={{ borderColor: COLORS[index % COLORS.length] }}
            key={index}
          >
            <Form.Label>
              {item}: {userData[item]}%
            </Form.Label>
            <Form.Range
              value={userData[item]}
              onChange={(e) => {
                console.log(userData);
                setUserData({ ...userData, [item]: e.target.valueAsNumber });
              }}
              step={20}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default CustomizationContainer;
