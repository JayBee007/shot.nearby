import fs from 'fs';
import path from 'path';
import axios from 'axios';
import uuid from 'uuid/v4';

const filePath = path.join(__dirname, '../client/src/data/');

const API = `https://data.sfgov.org/resource/wwmu-gmzc.json`;
const GAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const GKEY = `AIzaSyAxlHPHrZBPgk8Vho3gc6RylhUDY1Zp1jU`;

const getCoords = async (address) => {

  let cords = {};
  const formattedAddress = address.replace(/\s+/g, '+') + ',+San+Francisco';
  const url = `${GAPI}${formattedAddress}&key=${GKEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    cords.lng = data.results[0].geometry.location.lng;
    cords.lat = data.results[0].geometry.location.lat;
  } catch (err) {
      throw new Error(err);
  }
  return cords;
}

const addLongLat = async () => {
  const data = [];

  try {
    const response = await axios.get(API);

    await Promise.all(response.data.map(async(movie) => {
      if(movie.locations) {

        const cords = getCoords(movie.locations);
        const result = {...movie, id: uuid(), cords };

        data.push(result);
      }

    }));
  } catch (err) {
    throw new Error (err);
  }
  fs.writeFile(filePath+'dataWithCords.json', JSON.stringify(data) , 'utf8', (err) => {
    if (err) throw new Error(err);
  });
}
