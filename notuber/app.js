var map;

! function(o) {
    "use strict";
    o.initMap = function() {
        var mapCenter = {lat: 42.352271, lng: -71.055242};
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: mapCenter
        });

        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            title: 'Hello World!'
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
            // use rest of the code on github with the loop
        }
    };

    // Step 4: Fire off request!!!
    console.log("Here I am 5");
    let geo = navigator.geolocation;
    //console.log("geoloc: ", geo);
    geo.getCurrentPosition((position) => {
        request.send("username=tNbjUAsF&lat=" + position.coords.latitude + "&lng=" + position.coords.longitude);
    });
}
