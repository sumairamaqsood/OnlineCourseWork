//success
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   });

// The issue here is that the 'success' shows and the .catch() does NOT run for an error status like 404 or 500

// fetch('http://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch('http://httpstat122.net')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//test with ok
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// check for specific codes

fetch('http://httpstat.us/600')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Page not found');
    } else if (response.status === 500) {
      throw new Error('Server error');
    } else if (response.status === 400) {
      throw new Error('Bad request');
    } else if (response.status !== 200) {
      throw new Error('Request failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
