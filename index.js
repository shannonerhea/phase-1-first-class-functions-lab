// Code your solution in this file!
// const returnFirstTwoDrivers(arr) {
//     const firstTwo = (arr) => {arr.slice(0, 2)};
// };

//OG arr (['Antonia', 'Nuru', 'Amari', 'Mo']);
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2);
    
  }
 //returnLastTwoDrivers()
 //1) should return an array of the last two drivers
const returnLastTwoDrivers = (arr) => {
    return arr.slice(2);
};

// 1) has the `returnFirstTwoDrivers` function to as its first element
//const selectingDrivers = (drivers) => {};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = (num) => {
//    // return fareMultiplier(multiplier) {
//       //  return (num) * (multiplier);
//       const fairDoubler = createFareMultiplier()
//       return fairDoubler;
    

// };
// 
//const createFareMultiplier(multiplier)
// function createFareMultiplier(multiplier)) {
//     return function(fare) {
//         return fare * multiplier;
//     };
// };
// function createFareMultiplier(multiplier) {
//     return function(fare) {
//         return fare * multiplier;
//     }
// }
//**OR**/
const createFareMultiplier = multiplier => function(fare) { return fare * multiplier };

// funct doubles fare
//  const fareDoubler = () => {}; 
//  const fairDoubler = createFareMultiplier(fare) {
//     return " wtf"
//  };
// const fareDoubler(singleArg) {
//     const newFunct = function(fare) {
//         return //a val created by passing the arg collected in fareDoubler into the new variable declared in const
//     };
// };
function fareDoubler(fare) {
    return fare * 2;
};
 function fareTripler(fare) {
    return fare * 3;
 };

 /**selectDifferentDrivers() — This function takes two arguments, 
  * an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() 
  * or returnLastTwoDrivers() function. 
  * Based on these two arguments, 
  * selectDifferentDrivers() will return either the first two drivers or the last two drivers.
 */
function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
};
