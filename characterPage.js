const charactersList = document.getElementById('charactersList');
const charactersList2 = document.getElementById('charactersList2');
const charactersList3 = document.getElementById('charactersList3');
const charactersList4 = document.getElementById('charactersList4');
const searchBar = document.getElementById('searchBar');
let data = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredPlanets = data.characters[0].squadmates.filter((planet) => {
        return (
            planet.name.toLowerCase().includes(searchString)
        );
    });
    displaySquadmates(filteredPlanets);

    const filteredPlanets2 = data.characters[0].temporarySquadMates.filter((planet) => {
        return (
            planet.name.toLowerCase().includes(searchString)
        );
    });
    displaytemporarySquadMates(filteredPlanets2);

    const filteredPlanets3 = data.characters[0].Allies.filter((planet) => {
        return (
            planet.name.toLowerCase().includes(searchString)
        );
    });
    displayAllies(filteredPlanets3);

    const filteredPlanets4 = data.characters[0].Adversaries.filter((planet) => {
        return (
            planet.name.toLowerCase().includes(searchString)
        );
    });
    displayAdversaries(filteredPlanets4);
});

const loadPlanets = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/cvines528/mass-effect-api/main/db.json');
        data = await res.json();
        console.log(data)
            displaySquadmates(data.characters[0].squadmates)
            displaytemporarySquadMates(data.characters[0].temporarySquadMates)
            displayAllies(data.characters[0].Allies)
            displayAdversaries(data.characters[0].Adversaries)
        
    } catch (error) {
        console.error(error);
    }
};

const displaySquadmates = (planets) => {
    if (planets.length == 0) {
        document.getElementById("Squadmates").style.display = "none";
     } else {
        document.getElementById("Squadmates").style.display = "block";
     }

    const squadString = planets
        .map((planet) => {
            return `
            <li class="character">
            <img src="${planet.img.split('rev')[0]}"></img>
                <h3>${planet.name}</h3>
                <h4>${planet.race}</h4>
                <p>"${planet.quote}"</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = squadString;
};

const displaytemporarySquadMates = (planets) => {
    if (planets.length == 0) {
       document.getElementById("Temporary Squadmates").style.display = "none";
    } else {
        document.getElementById("Temporary Squadmates").style.display = "block";
     }

    const htmlString = planets
        .map((planet) => {
            return `
            <li class="character">
            <img src="${planet.img.split('rev')[0]}"></img>
                <h3>${planet.name}</h3>
                <h4>${planet.race}</h4>
                <p>"${planet.quote}"</p>
            </li>
        `;
        })
        .join('');
    charactersList2.innerHTML = htmlString;
};

const displayAllies = (planets) => {
    if (planets.length == 0) {
        document.getElementById("Allies").style.display = "none";
     } else {
         document.getElementById("Allies").style.display = "block";
      }

    const htmlString = planets
        .map((planet) => {
            return `
            <li class="character">
            <img src="${planet.img.split('rev')[0]}"></img>
                <h3>${planet.name}</h3>
                <h4>${planet.race}</h4>
                <p>"${planet.quote}"</p>
            </li>
        `;
        })
        .join('');
    charactersList3.innerHTML = htmlString;
};
const displayAdversaries = (planets) => {
    if (planets.length == 0) {
        document.getElementById("Adversaries").style.display = "none";
     } else {
         document.getElementById("Adversaries").style.display = "block";
      }

    const htmlString = planets
        .map((planet) => {
            return `
            <li class="character">
            <img src="${planet.img.split('rev')[0]}"></img>
                <h3>${planet.name}</h3>
                <h4>${planet.race}</h4>
                <p>"${planet.quote}"</p>
            </li>
        `;
        })
        .join('');
    charactersList4.innerHTML = htmlString;
};

loadPlanets();

