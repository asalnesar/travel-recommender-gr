import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: "AIzaSyB_jF6J5Lty3lrOUcccds24qQTI6_7nB6o" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

export default Map
