import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map({ data }) {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 20.565,
    lng: -88.232,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBQaiWGdemThGQL-ylBLZr7oY16ILqgj6c">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}
