// // asyncBreeds.js
// const fs = require('fs');

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
  
//   //fs readFile is an asynchronous function 
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // ISSUE: Returning from inner callback function, not our main function.
//     console.log('Callback: I have the data!')
//     if (!error) return data; 
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so this function returns undefined.
// }

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!

//Change the breedDetailsFromFile function to take in and use a callback. 
//Then, modify our call to that function by passing in a callback.

const fs = require('fs');


const breedDetailsFromFile = function(breed, callback) {

 //the callback you put in is what is going to be invoked once the data has been collected

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
  
   //if no error in getting the data, then apply the callback function now
    if (!error) {
      callback(data);

    } else {
      callback(undefined); 
    }
  });
}

// CHANGE 2: Value now comes back via callback, not return value
// breedDetailsFromFile('Bombay', (data) => {
//   console.log('Return Value: ', data) // => print out details correctly.
// });

module.exports = breedDetailsFromFile;