function showAlert() {
    alert('hola mundo');
}
async function search(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`)
    const character = await response.json()
    return character
  }
  function render1(data) {
    const character = document.createElement('img')
    character.setAttribute('src', data.image)
    document.body.append(character)
  }
  
  export {search, showAlert, render1};
