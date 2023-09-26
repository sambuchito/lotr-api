const icons = {
    clear: '☀',
    rain: '️🌧',
    storm: '⛈',
    snow: '🌨',
    mist: '🌫',
    clouds: '☁',
  };
  
  // Unsplash random image generator - commented out as it can only be accessed 50 times per hour
  $(document).ready(function() {
      axios({
          method: 'get',
          url: 'https://api.unsplash.com/photos/random?query=lotr&client_id=a-BVuPydI0vKOMpkhFrM-VeKrX3TAttNqKDvYwP7UtQ'
      })
      .then(response => {
          $('body').append(`<img src=${response.data.urls.regular} />`)
          // Adding a class to the image so that it can be styled in CSS.
          $('img').addClass( "background")
      })
      .catch()
  })
  
  $(document).ready(function() {
      axios({
          method: 'get',
          url: 'http://api.openweathermap.org/data/2.5/weather?q=montevideo&units=metric&APPID=b0c25191a55587d9b4dc04a46fab2436'
      })
      .then(response => {
          let weatherOutside = response.data.weather[0].main
          console.log(weatherOutside)
          console.log(icons.clear)
          if (weatherOutside = 'Clear') {
              weatherOutside = icons.clear
          } else if (weatherOutside = 'Rain') {
              weatherOutside = icons.rain
          } else if (weatherOutside = 'Storm') {
              weatherOutside = icons.storm
          } else if (weatherOutside = 'Snow') {
              weatherOutside = icons.snow
          } else if (weatherOutside = 'Mist') {
              weatherOutside = icons.mist
          } else if (weatherOutside = 'Cloud') {
              weatherOutside = icons.clouds
          }
          $('#temperatura').html(`<p> ${weatherOutside} ${response.data.main.temp} C </p>`);

          // Añade una clase al elemento para aplicar estilos CSS
          $('#temperatura p').addClass("temperature");
      })
      .catch(error => {
          console.log(error)
      })
  })
  // pm.globals.get("Authorization");
  $(document).ready(function() {
      axios({
          method: 'get',
          url: 'https://the-one-api.dev/v2/quote',
          
              headers: {
                  "Authorization": "Bearer " + "Mq3_FmU8kg8ckKYy8mDt"
              }
          
      })
      .then(response => {
          console.log(response)
          let randomNumber = Math.floor(Math.random()*500)
          console.log(randomNumber)
          var quotes = response.data.docs[randomNumber].dialog
          console.log(quotes)
          $('#ct').append(`<h3> " ${quotes} " </h3>`)
          // Adding a class to the image so that it can be styled in CSS.
          $('#ct h3').addClass( "quote")
      })
      .catch(error => {
          console.log(error)
      })
  })



