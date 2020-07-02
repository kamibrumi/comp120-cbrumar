var map, myPos;

function computeDistance(t, e, n, o) {
    n = n * Math.PI / 180, o = o * Math.PI / 180, t = t * Math.PI / 180;
    let a = o - n,
        i = (e = e * Math.PI / 180) - t,
        s = Math.pow(Math.sin(i / 2), 2) + Math.cos(t) * Math.cos(e) * Math.pow(Math.sin(a / 2), 2),
        l = 2 * Math.asin(Math.sqrt(s));
    return Math.round(3956 * l * 100) / 100
}

function loadMarkers() {
    var t = new XMLHttpRequest;
    t.open("POST", "https://obscure-scrubland-32831.herokuapp.com/rides", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
        if (4 == t.readyState && 200 == t.status) {
            var e = JSON.parse(t.responseText);
            let l = {
                lat: e[0].lat,
                lng: e[0].lng
            };
            for (var n = e[0].username, o = computeDistance(myPos.lat, l.lat, myPos.lng, l.lng), a = {
                lat: l.lat,
                lng: l.lng
            }, i = 0; i < e.length; i++) {
                let t = {
                        lat: e[i].lat,
                        lng: e[i].lng
                    },
                    s = computeDistance(myPos.lat, t.lat, myPos.lng, t.lng);
                s < o && (o = s, n = e[i].username, a = {
                    lat: t.lat,
                    lng: t.lng
                });
                let l = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Car ' + e[i].username + '</h1><div id="bodyContent"><p><b>Distance to My Position:</b> ' + s + "</p></div></div>",
                    r = new google.maps.InfoWindow({
                        content: l
                    }),
                    d = new google.maps.Marker({
                        position: t,
                        map: map,
                        title: e[i].username,
                        icon: "car.png"
                    });
                d.addListener("click", function() {
                    r.open(map, d)
                })
            }
            let r = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">My Position</h1><div id="bodyContent"><p><b>Closest Car to My Position:</b></p><p>Username: ' + n + " </p><p>Distance (in miles): " + o + " </p></div></div>",
                d = new google.maps.InfoWindow({
                    content: r
                }),
                p = new google.maps.Marker({
                    position: myPos,
                    map: map,
                    title: "My location"
                });
            p.addListener("click", function() {
                d.open(map, p)
            });
            var s = [myPos, a];
            new google.maps.Polyline({
                path: s,
                geodesic: !0,
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2
            }).setMap(map)
        }
    }, navigator.geolocation.getCurrentPosition(e => {
        myPos = {
            lat: e.coords.latitude,
            lng: e.coords.longitude
        }, t.send("username=tNbjUAsF&lat=" + myPos.lat + "&lng=" + myPos.lng)
    })
}! function(t) {
    "use strict";
    t.initMap = function() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 42.352271,
                lng: -71.055242
            }
        })
    }
}(this.window = this.window || {});