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
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          >
            <Form.Label>{item}</Form.Label>
            <Form.Range
              value={userData.item}
              onChange={(e) => {
                setUserData({ ...userData, [item]: e.target.value });
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
