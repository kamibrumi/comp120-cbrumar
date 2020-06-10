(function(exports) {
    "use strict";

    function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 42.352271,
                lng: -71.05524200000001
            },
            zoom: 14
        });

        var cars = [{
            id : 'mXfkjrFw',
            coords : {
                lat : 42.3453,
                lng: -71.0464

            }}, {
            id : 'nZXB8ZHz',
            coords : {
                lat : 42.3662,
                lng: -71.0621
            }}, {
            id : 'Tkwu74WC',
            coords : {
                lat : 42.3603	,
                lng: -71.0547
            }}, {
            id : '5KWpnAJN',
            coords : {
                lat : 42.3472,
                lng: -71.0802
            }}, {
            id : 'uf5ZrXYw',
            coords : {
                lat : 42.3663,
                lng: -71.0544
            }}, {
            id : 'VMerzMH8',
            coords : {
                lat : 42.3542,
                lng: -71.0704
            }
        }];

        var image = 'car.png';
        for (var i = 0; i < cars.length; i++) {
            console.log(cars[i].coords);
            var marker = new google.maps.Marker({position: cars[i].coords, map: map, icon:image});
        }


    }

    exports.initMap = initMap;
})((this.window = this.window || {}));