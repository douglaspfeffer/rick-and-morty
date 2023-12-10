const characterList = document.getElementById('characterList')
const loadMoreButton = document.getElementById('loadMoreButton')
let page = 1

function convertCharacterToLi(character){
    return `
        <li class="character" >
                <img src="${character.image}" alt="${character.name}" class="character__logo">
                <div class="character__details">
                    <h2 class="character__name">${character.name}</h2>
                    <p>${character.status} - ${character.species}</p>
                    <span class="text-gray">Gender:</span>
                    <p class="text-paragraph">${character.gender}</p>
                    <span class="text-gray">Origin:</span>
                    <p class="text-paragraph">${character.origin.name}</p>
                    <span class="text-gray">Last known location:</span>
                    <p class="text-paragraph">${character.location.name}</p>
                </div>
            </li>
    `
}

function loadCharacterItems(page) {
    characterApi.getCharacters(page).then((characters = []) => {    
        characterList.innerHTML += characters.map(convertCharacterToLi).join('')    
    })}

loadCharacterItems(page)

loadMoreButton.addEventListener('click', () => {
    page++
    loadCharacterItems(page)
})
