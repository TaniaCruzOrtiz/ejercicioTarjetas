
const inputName = document.getElementById('name');
const userName = document.getElementById('username');

const inputEdad = document.getElementById('edad');
const age = document.getElementById('age');

const inputParrafo = document.getElementById('parrafo');
const parrafo = document.getElementById('descripcion');

const nuevoUsuario = [];

const boton = document.getElementById('boton');
    boton.addEventListener('click', () => {
    userName.textContent = inputName.value;
    age.textContent = inputEdad.value;
    parrafo.textContent = inputParrafo.value;

    const usuario = {
        user_name: inputName.value,
        age: inputEdad.value,
        description: inputParrafo.value,
}

const card = createCard();
const userElements = createDescription();

const elementsWithData = populateElements (usuario, userElements);
renderElements(card, elementsWithData);
CARD_SECTION.append(card);

})

const CARD_SECTION = document.getElementById('profiles');

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        //bands:[],
       /*  fav_music: bands.forEach ((band) => {
            const li = document.createElement('li');
            li.textContent = band;
            ul.appendChild(li);
        }) */  

    }

    return userElements;
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;
    
    /*const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })
console.log(bandList);

    userElements.bands = bandList;*/
    return userElements;
}



const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
}

