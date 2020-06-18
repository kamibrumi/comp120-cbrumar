var map;
var carsJson;
var myPos;

! function(o) {
    "use strict";
    o.initMap = function() {
        var mapCenter = {lat: 42.352271, lng: -71.055242};
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: mapCenter
        });
    }
}(this.window = this.window || {});

function loadMarkers() {
    // Step 1: make an instance of XHR
    console.log("Here I am 1");
    var request = new XMLHttpRequest();
    // Step 2: Make request to the JSON source
    request.open("POST", "https://jordan-marsh.herokuapp.com/rides", true);

    // Step 2.5: Add a parameter to the HTTP request header in order to execute HTTP POST using the JavaScript XMLHttpRequest object
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Step 3: What to do when we get a response back
    console.log("Here I am 2");
    request.onreadystatechange = function() {
        // Step 5: parse the JSON data from response
        console.log("Here I am 3");
        if (request.readyState == 4 && request.status == 200) {
            console.log("Here I am 4");
            var carsJson = JSON.parse(request.responseText);
            console.log(carsJson);

            let closestUsername = 'ulu';
            let closestDistance = '16';
            // create a marker to show where I am on the map
            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">My Position</h1>'+
                '<div id="bodyContent">' +
                '<p><b>Closest Car to My Position:</b></p>' +
                '<p>Username: ' + closestUsername + ' </p>' +
                '<p>Distance (in miles): ' + closestDistance + ' </p>' +
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var myLocMarker = new google.maps.Marker({
                position: myPos,
                map: map,
                title: 'My location'
            });
            myLocMarker.addListener('click', function() {
                infowindow.open(map, myLocMarker);
            });


            // After loading the locations of the cars, we can compute the minimum distance between my location and
        }
    };

    // Step 4: Fire off request!!!
    console.log("Here I am 5");
    let geo = navigator.geolocation;
    //console.log("geoloc: ", geo);
    geo.getCurrentPosition((position) => {
        myPos = {lat: position.coords.latitude, lng: position.coords.longitude};
        request.send("username=tNbjUAsF&lat=" + myPos.lat + "&lng=" + myPos.lng);

    });
}
