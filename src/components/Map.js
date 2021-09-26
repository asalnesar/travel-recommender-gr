import React, { Component, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Donut from "./Donut";
import googleMapStyle from "./style";

const DonutComponent = ({ country, countryClicked, index }) => {
  return (
    <Donut
      isMapChart={true}
      country={country}
      donutClicked={(id) => {
        countryClicked(id);
      }}
      label={index + 1}
    />
  );
};
let defaultProps = {
  center: {
    lat: 43.733,
    lng: 7.4,
  },
  zoom: 11,
  style: googleMapStyle,
};
const Map = ({ countries, countryClicked }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB_jF6J5Lty3lrOUcccds24qQTI6_7nB6o" }}
        defaultCenter={defaultProps.center}
        defaultZoom={5}
        options={{
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          draggableCursor: false,
        }}
      >
        {countries.map((country, index) => (
          <DonutComponent
            index={index}
            key={index}
            lat={country.latlng[0]}
            lng={country.latlng[1]}
            country={country}
            countryClicked={countryClicked}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
