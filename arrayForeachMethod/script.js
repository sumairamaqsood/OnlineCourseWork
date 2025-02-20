const socials = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];
// console.log(socials.__proto__);
// socials.forEach(function (item) {
//   console.log(item);
// });
//OR

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));
// *OR sme onj different function approach
function logSocials(social) {
  console.log(social);
}
socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'http://twitter.com' },
  { name: 'Facebook', url: 'http://facebook.com' },
  { name: 'Instagram', url: 'http://instagram.com' },
  { name: 'LinkedIn', url: 'http://Linkedin.com' },
];

socialObjs.forEach((item) => console.log(item.url));
