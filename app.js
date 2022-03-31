import { people } from './data.js';

const personSelector = document.querySelector('.select');
const filledName = document.querySelector('#name');
const filledPronouns = document.querySelector('.pronouns');
const filledPlace = document.querySelector('.favorite_place');
const filledHobbies = document.querySelector('.hobbies');
const contain = document.querySelector('.contain');

personSelector.addEventListener('change', (event) => {
    filledHobbies.innerHTML = ' ';
    contain.classList.remove('Hailey', 'Thomas');

    const selected = event.target.value;

    if (selected === 'one') {
        renderPerson(0);
    } else {
        renderPerson(1);
    }

    
});

function renderPerson(index) {
    contain.classList.add(`${people[index].name}`);

    filledName.textContent = 'Name: ' + people[index].name;
    filledPronouns.textContent = 'Pronouns: ' + people[index].pronouns;
    filledPlace.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        filledHobbies.appendChild(li);
    }
}