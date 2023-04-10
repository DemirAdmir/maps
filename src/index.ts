import * as dotenv from "dotenv";
import { Loader } from '@googlemaps/js-api-loader';

dotenv.config();
const mapDiv = document.querySelector('map')!;
const loader = new Loader({
  apiKey: "GOOGLE_MAPS_API_KEY",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

loader
  .load()
  .then((google) => {
    new google.maps.Map(mapDiv, mapOptions);
  })
  .catch(e => {
    console.log(e);
  });


