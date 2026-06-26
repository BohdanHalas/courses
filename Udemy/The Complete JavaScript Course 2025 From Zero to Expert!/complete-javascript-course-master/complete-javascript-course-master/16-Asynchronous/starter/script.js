'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// // NEW COUNTRIES API URL (use instead of the URL shown in videos):
// // https://restcountries.com/v2/name/portugal

// // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// //https://countries-api-836d.onrender.com/countries/

// ///////////////////////////////////////
// const renderError = function (msg) {
//   countriesContainer?.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const noNeighbours = function () {
//   throw new Error('Country has not a neighbours');
// };

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;
//   countriesContainer?.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// /*

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//   );
//   // request.open('GET', 'https://restcountries.com/v2/name/portugal');

//   request.send();

//   request.addEventListener(`load`, function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);
//   });
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//   );
//   // request.open('GET', 'https://restcountries.com/v2/name/portugal');

//   request.send();

//   request.addEventListener(`load`, function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data?.borders[0];
//     console.log(neighbour);

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       //   console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//       //   console.log(data);
//       // Render country 2
//       renderCountry(data2, `neighbour`);
//     });
//   });
// };

// // getCountryAndNeighbour('ukraine');
// // getCountryAndNeighbour('germany');
// // getCountryData('spain');
// // getCountryData('portugal');

// // setTimeout(() => {
// //   console.log('1 sec passed');
// //   setTimeout(() => {
// //     console.log('Kappa');
// //   }, 1000);
// // }, 1000);
// // setTimeout(() => {
// //   console.log('1 sec passed');
// //   setTimeout(() => {
// //     console.log('Kappa');
// //     setTimeout(() => {
// //       console.log('Kappa x2');
// //       setTimeout(() => {
// //         console.log('AAAAAA');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);
// */
// // const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${country}`,
// //   );
// //   request.send();

// // const request = fetch(
// //   `https://countries-api-836d.onrender.com/countries/name/ukraine`,
// // );
// // console.log(request);

// // const getCountryData = function (country) {
// //   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// const getJSON = function (url, errorMsg = `Something went wrong`) {
//   return fetch(url).then(response => {
//     console.log(response);

//     if (!response.ok) throw new Error(`${errorMsg}, ${response.status}`);

//     return response.json();
//   });
// };

// // const getCountryData = function (country) {
// //   // Country 1
// //   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = 'narnia';
// //       if (!neighbour) return;
// //       // Country 2
// //       return fetch(
// //         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
// //       );
// //     })
// //     .then(response => {
// //       console.log(response);
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data, 'neighbour');
// //       //   console.log(data);
// //       const neighbour = data.borders[0];
// //       // console.log(neighbour);
// //       if (!neighbour) return;
// //       // Country 3
// //       return fetch(
// //         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
// //       );
// //     })
// //     .then(response => response.json())
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} KAPPA`);
// //       renderError(`Something went wrong: ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     `Country not found`,
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = 'narnia';
//       if (!neighbour) noNeighbours();
//       // Country 2
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         `Country not found`,
//       );
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//       //   console.log(data);
//       const neighbour = data.borders[0];
//       // console.log(neighbour);
//       if (!neighbour) noNeighbours();
//       // Country 3
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         `Country not found`,
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} KAPPA`);
//       renderError(`Something went wrong: ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // btn.addEventListener('click', function () {
// //   getCountryData(`Australia`);
// // });
// // getCountryData(`westeros`);
// /*
// console.log(`Test start`);

// setTimeout(() => console.log(`0 sec timer`), 0);

// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 2_100_000_000; i++) {}
//   console.log(res);
// });
// console.log(`Test end`);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening!`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You are winner!`);
//     } else {
//       reject(new Error(`You are loser!`));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(1)
//   .then(() => {
//     console.log(`1 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 second passed`);
//     return wait(1);
//   })
//   .then(() => console.log(`4 second passed`));

// // setTimeout(() => {
// //   console.log('1 sec passed');
// //   setTimeout(() => {
// //     console.log('Kappa');
// //   }, 1000);
// // }, 1000);
// // setTimeout(() => {
// //   console.log('1 sec passed');
// //   setTimeout(() => {
// //     console.log('Kappa');
// //     setTimeout(() => {
// //       console.log('Kappa x2');
// //       setTimeout(() => {
// //         console.log('AAAAAA');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// Promise.resolve(`You won!`).then(x => console.log(x));
// Promise.reject(new Error(`PROBLEM!`)).catch(x => console.log(x));

// // console.log(`Getting position`);

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err),
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition()
// //   .then(pos => console.log(pos))
// //   .catch(err => console.error(err));

// const whereAmI = function () {
//   // let lat, lng;
//   let nameCountry;
//   getPosition()
//     .then(pos => {
//       // console.log(pos);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);
//       const newAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
//       console.log(lat, lng);
//       return fetch(newAPI);
//     })
//     .then(response => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(`Smth went wrong: (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       // console.log(data);
//       nameCountry = data.countryName;
//       // console.log(nameCountry);
//       // getCountryData(nameCountry);
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${nameCountry}`,
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found: ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}, OH NO`))
//     .finally(() => (countriesContainer.style.opacity = 1));
//   // console.log(nameCountry);

