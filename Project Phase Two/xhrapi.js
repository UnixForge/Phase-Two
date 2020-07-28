//grab the div id for appening
let priority = document.getElementById("priorities");

//Grab the JSON url
let requestURL = "https://raw.githubusercontent.com/UnixForge/Phase-Two/master/Project%20Phase%20Two/Priorities.json";
//create a http request
let request = new XMLHttpRequest();
//send a GET request to open the json url
request.open("GET", requestURL);
//recieve it as json format
request.responseType = "json";
request.send();

//Once loaded send the object to the function
request.onload = function () {
    let prio = request.response;
    console.log(prio);
    priorityInfo(prio);
}

//function will go through the json and append each object in order
function priorityInfo(jsonObj) {
    //Bind the JSON topFlavors object to a var
    let prioInfo = jsonObj["Priorites"];
    //Loop through the object
    for (let i = 0; i < prioInfo.length; i++) {
        // STEP 10d: build HTML elements for the content
        let div = document.createElement('div');
        div.setAttribute('class', 'col-md-3');
        let thing = document.createElement('h3');
        let dateDue = document.createElement('p');
        let image = document.createElement('img');

        // Set the textContent property for each of the above elements (except the UL), based on the JSON content
        image.setAttribute('src', 'https://raw.githubusercontent.com/UnixForge/Phase-Two/master/Project%20Phase%20Two/images/' + prioInfo[i].image);
        image.setAttribute('alt', prioInfo[i].thing);
        thing.textContent = prioInfo[i].thing;
        dateDue.textContent = prioInfo[i].dateDue;

        //append each object to the div
        div.appendChild(thing);
        div.appendChild(dateDue);
        div.appendChild(image);
        priority.appendChild(div);
    }
}