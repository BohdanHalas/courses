// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(x);

// const calcAge = birthYear => 2037 - birthYear;

// calcAge(1999);

// console.log(calcAge(1999));

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [13, -12, -16, -11, `error`, 19, 11, 11, 11, 114, 19, 51];

// const calcTempAmplitude = function (temps) {
//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== `number`) continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// ////////////////////////

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== `number`) continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: `temp`,
//     unit: `celsicus`,
//     value: 10, // Number(prompt(`Degrees celsius:`)),
//   };

//   //   console.log(measurement);

//   console.table(measurement);
//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== `number`) continue;
//     //debugger;
//     if (currentTemp > max) max = currentTemp;

//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//Coding Challenge #1

// Об'єднання стрінгів. Тю

// const printForecast = function (arr) {
//   let message = `...`;
//   for (let i = 0; i < arr.length; i++) {
//     message += ` ${arr[i]}°C in ${i + 1} days ...`;
//   }
//   console.log(message);
// };

// const testArray = [17, 21, 23];
// const testArray2 = [12, 5, -5, 0, 4];

// printForecast(testArray);
// printForecast(testArray2);

//Coding Challenge #2

const testArray = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTrackApp = function (arr) {
  const data = {
    sum: 0,
    avg: 0,
    highDay: ``,
    numberDays: 0,
    fullTime: false,
  };

  for (let i = 0; i < arr.length; i++) {
    data.sum += arr[i];
  }
  console.log(data.sum);
};
timeTrackApp(testArray);
