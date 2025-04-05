function curSuccess(pos) {
  //   const lat = pos.coords.latitude;
  //   const lon = position.coords.longitude;
  //   console.log(`Latitude: ${lat}, Longitude: ${lon}`);
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
  console.log(`Accuracy: ${coords.accuracy} meters`);
  console.log(`Altitude: ${coords.altitude} meters`);
  console.log(`Altitude Accuracy: ${coords.altitudeAccuracy} meters`);
  console.log(`Heading: ${coords.heading} degrees`);
  console.log(`Speed: ${coords.speed} meters/second`);
}

function curError(err) {
  console.log(`error ${err.code}: ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch position
const target = {
  latitude: 37.7749,
  longitude: -122.4194,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);
  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached the target location!');
    navigator.geolocation.clearWatch(id); // Stop watching the position
  }
}

function watchError(err) {
  console.log(`error ${err.code}: ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const id = navigator.geolocation.getCurrentPosition(
  watchSuccess,
  watchError,
  watchOptions
);
