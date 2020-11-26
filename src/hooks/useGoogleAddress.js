import { useState, useEffect } from 'react';

export default function useGoogleAddress(address) {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBQaiWGdemThGQL-ylBLZr7oY16ILqgj6c`;
  useEffect(async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setMap(data.results[0].geometry.location);
  }, []);
  return map;
}