//   // getCountryData();
// };

// btn?.addEventListener('click', whereAmI);

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// //   fetch(
// //     `https://countries-api-836d.onrender.com/countries/name/${country}`,
// //   ).then(response => console.log(response));

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const newAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;

//     // Reverse geocoding
//     const resGeo = await fetch(newAPI);
//     if (!resGeo.ok) throw new Error(`Problem getting location data`);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     const response = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`,
//     );
//     if (!response.ok) throw new Error(`Problem getting country`);
//     // console.log(response);
//     const data = await response.json();
//     // console.log(data[0]);
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}`;
//   } catch (err) {
//     console.log(`${err} Kappa`);
//     renderError('Smth went wrong');

//     // Reject promise from async function
//     throw err;
//   }
// };
// console.log(`1: Will get location`);
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(city))
// //   .catch(err => console.error(`${err} WTF?`))
// //   .finally(() => console.log(`2: Finished getting location`));
// (async function () {
//   try {
//     const response = await whereAmI();
//     console.log(response);
//   } catch (err) {
//     console.error(`${err} WTF?`);
//   }
//   console.log(`2: Finished getting location`);
// })();

// // console.log(`FIRST`);

// // try {
// //   let y = 1;
// //   const x = 2;
// //   y = 3;
// // } catch (err) {
// //   console.log(err);
// // }

// const getThreeCountries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c1}`,
//     // );
//     // const [data2] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c2}`,
//     // );
//     // const [data3] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c3}`,
//     // );

//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//     ]);
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     // console.log(data);
//     console.log(data.map(data => data[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// getThreeCountries(`ukraine`, `spain`, `canada`);

// // Promise.race
// (async function () {
//   const response = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/ukraine`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/spain`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/denmark`),
//   ]);
//   console.log(response[0]);
// })();
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Time is out`));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://countries-api-836d.onrender.com/countries/name/denmark`),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('One More Success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('One More Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// // Promise.any [ES2021] Як race але ігноруються відкинуті

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('One More Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// */

// /////////////////////////////
// /////////////////////////////

// // Challenge #1
// /*
// // const newAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;

// const testCoords = [52.508, 13.381];
// const testCoords2 = [19.037, 72.873];
// const testCoords3 = [51.6175, 24.9136];

// const whereAmI = function (lat, lng) {
//   const newAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
//   // console.log(lat);
//   // console.log(lng);
//   let nameCountry;
//   fetch(newAPI)
//     .then(response => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(`Smth went wrong: (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       // console.log(data);
//       nameCountry = data.countryName;
//       // console.log(nameCountry);
//       // getCountryData(nameCountry);
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${nameCountry}`,
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found: ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}, OH NO`))
//     .finally(() => (countriesContainer.style.opacity = 1));
//   // console.log(nameCountry);

//   // getCountryData();
// };
// whereAmI(...testCoords);
// whereAmI(...testCoords2);
// whereAmI(...testCoords3);

// ////////////////////
// // Challenge #2
// const imgContainer = document.querySelector('.images');

// // imgContainer?.append(myImage);
// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// const createImage = function (imgPath) {
//   const promise = new Promise(function (resolve, reject) {
//     const myImage = document.createElement('img');
//     myImage.src = imgPath;
//     myImage.addEventListener('load', function () {
//       imgContainer?.append(myImage);
//       resolve(myImage);
//     });

//     myImage.addEventListener('error', function () {
//       reject(new Error(`Smth went wrong!`));
//     });
//   });
//   return promise;
// };
// let currentImg;
// createImage(`img/img-1.jpg`)
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage(`img/img-2.jpg`);
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err));
// */
// /////////////////////////

// // Challenge # 3

// const imgContainer = document.querySelector('.images');

// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// let currentImg;

// const createImage = function (imgPath) {
//   const promise = new Promise(function (resolve, reject) {
//     const myImage = document.createElement('img');
//     myImage.src = imgPath;
//     myImage.addEventListener('load', function () {
//       imgContainer?.append(myImage);
//       resolve(myImage);
//     });

//     myImage.addEventListener('error', function () {
//       reject(new Error(`Smth went wrong!`));
//     });
//   });
//   return promise;
// };

// const loadAndPause = async function () {
//   try {
//     const img1 = await createImage(`img/img-1.jpg`);
//     await wait(2);
//     img1.style.display = 'none';

//     const img2 = await createImage(`img/img-2.jpg`);
//     await wait(2);
//     img2.style.display = 'none';

//     const img3 = await createImage(`img/img-3.jpg`);
//     await wait(2);
//     img3.style.display = 'none';
//   } catch (err) {
//     err => console.error(err);
//   }
// };
// // loadAndPause();

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async value => {
//       return await createImage(value);
//     });
//     console.log(imgs);

//     const data = await Promise.all(imgs);
//     console.log(data);
//     data.forEach(el => el.classList.add(`parallel`));
//   } catch (err) {
//     console.error(err);
//   }
// };

// const imgArr = [`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`];

// loadAll(imgArr);

// SOME PRACTICE

const url =
  'https://ddragon.leagueoflegends.com/cdn/26.13.1/data/en_US/champion.json';
