


const button = document.querySelector('#rickSearch')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#charName')
const titleContainer = document.querySelector('#charSpecies')
const imageContainer = document.querySelector('#charImage')
const statusContainer = document.querySelector('#charStatus')
const locationContainer = document.querySelector('#charLocation')
const originContainer = document.querySelector('#charOrigin')
const nextButton = document.querySelector('#nextChar')
const prevButton = document.querySelector('#previousChar')
const speciesTitle = document.querySelector('#Species')
const statusTitle = document.querySelector('#status')
const locationTitle = document.querySelector('#Location')
const originTitle = document.querySelector('#Origin')





button.addEventListener('click',  async () => {
    let name = input.value
    let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
    )
   console.log(response.data.results[0])
    

    let charName = response.data.results[0].name
    nameContainer.textContent = (charName)
    
    let charSpecies = response.data.results[0].species
    titleContainer.textContent= (charSpecies)

    speciesTitle.textContent =`Species: `

    let charStatus = response.data.results[0].status
    statusContainer.textContent=(charStatus)
   
    statusTitle.textContent =`Status: `
  
    let charLocate = response.data.results[0].location.name
    locationContainer.textContent = (charLocate)

    locationTitle.textContent =`Current Location: `

    let charOrigin = response.data.results[0].origin.name
    originContainer.textContent = (charOrigin)

    originTitle.textContent =`Origin: `

    let charImage = response.data.results[0].image
    imageContainer.setAttribute('src', charImage)


    
    let currentIndex = 0;
    
    nextButton.addEventListener('click' , async() =>{
            if (currentIndex < 19){
            currentIndex = (currentIndex + 1)
            }
        nameContainer.textContent = (response.data.results[currentIndex].name)
        titleContainer.textContent = (response.data.results[currentIndex].species)
        statusContainer.textContent = (response.data.results[currentIndex].status)
        locationContainer.textcontent = (response.data.results[currentIndex].location.name)
        originContainer.textContent = (response.data.results[currentIndex].origin.name)
        imageContainer.setAttribute('src',  response.data.results[currentIndex].image)
    })  
    prevButton.addEventListener('click', async() =>{
       
        if (currentIndex > 0){
            currentIndex = (currentIndex - 1)
        }
        
        nameContainer.textContent = (response.data.results[currentIndex].name)
        titleContainer.textContent = (response.data.results[currentIndex].species)
        statusContainer.textContent = (response.data.results[currentIndex].status)
        locationContainer.textcontent = (response.data.results[currentIndex].location.name)
        originContainer.textContent = (response.data.results[currentIndex].origin.name)
        imageContainer.setAttribute('src',  response.data.results[currentIndex].image)
    })
})
    