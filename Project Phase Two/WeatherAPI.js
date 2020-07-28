//variables that will be used
let city = document.querySelector(".city");
let inputCity = document.querySelector(".inputCity");
let lonLat = document.querySelector(".lonAndLat");
let temp = document.querySelector(".temp");
let getWeather = document.querySelector(".submit");
let icon= document.querySelector(".image");
let desc= document.querySelector(".weatherCondition");

//Button with event listener
getWeather.addEventListener('click', function(e) {
    //prevents page refresh
    e.preventDefault();
    //fetches api request
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity.value + ",ca&appid=a2e7e84af08a53de45ca3b556f4872da")
        //returns the file in json form
        .then(response => response.json())
        .then(data => {
            //values that will be used to fill in paragraphs
            let lonValue = data.coord.lon;
            let latValue = data.coord.lat;
            let iconCode = data.weather[0].icon;
            let tempValue = data.main.temp;
            let nameValue = data.name;
            let descValue = data.weather[0].description;

            //Grabs image and appends it
            let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            let img = document.createElement("img");
            img.src = iconUrl;
            icon.appendChild(img);

            //values being placed into paragraphs
            lonLat.innerHTML= lonValue+ "," + latValue;
            city.innerHTML = nameValue + ", Canada";
            desc.innerHTML = descValue;
            //Json file gave me a 3 digit tempature value so I assumed I divide it by 10 for the celcius tempature
            temp.innerHTML = tempValue / 10 +"℃";
        })

    })