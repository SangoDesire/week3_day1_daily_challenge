//Create an array which value is the planets of the solar system.
const solarSystem = [{
        name: 'Mercure',
        color: 'gray',
        moons: []
    }, {
        name: 'Vénus',
        color: 'yellow',
        moons: []
    }, {
        name: 'Terre',
        color: 'blue',
        moons: ['Lune']
    }, {
        name: 'Mars',
        color: 'red',
        moons: ['Phobos', 'Deimos']
    },
    {
        name: 'Jupiter',
        color: 'white',
        moons: []
    },
    {
        name: 'Saturne',
        color: 'purple',
        moons: []
    },
    {
        name: 'Uranus',
        color: 'orange',
        moons: []
    },
    {
        name: 'Neptune',
        color: 'green',
        moons: []
    },


];
//match  with
const section = document.querySelector('.listPlanets');

solarSystem.forEach(planet => {
    //For each planet in the array, create a <div> using createElement.
    //This div should have a class named "planet"
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');

    //Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
    planetDiv.classList.add(`color-${planet.name}`);
    planetDiv.textContent = planet.name;

    //Bonus: Do the same process to create the moons
    planet.moons.forEach(moon => {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.textContent = moon;
        planetDiv.appendChild(moonDiv);
    });

    // Finally append each div to the <section> in the HTML (presented below).
    section.appendChild(planetDiv);
});

const style = document.createElement('style');
document.head.appendChild(style);

solarSystem.forEach(planet => {
    style.innerHTML += `.color-${planet.name} { background-color: ${planet.color}; }`;
});