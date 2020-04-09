// Foursquare API Info
const clientId = '1ZLBQC33SXSQFRARF1GPYQCXMQZAS34JTLLQ2PTCDZZICILD';
const clientSecret = 'KOOK3BVZK34GNFOP532PVRNUFTMHVM2I53ZQ5CIISFJVWEVY';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'dcb6727814dd693ad0fb582b7af3db78';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getVenues = async() => { //anonymous function
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200120`; //for userless authentication
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      //console.log(response.url);
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(item=>item.venue); //take a look if forget the format of foursquare - https://developer.foursquare.com/docs/api-reference/venues/explore/
      console.log(venues);
      return venues;
    }
  }catch(error){
    console.log(error);
  }
}

const getForecast = async() => {
  try{
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json(); //jsonify directly
      console.log(jsonResponse);
      return jsonResponse;
    }
  }catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name,venue.location,venueImgSrc);
    $venue.append(venueContent); //append the content after the tag name directly, inside every $venue
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues=>{
    return renderVenues(venues);
  })
  getForecast().then(forecast=>{
    return renderForecast(forecast);
  })
  return false;
}

$submit.click(executeSearch)