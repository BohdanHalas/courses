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

// const testArray = [8, 8, 6.5, 0, 8, 4, 0];

// const timeTrackApp = function (arr) {
//   const data = {
//     sum: 0,
//     avg: 0,
//     highDay: [],
//     highDayNew: [],
//     numberDays: 0,
//     fullTime: false,
//   };
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     data.sum += arr[i]; // Sum
//     if (max < arr[i]) max = arr[i]; // Max hours
//     if (arr[i] > 0) data.numberDays++; // Number days
//   }
//   data.avg = data.sum / data.numberDays; // Average hours
//   if (data.sum >= 35) data.fullTime = true; // Full Time

//   for (let i = arr.indexOf(max); i < arr.length; i++) {
//     if (arr[i] === max) {
//       switch (i + 1) {
//         case 1:
//           data.highDay.push(`Monday`);
//           break;
//         case 2:
//           data.highDay.push(`Tuesday`);
//           break;
//         case 3:
//           data.highDay.push(`Wednesday`);
//           break;
//         case 4:
//           data.highDay.push(`Thursday`);
//           break;
//         case 5:
//           data.highDay.push(`Friday`);
//           break;
//         case 6:
//           data.highDay.push(`Saturday`);
//           break;
//         case 7:
//           data.highDay.push(`Sunday`);
//           break;
//       }
//     }
//   } // NumberDays

//   const days7 = [
//     `Monday`,
//     `Tuesday`,
//     `Wednesday`,
//     `Thursday`,
//     `Friday`,
//     `Saturday`,
//     `Sunday`,
//   ];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) data.highDayNew.push(days7[i]);
//   }
//   return data;
// };
// console.log(timeTrackApp(testArray));

function analyzeWeek(hoursPerDay) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Перевірка: масив існує і не пустий
  if (!Array.isArray(hoursPerDay) || hoursPerDay.length === 0) {
    return {
      totalHours: 0,
      averageDailyHours: 0,
      mostWorkedDays: [],
      daysWorked: 0,
      fullTime: false,
    };
  }

  // Загальна кількість відпрацьованих годин
  const totalHours = hoursPerDay.reduce((sum, hours) => sum + hours, 0);

  // Перевірка: чи є хоча б 1 година роботи
  if (totalHours < 1) {
    return {
      totalHours,
      averageDailyHours: 0,
      mostWorkedDays: [],
      daysWorked: 0,
      fullTime: false,
    };
  }

  // Кількість днів, коли працювали більше 0 годин
  const daysWorked = hoursPerDay.filter(hours => hours > 0).length;

  // Середня кількість годин на день (округлення до десятих)
  const averageDailyHours = Number(
    (totalHours / hoursPerDay.length).toFixed(1)
  );

  // Знаходимо максимальну кількість годин за день
  const maxHours = Math.max(...hoursPerDay);

  // Знаходимо всі дні з максимальною кількістю годин
  const mostWorkedDays = hoursPerDay
    .map((hours, index) => (hours === maxHours ? daysOfWeek[index] : null))
    .filter(day => day !== null);

  // Повний робочий тиждень (35 годин або більше)
  const fullTime = totalHours >= 35;

  // Повертаємо фінальний об'єкт
  return {
    totalHours,
    averageDailyHours,
    mostWorkedDays,
    daysWorked,
    fullTime,
  };
}

const testData = [8, 8, 7, 0, 8, 4, 0];
console.log(analyzeWeek(testData));
