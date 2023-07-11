//create variable for the full animation 
const animation = ['|', '/', '-', '\\'];
// set variable index to 0 
let index = 0;
// create variable loop to track how many time the animation has run through 
let loop = 0;
//create variable number of loops to complete 
const totalLoops = 2;
//function to make animation happen using setInterval function
const spin = setInterval(() => {
  //run through animation, add 1 to the index count
  process.stdout.write('\r' + animation[index] + '  ');
  index ++;
//check how many times the animation has run through 
  if (index === animation.length) {
    index = 0;
    loop ++;
// check if it has looped the appropriate number of times
    if (loop === totalLoops) {
      // if looped enough, stop the loop 
      clearInterval(spin);
    }
  }//interval timer 200ms
}, 200);




// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1500);