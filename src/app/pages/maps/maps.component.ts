import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map = document.getElementById('map-canvas');
    let lat = map.getAttribute('data-lat');
    let lng = map.getAttribute('data-lng');
    const beaches: [string, number, number, number][] = [
      ["Bondi Beach", -33.890542, 151.274856, 4],
      ["Coogee Beach", -33.923036, 151.259052, 5],
      ["Cronulla Beach", -34.028249, 151.157507, 3],
      ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
      ["Maroubra Beach", -33.950198, 151.259302, 1],
    ];
    
    var myLatlng = new google.maps.LatLng(lat, lng);
    

    //map = new google.maps.Map(map, mapOptions);

    function initMap(): void {
      map = new google.maps.Map(
        map,
        {
          zoom: 10,
          scrollwheel: false,
          center: { lat: -33.9, lng: 151.2 }  ,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
            {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":'#5e72e4'},{"visibility":"on"}]}]
      }
      );
    
      setMarkers(map);
    }

    function setMarkers(mapp) {
      // Adds markers to the map.
    
      // Marker sizes are expressed as a Size of X,Y where the origin of the image
      // (0,0) is located in the top left of the image.
    
      // Origins, anchor positions and coordinates of the marker increase in the X
      // direction to the right and in the Y direction down.
      const image = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
      };
      // Shapes define the clickable region of the icon. The type defines an HTML
      // <area> element 'poly' which traces out a polygon as a series of X,Y points.
      // The final coordinate closes the poly by connecting to the first coordinate.
      const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
      };
    
      for (let i = 0; i < beaches.length; i++) {
        const beach = beaches[i];
    
        new google.maps.Marker({
          position: { lat: beach[1], lng: beach[2] },
          map: mapp,
          
          animation: google.maps.Animation.DROP,
          shape: shape,
          title: beach[0],
          zIndex: beach[3],
        });
      }
    }
    
    initMap()
  }

}
