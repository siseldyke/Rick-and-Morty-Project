//variables


const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#charName')
const titleContainer = document.querySelector('#charSpecies')
const imageContainer = document.querySelector('#charImage')
const statusContainer = document.querySelector('#charStatus')
const locationContainer = document.querySelector('#charLocation')
const originContainer = document.querySelector('#charOrigin')
const nextButton = document.querySelector('#nextChar')
const prevButton = document.querySelector('#previousChar')




// functions

button.addEventListener('click', async () => {
    let name = input.value
    let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
    )
    console.log(response)

    let charName = response.data.results[0].name
    nameContainer.textContent = (charName)
    
    let charSpecies = response.data.results[0].species
    titleContainer.textContent=(charSpecies)

    let charStatus = response.data.results[0].status
    statusContainer.textContent=(charStatus)

    // let charLocate = response.data.results[0].location.name
    // locationContainer.textContent = (charLocate)

    // let charOrigin = response.data.results[0].origin.name
    // originContainer.textContent = (charOrigin)

    let charImage = response.data.results[0].image
    imageContainer.setAttribute('src', charImage)
})

    // let next = document.querySelector("next").textContent;
    // let currentIndex =0;
    // nextButton.addEventListener('click' , async() =>{
    //     currentIndex = (currentIndex + 1) % next.length;
    //     document.querySelector('next').textContent = next.charAt(currentIndex)
    // })