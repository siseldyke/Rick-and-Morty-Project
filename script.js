//variables


const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#champName')
const titleContainer = document.querySelector('#champTitle')
const imageContainer = document.querySelector('#champImage')





// functions

button.addEventListener('click', async () => {
    let name = input.value
    let response = await axios.get(
        `https://rickandmortyapi.com/api/character${name}`
    )
    console.log(response)

    // let champName = response.data.data[name].id
    // nameContainer.textContent = (champName)
    
    // let champTitle = response.data.data[name].title
    // titleContainer.textContent=(champTitle)

    // let champImage = response.data.data[name].image.full
    // imageContainer.setAttribute('src', champImage)
})

