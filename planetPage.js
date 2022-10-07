const planetsList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let data = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredPlanets = data.planets.filter((planet) => {
        return (
            planet.name.toLowerCase().includes(searchString) ||
            planet.homeRace.toLowerCase().includes(searchString)
        );
    });
    displayPlanets(filteredPlanets);
});

const loadPlanets = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/cvines528/mass-effect-api/main/db.json');
        data = await res.json();
        displayPlanets(data.planets);
        for (let i = 0; i < data.planets.length; i++) {
            console.log(data.planets[i].name)
        }
    } catch (error) {
        console.error(error);
    }
};

const displayPlanets = (planets) => {
    const htmlString = planets
        .map((planet) => {
            return `
            <li class="character">
                <img src="${planet.picture.split('rev')[0]}"></img>
                <h2>${planet.name}</h2>
                <p>Race: ${planet.homeRace}</p>
            </li>
        `;
        })
        .join('');
    planetsList.innerHTML = htmlString;
};

loadPlanets();

// https://raw.githubusercontent.com/cvines528/mass-effect-api/main/db.json

// function planetTemplate(eachPlanet) {
//     /* 
//     The map function iterates through an array
//     Set up a parameter for it (eachPlanet)
//     Use that parameter (eachPlanet) just like data 
//     */
    
    

    
//     return  `
//     <li class="character">
//         <div class="planet-picture"><img src="${eachPlanet.picture.split('rev')[0]}"></div>` +
//         `<h3 class="planet-name">${eachPlanet.name}</h3>` +
//         `<p class="home-desc">${eachPlanet.description.split('.')[0]}</p>` +
//         `<p class="home-race"><b>Home Race:</b> ${eachPlanet.homeRace}</p>
//     </li>`
// }



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