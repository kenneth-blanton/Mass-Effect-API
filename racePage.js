const raceList = document.getElementById('raceList');
const raceList2 = document.getElementById('raceList2');
const raceList3 = document.getElementById('raceList3');
const raceList4 = document.getElementById('raceList4');
const raceList5 = document.getElementById('raceList5');
const searchBar = document.getElementById('searchBar');
let data = [];

// const btns = document.querySelectorAll('.open')
// console.log(btns)

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredRaces = data.races[0].milkyWay[0].citadelRaces.filter((race) => {
        return (
            race.name.toLowerCase().includes(searchString)
        );
    });
    displayCitadel(filteredRaces);

    const filteredRaces2 = data.races[0].milkyWay[0].nonCitadelRaces.filter((race) => {
        return (
            race.name.toLowerCase().includes(searchString)
        );
    });
    displayNonCitadel(filteredRaces2);

    const filteredRaces3 = data.races[0].milkyWay[0].historicalRaces.filter((race) => {
        return (
            race.name.toLowerCase().includes(searchString)
        );
    });
    displayHistorical(filteredRaces3);

    const filteredRaces4 = data.races[0].milkyWay[0].nonSapientCreatures.filter((race) => {
        return (
            race.name.toLowerCase().includes(searchString)
        );
    });
    displaynonSapientCreatures(filteredRaces4);

    const filteredRaces5 = data.races[0].milkyWay[0].otherCreatures.filter((race) => {
        return (
            race.name.toLowerCase().includes(searchString)
        );
    });
    displayotherCreatures(filteredRaces5);
});

const loadPlanets = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/cvines528/mass-effect-api/main/db.json');
        data = await res.json();
        displayCitadel(data.races[0].milkyWay[0].citadelRaces);
        displayNonCitadel(data.races[0].milkyWay[0].nonCitadelRaces);
        displayHistorical(data.races[0].milkyWay[0].historicalRaces);
        displaynonSapientCreatures(data.races[0].milkyWay[0].nonSapientCreatures);
        displayotherCreatures(data.races[0].milkyWay[0].otherCreatures);
    } catch (error) {
        console.error(error);
    }
};

const displayCitadel = (races) => {
    if (races.length == 0) {
        document.getElementById("Citadel Races").style.display = "none";
     } else {
        document.getElementById("Citadel Races").style.display = "block";
     }

    const htmlString = races
        .map((race) => {
            return `
            <div class="planet">
                <img src="${race.picture.split('rev')[0]}"></img>
                <h3>${race.name}</h3>
                <p>${race.description}</p>
            </div>
        `;
        })
        .join('');
    raceList.innerHTML = htmlString;
};

const displayNonCitadel = (races) => {
    if (races.length == 0) {
        document.getElementById("Non-Citadel Races").style.display = "none";
     } else {
        document.getElementById("Non-Citadel Races").style.display = "block";
     }

    const htmlString = races
        .map((race) => {
            return `
            <div class="planet">
                <img src="${race.picture.split('rev')[0]}"></img>
                <h3>${race.name}</h3>
                <p>${race.description}</p>
            </div>
        `;
        })
        .join('');
    raceList2.innerHTML = htmlString;
};

const displayHistorical = (races) => {
    if (races.length == 0) {
        document.getElementById("Historical Races").style.display = "none";
     } else {
        document.getElementById("Historical Races").style.display = "block";
     }

    const htmlString = races
        .map((race) => {
            return `
            <div class="planet">
                <img src="${race.picture.split('rev')[0]}"></img>
                <h3>${race.name}</h3>
                <p>${race.description}</p>
            </div>
        `;
        })
        .join('');
    raceList3.innerHTML = htmlString;
};

const displaynonSapientCreatures = (races) => {
    if (races.length == 0) {
        document.getElementById("Non-Sapient Creatures").style.display = "none";
     } else {
        document.getElementById("Non-Sapient Creatures").style.display = "block";
     }

    const htmlString = races
        .map((race) => {
            return `
            <div class="planet">
                <img src="${race.picture.split('rev')[0]}"></img>
                <h3>${race.name}</h3>
                <p>${race.description}</p>
            </div>
        `;
        })
        .join('');
    raceList4.innerHTML = htmlString;
};

const displayotherCreatures = (races) => {
    if (races.length == 0) {
        document.getElementById("Other Creatures").style.display = "none";
     } else {
        document.getElementById("Other Creatures").style.display = "block";
     }

    const htmlString = races
        .map((race) => {
            return `
            <div class="planet">
                <img src="${race.picture.split('rev')[0]}"></img>
                <h3>${race.name}</h3>
                <p>${race.description}</p>
            </div>
        `;
        })
        .join('');
    raceList5.innerHTML = htmlString;
};

loadPlanets();