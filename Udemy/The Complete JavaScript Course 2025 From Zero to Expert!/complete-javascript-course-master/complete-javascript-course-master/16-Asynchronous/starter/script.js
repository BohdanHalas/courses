'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

//https://countries-api-836d.onrender.com/countries/

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
  countriesContainer?.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
  );
  // request.open('GET', 'https://restcountries.com/v2/name/portugal');

  request.send();

  request.addEventListener(`load`, function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
  });
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
  );
  // request.open('GET', 'https://restcountries.com/v2/name/portugal');

  request.send();

  request.addEventListener(`load`, function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data?.borders[0];
    console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
    );
    request2.send();
    request2.addEventListener('load', function () {
      //   console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      //   console.log(data);
      // Render country 2
      renderCountry(data2, `neighbour`);
    });
  });
};

// getCountryAndNeighbour('ukraine');
// getCountryAndNeighbour('germany');
// getCountryData('spain');
// getCountryData('portugal');

// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('Kappa');
//   }, 1000);
// }, 1000);
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('Kappa');
//     setTimeout(() => {
//       console.log('Kappa x2');
//       setTimeout(() => {
//         console.log('AAAAAA');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
*/
// const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//   );
//   request.send();

// const request = fetch(
//   `https://countries-api-836d.onrender.com/countries/name/ukraine`,
// );
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  // Country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // Country 2
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
      );
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data, 'neighbour');
      //   console.log(data);
      const neighbour = data.borders[0];
      console.log(neighbour);
      if (!neighbour) return;
      // Country 3
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData(`ukraine`);
