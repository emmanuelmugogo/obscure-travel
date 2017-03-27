  function initMap() {
      var myLatLng = {
          lat: 39.5740,
          lng: -82.5956
      };

      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
      });

      var infoWindow = new google.maps.InfoWindow({
          map: map
      });

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('You are here!');
              map.setCenter(pos);
          }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
          });
      } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
  }