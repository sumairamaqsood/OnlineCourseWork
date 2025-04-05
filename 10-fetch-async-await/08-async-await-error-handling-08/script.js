const getUsers = async () => {
  try {
    const response = await fetch('http://httpstat.us/500');
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// const getPosts = async () => {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/posts' + '?_limit=5'
//     );
//     if (!response.ok) {
//       throw new Error('Something went wrong');
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

//without try

const getPosts = async () => {
  // const response = await fetch(
  //   'https://jsonplaceholder.typicode.com/posts' + '?_limit=5'
  // );
  const response = await fetch('http://httpstat.us/500' + '?_limit=5');
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const data = await response.json();
  console.log(data);
};

// getUsers();

getPosts().catch((error) => console.error(error));
