// const mapDiv = document.getElementById('map')!;
import * as dotenv from "dotenv";
dotenv.config();

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById('map')!,
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
      });
  }
}


