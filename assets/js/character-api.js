const characterApi = {}

characterApi.getCharacters = (page = 1) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`
    return fetch (url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}