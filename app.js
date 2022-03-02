import { people } from './data.js';

const personSelector = document.querySelector('.select');
const filledName = document.querySelector('#name');
const filledPronouns = document.querySelector('.pronouns');
const filledPlace = document.querySelector('.favorite_place');
const filledHobbies = document.querySelector('.hobbies');

personSelector.addEventListener('change', (e) => {
    //call renderPerson with index corresponding to the name that just got selected
});

function renderPerson(index) {
    filledName.textContent = 'Name: ' + people[index].name;
    filledPronouns.textContent = 'Pronouns: ' + people[index].pronouns;
    filledPlace.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        filledHobbies.appendChild(li);
    }
}