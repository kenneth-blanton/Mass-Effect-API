let characters = [];

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
    console.log(data.characters[0]);
    document.getElementById("charactersList").innerHTML = `
    ${data.characters[0].squadmates.map(characterTemplate).join('')}
    ${data.characters[0].temporarySquadMates.map(characterTemplate).join('')}
    ${data.characters[0].Allies.map(characterTemplate).join('')}
    ${data.characters[0].Adversaries.map(characterTemplate).join('')}
    `;
}

function characterTemplate(eachCharacter) {
    /* 
    The map function iterates through an array
    Set up a parameter for it (eachCharacter)
    Use that parameter (eachCharacter) just like data 
    */
    return  `
    <li class="character">
            <img src="${eachCharacter.img.split('rev')[0]}"></img>
            <h5 class="planet-name">Name: ${eachCharacter.name}</h5>
            <p>Race: ${eachCharacter.race}</p>
    </li>`
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = characters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.race.toLowerCase().includes(searchString)
        );
    });
   buildPage(filteredCharacters);
});