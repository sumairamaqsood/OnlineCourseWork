const library = [
  {
    title: 'sumaira',
    Auther: 'Thomas',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
library[0].status.read = true;

const { title: Sumairakhan } = library[0];
console.log(Sumairakhan);

const libraryJson = JSON.stringify(library);
console.log(libraryJson);
