'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;
let mapEvent;
// getting current location

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];
      map = L.map('map').setView([...coords], 13);
      console.log(map);
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          attribution:
            'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EAP, and the GIS User Community',
        },
      ).addTo(map);
      // Handling click on maps event
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      //   alert(`Could not get your position`);
    },
  );
form?.addEventListener('submit', function (e) {
  // clear input fields
  inputCadence.value =
    inputDuration.value =
    inputDistance.value =
    inputElevation.value =
      '';
  //display market
  e.preventDefault();
  console.log(mapEvent);
  const { lat: latitude, lng: longitude } = mapEvent.latlng;
  console.log(latitude, longitude);
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 300,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `running-popup`,
      }),
    )
    .setPopupContent('Running')
    .openPopup();
});

inputType.addEventListener('change', function (e) {
  e.preventDefault();
  inputElevation.closest('.form__row')?.classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row')?.classList.toggle('form__row--hidden');
});
