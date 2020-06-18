# Lab 10: The Ride-Hailing Service, Part 2 on Week 4

## Camelia D. Brumar

### Aspects of the work that have been implemented correctly

- Determined and marked my location on the map
- Made a successful request to the ride-hailing API, sent my username, latitude, and longitude
- Marked all the vehicles returned by the ride-hailing API on the map using the provided icon image
- Noted the closest vehicle from where I am (e.g., upon clicking on marker of where I am)
- Rendered a polyline connecting my marker to the closest vehicle
- There are no errors in the JavaScript console.
- Called the ride-hailing API and the Google Maps JavaScript API only once.
- BONUS: Accomplished at least one of the "Going Beyond" items, i.e. the one that says: "Upon clicking on a marker for a vehicle, show popup infowindow noting how far away the vehicle is, in miles, from you."

I believe I followed all the steps the professor provided, and I have implemented everything that was mentioned in the assignment statement.

### Whom I have collaborated or discussed the lab
~ No one.

### Approximately how many hours I have spent completing the lab
7 hours

### References for computing the distance between two markers
https://www.geeksforgeeks.org/program-distance-two-points-earth/#:~:text=For%20this%20divide%20the%20values,is%20the%20radius%20of%20Earth.

I used this for the Haversine formula (I took the code from the Python3 section and wrote it in JavaScript).


# Lab 8: The Ride-Hailing Service, Part 1 on Week 3

## Camelia D. Brumar

### Aspects of the work that have been implemented correctly

- Loaded CSS first in the head section
- Minified CSS
- Moved JavaScript includes and code to the bottom of the HTML before the closing body tag
- Minified JavaScript code. I made sure to make a copy of my "readable"/developer version JavaScript first, which can be found in the previous commit of this repository.
- I also served my html page locally by running Python's simple HTTP server in the folder of my work
- I centered the map on South Station

I believe I followed all the steps the professor provided, and I have implemented everything that was mentioned in the assignment statement.

### Whom I have collaborated or discussed the lab
~ No one.

### Approximately how many hours I have spent completing the lab
2 hours 30 minutes

### Metrics

General metrics (for the whole site):

| improvements | total     | transferred | finish | load   |
|--------------|-----------|-------------|--------|--------|
| without      | 1.58 MB   | 1.12 MB     | 1.43 s | 798 ms |
| with         | 592.81 KB | 191.84 KB   | 1.38 s | 532 ms |

For style.css (the stylesheet):

| improvements | transferred | size  | time |
|--------------|-------------|-------|------|
| without      | 443 B       | 259 B | 2 ms |
| with         | 441 B       | 58 B  | 5 ms |

For the app.js (the script):

| improvements | transferred | size    | time |
|--------------|-------------|---------|------|
| without      | 1.57 KB     | 1.37 KB | 2 ms |
| with         | 777 B       | 579 B   | 1 ms |

Each time I cleared the browser's cache, histories and cookies to make sure the measurements are accurate.

For some reason, the time to load the css file took a bit longer with
the optimizations, but the overall time experienced a great improvement, 
from 798 ms (without the improvements) to 532 ms (with improvements).

Note: the last commit contains the optimizations. In the previous commits there are the "pretty"/"readable"/commented files.
