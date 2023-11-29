const apiKey = 19156974436f94b9edbe37a7f77ef6b1
const input = document.getElementById("search-input");
const button = document.getElementById("search-input");

function getGeolocation(city,){
    const geolocationURL = 'https://api.openweathermap.org/geo/1.0/direct?q=${city},&appid=${apiKey}';
    fetch(geolcationUrl)
    .then(function(res){
     console.log(res)
     return res.json()
    })
    .then(function(data){
      console.log(data)  
    })
}


button.addEventListener("click",function(){
  
// .value is whatever the user selects in the form  
 console.log ("Search Button Clicked", input.value)
 getGeolocation(input.value);
});

<input name="searchTxt" type="text" maxlength="512" id="searchTxt" class="searchField"/>