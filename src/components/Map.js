import React from "react";
import GoogleMapReact from "google-map-react";
import Donut from "./Donut";
import googleMapStyle from "./style";

const AnyReactComponent = ({ scores }) => <Donut scores={scores}/>;

const Map = ({countries}) => {
  
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
    style: googleMapStyle
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB_jF6J5Lty3lrOUcccds24qQTI6_7nB6o" }}
        defaultCenter={defaultProps.center}
        defaultZoom={5}
        options={{ zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true}}
        styles={googleMapStyle.mapStyle}
      >
        {countries.map(country => <AnyReactComponent lat={country.latlng[0]} lng={country.latlng[1]} scores={country.scores}/>)}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
