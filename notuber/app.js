var map;
var myPos;

! function(o) {
    "use strict";
    o.initMap = function() {
        var mapCenter = {lat: 42.352271, lng: -71.055242};
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: mapCenter
        });
    }
}(this.window = this.window || {});

function computeDistance(lat1, lat2, lon1, lon2) {
    // converting from degrees to radians
    lon1 = lon1*Math.PI/180.;
    lon2 = lon2*Math.PI/180.;
    lat1 = lat1*Math.PI/180.;
    lat2 = lat2*Math.PI/180.;

    // Haversine formula
    let dlon = lon2 - lon1
    let dlat = lat2 - lat1
    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2. * Math.asin(Math.sqrt(a));

    // Radius of earth in miles.
    let r = 3956.;

    // round to 2 decimal places and return the result
    return Math.round(c * r * 100) / 100;
}

function loadMarkers() {
    // Step 1: make an instance of XHR
    var request = new XMLHttpRequest();
    // Step 2: Make request to the JSON source
    request.open("POST", "https://jordan-marsh.herokuapp.com/rides", true);

    // Step 2.5: Add a parameter to the HTTP request header in order to execute HTTP POST using the JavaScript XMLHttpRequest object
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Step 3: What to do when we get a response back
    request.onreadystatechange = function() {
        // Step 5: parse the JSON data from response
        if (request.readyState == 4 && request.status == 200) {
            var carsJson = JSON.parse(request.responseText);

            // place the markers for each car and using the same loop also compute the closest vehicle to my position.

            // set the minimum distance to be associated to the first car initially
            let carPos = {lat: carsJson[0].lat, lng: carsJson[0].lng};
            var closestUsername = carsJson[0].username;
            var closestDistance = computeDistance(myPos.lat, carPos.lat, myPos.lng, carPos.lng);
            var closestCoordinates = {lat: carPos.lat, lng: carPos.lng};

            for (var count = 0 ; count < carsJson.length ; count++) {
                let carPos = {lat: carsJson[count].lat, lng: carsJson[count].lng};

                //compute the distance to my position and compare with the current minimum distance
                let distance = computeDistance(myPos.lat, carPos.lat, myPos.lng, carPos.lng);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestUsername = carsJson[count].username;
                    closestCoordinates = {lat: carPos.lat, lng: carPos.lng};
                }

                // place the marker of this car
                let carContentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Car ' + carsJson[count].username + '</h1>'+
                    '<div id="bodyContent">' +
                    '<p><b>Distance to My Position:</b> ' + distance + '</p>' +
                    '</div>'+
                    '</div>';

                let carInfowindow = new google.maps.InfoWindow({
                    content: carContentString
                });

                let carMarker = new google.maps.Marker({
                    position: carPos,
                    map: map,
                    title: carsJson[count].username,
                    icon: 'car.png'
                });

                carMarker.addListener('click', function() {
                    carInfowindow.open(map, carMarker);
                });


            }

            // create a marker to show where I am on the map
            let contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">My Position</h1>'+
                '<div id="bodyContent">' +
                '<p><b>Closest Car to My Position:</b></p>' +
                '<p>Username: ' + closestUsername + ' </p>' +
                '<p>Distance (in miles): ' + closestDistance + ' </p>' +
                '</div>'+
                '</div>';

            let infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            let myLocMarker = new google.maps.Marker({
                position: myPos,
                map: map,
                title: 'My location'
            });
            myLocMarker.addListener('click', function() {
                infowindow.open(map, myLocMarker);
            });


            // render the polyline between my position and the position of the closest car

            var polyline = [myPos, closestCoordinates];
            var path = new google.maps.Polyline({
                path: polyline,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            path.setMap(map);
        }
    };


    // Step 4: Fire off request!!!
    let geo = navigator.geolocation;
    geo.getCurrentPosition((position) => {
        myPos = {lat: position.coords.latitude, lng: position.coords.longitude};
        request.send("username=tNbjUAsF&lat=" + myPos.lat + "&lng=" + myPos.lng);

    });
}
