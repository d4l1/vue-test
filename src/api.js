const url='https://rickandmortyapi.com/api'

function getResults(){
    return fetch(`${url}/character?page=10`)
    .then(res => res.json())
    .then(res => res.results)
}

export default{
    getResults
}