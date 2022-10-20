import "./data.js";
/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
const pokemonsName = document.querySelector("#pokemon-name");
const pokemonsType = document.querySelectorAll("input[type='checkbox']");
let userPokemons = [];
let filter;

function renderPokemons(pokemons) {
  for(let pokemon = 0; pokemon < pokemons.length; pokemon ++){
    let div = document.createElement('div');
    let img = new Image();
    img.src = `${pokemons[pokemon].image}`;
    div.classList.add(`${pokemons[pokemon].name}`);
    div.appendChild(img)
    pokemonsContainer.appendChild(div)
    // pokemonsContainer.innerHTML += `<div class ="${pokemons[pokemon].name}"><img src="${pokemons[pokemon].image}"></div>`;
  };
};
renderPokemons(pokemons)
// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
// renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

// TODO: Usunąć wszystkie znaki ze stringów w pokemons
// TODO: Stylizacja CSS

function filterPokemons(pokemons) {
  for(let type of pokemonsType){
    if(type.checked){
      userPokemons.push(type.id);
    };
  };
  
  if(pokemonsName.value != ""){
    userPokemons.push(pokemonsName.value)
  }
  
  for(let pokemon = 0; pokemon < pokemons.length; pokemon ++){
    const typesPokemon = pokemons[pokemon].types
    filter = userPokemons.map(d => d == typesPokemon[0] || d == typesPokemon[1]);
    for(let g of filter){
      if(g){
          console.log(pokemons[pokemon].id);
      }else{
        let allDiv = document.querySelectorAll(`.${pokemons[pokemon].name}`);
        for(let el of allDiv){
          el.style.visibility = "hidden";
          el.style.display = "none";
        }
      };  
      }
      
    }
    
};



const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  filterPokemons(pokemons);
  userPokemons = []
  filter = []
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  // renderPokemons(filterPokemons(pokemons));
  
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
