// Break
// for (i = 0; i <= 10; i++) {
//   if (i === 9) {
//     console.log('Breaking...');
//     break;
//   }
//   console.log(i);
// }

for (i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log('Skipping....');
    continue;
  }
  console.log(i);
}
