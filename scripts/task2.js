// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

const myPhoto = "images/leerue.jpeg"
document.querySelector("img").setAttribute('src', myPhoto)

document.getElementById("name").innerHTML = "Leonah Dongo";

//** "year" *//
document.getElementById("year").innerHTML = "2023";

//* ARRAYS *//

//**Step 1: declare and instantiate an array variable to hold your favorite foods**//
let favoriteFoods = ['spaghetti bolognese','Fried rice','burger','Pizza'];

//**Step 2: place the values of the favorite foods variable into the HTML file**//
document.querySelector('#food').innerHTML = favoriteFoods;

//**Step 3: declare and instantiate a variable to hold another favorite food**//
let moreFavoriteFoods = 'boiled potatoes';

//**Step 4: add the variable holding another favorite food to the favorite food array**//
favoriteFood.push(moreFavoriteFoods);

//**Step 5: repeat Step 2**//
document.querySelector('#food').innerHTML = favoriteFoods;

//**Step 6: remove the first element in the favorite foods array**//
favoriteFoods.shift();

//**Step 7: repeat Step 2**//
document.querySelector('#food').innerHTML = favoriteFoods;

//**Step 8: remove the last element in the favorite foods array **//
favoriteFoods.pop();

//**Step 7: repeat Step 2**//
document.querySelector('#food').innerHTML = favoriteFoods;

