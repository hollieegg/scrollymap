var routeData = [];

var geojsonPoint = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
        
            ]
        }
    }]
};

function createLine() {

    // get the coordinates of the line you want to highlight ... this is refferring to routeDAta which is the variable
    //name of the geojson file in index.html. it then goes through top of file and grabs features > geom > coords
    let extentArray = routeData.features[0].geometry.coordinates;
    

    // create a turf linestring based on the line coordinates
    const line = turf.lineString(extentArray);

    // calculate the total length of the line
    const lineDistance = turf.lineDistance(line);

    

    // how many points you want along the path (more = smoother animation)
    // const rects = driveTime;
    const rects = driveTime;

    // calculate the distance between each point on the path
    // const segments = lineDistance / rects;
    // const segments = lineDistance / driveSlides / rects;
    // const segments = lineDistance / driveSlides;
    // const segments =  lineDistance / 1161;  THIS FOR STOP GEOJSON
     const segments = lineDistance / 1161;


    // what units do you want to use?
    const units = 'kilometers';

    // based on the number of points...
    // for(let i = 0; i <= rects; i++) {
    for(let i = 0; i <= rects; i++) {

        // calculate point location for each segment
        // const pointonline = turf.along(line, (rects * i));
        const pointonline = turf.along(line, (segments * i));

        // push new x,y
        let newX = pointonline.geometry.coordinates[0];
        let newY = pointonline.geometry.coordinates[1];

        geojsonPoint.features[0].geometry.coordinates.push([newX, newY]);

        // draw our initinal point
        if (i === 0) {
            let initPoint = turf.point([newX, newY]);

            // if you want to follow the point...
            if (followPoint === true) {
            	map.setCenter([newX, newY]);
        	}

            map.getSource('pointSource').setData(initPoint);
        }

        // once 'i' equals the number of points then we're done building our line 
        if (i == rects) {
            map.getSource('lineSource').setData(geojsonPoint);
        }
    }

}

function changeCenter(index) {

    // Set center to a subsample of the line, say every 10th or 25th. This number is for
    //how often the camera recenters along the route. 
    let subsampleIndex = 60;

    let currentJson = geojsonPoint.features[0].geometry.coordinates.slice(0,index);
    let center = geojsonPoint.features[0].geometry.coordinates[index];
    let centerX = center[0];
    let centerY = center[1];
    let movingLine = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": currentJson
            }
        }]
    };
    let movingPoint = turf.point([centerX, centerY]);
    map.getSource('lineSource').setData(movingLine);
    map.getSource('pointSource').setData(movingPoint);

    // if you want to follow the point...
    if (followPoint === true) {
      if (index % subsampleIndex == 0) {
        console.log("changeCenter(index) = ", index, center)
        map.jumpTo({
  	        center: [centerX, centerY]
  	    });
      }
    }
}
