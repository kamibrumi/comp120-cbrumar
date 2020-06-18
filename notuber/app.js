! function(o) {
    "use strict";
    o.initMap = function() {
        for (var o = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 42.352271,
                lng: -71.055242
            },
            zoom: 14
        }), n = [{
            id: "mXfkjrFw",
            coords: {
                lat: 42.3453,
                lng: -71.0464
            }
        }, {
            id: "nZXB8ZHz",
            coords: {
                lat: 42.3662,
                lng: -71.0621
            }
        }, {
            id: "Tkwu74WC",
            coords: {
                lat: 42.3603,
                lng: -71.0547
            }
        }, {
            id: "5KWpnAJN",
            coords: {
                lat: 42.3472,
                lng: -71.0802
            }
        }, {
            id: "uf5ZrXYw",
            coords: {
                lat: 42.3663,
                lng: -71.0544
            }
        }, {
            id: "VMerzMH8",
            coords: {
                lat: 42.3542,
                lng: -71.0704
            }
        }], t = 0; t < n.length; t++) new google.maps.Marker({
            position: n[t].coords,
            map: o,
            icon: "car.png"
        })
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
    //let lat = ;
    //let lng = ;
    //
    //console.log("Here I am 6");
}
