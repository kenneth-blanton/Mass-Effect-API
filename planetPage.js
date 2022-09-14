getData()
.then(buildPage)
.catch(error => {
    console.log(error);
});

async function getData() {
    const fetching = await fetch("https://raw.githubusercontent.com/cvines528/mass-effect-api/main/db.json"); // fetched data as a variable
    console.log(fetching);
    return fetching.json();
}

function buildPage(data) {
    console.log(data);
    document.getElementById("charactersList").innerHTML = `
    ${data.planets.map(planetTemplate).join('')}
    `;
}

function planetTemplate(eachPlanet) {
    /* 
    The map function iterates through an array
    Set up a parameter for it (eachPlanet)
    Use that parameter (eachPlanet) just like data 
    */
    return  `
    <li class="character">
        <div class="planet-picture"><img src="${eachPlanet.picture.split('rev')[0]}"></div>` +
        `<h3 class="planet-name">${eachPlanet.name}</h3>` +
        `<p class="home-desc">${eachPlanet.description.split('.')[0]}</p>` +
        `<p class="home-race"><b>Home Race:</b> ${eachPlanet.homeRace}</p>
    </li>`
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    let planets = [];
    const filteredCharacters = planets.name.filter((planets) => {
        return (
            planets.name.toLowerCase().includes(searchString)
        );
    });
    buildPage(filteredCharacters);
});

// Below is a more descriptive example of what's happening above

// fetch('https://raw.githubusercontent.com/cvines528/mass-effect-api/main/db.json')
// .then(response => {
//    console.log(response); // Tells us status of repsonse in console
//     if (!response.ok){
//         throw Error("ERROR");
//     }
//     return response.json(); // Gets API data
// }) // Gets a response that everything is going good
// .then(data => { // The parameter (data) is the api's data in object form
    
//     // The next line builds the page via template literal onto div id "app" in html file
//     document.getElementById("app").innerHTML = `
//     <h1>Planet Page</h1>
//     ${data.planets.map(planetTemplate).join('')}
//     `;
// })
// .catch(error => {
//     console.log(error);
// });

// function planetTemplate(eachPlanet) {
//     /* 
//     The map function iterates through an array
//     Set up a parameter for it (eachPlanet)
//     Use that parameter (eachPlanet) just like data 
//     */
//     return  `
//     <div class="card">
//         <div class="planet-picture"><img src="${eachPlanet.picture.split('rev')[0]}"></div>` +
//         `<h2 class="planet-name">Name: ${eachPlanet.name}</h2>` +
//         `<p class="home-desc">${eachPlanet.description}</p>` +
//         `<p class="home-race"><b>Home Race:</b> ${eachPlanet.homeRace}</p>
//     </div>`
// }