//variables


const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#charName')
const titleContainer = document.querySelector('#charSpecies')
const imageContainer = document.querySelector('#charImage')
const statusContainer = document.querySelector('#charStatus')
const statShow = document.querySelector('.statImageShow')
const locationContainer = document.querySelector('#charLocation')
const originContainer = document.querySelector('#charOrigin')
const nextButton = document.querySelector('#nextChar')
const prevButton = document.querySelector('#previousChar')
const soundButton = document.querySelector('#soundButton')


// functions




button.addEventListener('click',  async () => {
    let name = input.value
    let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
    )
    // if (input.key === 'Enter'){
    //     input.preventDefault()
    //     document.querySelector('#submitButton').click()
    // }
    console.log(response)

    let charName = response.data.results[0].name
    nameContainer.textContent = (charName)
    
    let charSpecies = response.data.results[0].species
    titleContainer.textContent=(charSpecies)

    let charStatus = response.data.results[0].status
    statusContainer.textContent=(charStatus)
   
    // if(charName === name){
    //     statShow.classList.add('.statImageShow')
    // }

    let charLocate = response.data.results[0].location.name
    locationContainer.textContent = (charLocate)

    let charOrigin = response.data.results[0].origin.name
    originContainer.textContent = (charOrigin)

    let charImage = response.data.results[0].image
    imageContainer.setAttribute('src', charImage)


    
    let currentIndex = 0;
    
    nextButton.addEventListener('click' , async() =>{
        currentIndex = (currentIndex + 1)
        console.log(currentIndex)
        nameContainer.textContent = (response.data.results[currentIndex].name)
        titleContainer.textContent = (response.data.results[currentIndex].species)
        statusContainer.textContent = (response.data.results[currentIndex].status)
        locationContainer.textcontent = (response.data.results[currentIndex].location.name)
        originContainer.textContent = (response.data.results[currentIndex].origin.name)
        imageContainer.setAttribute('src',  response.data.results[currentIndex].image)
    })
    // let prevIndex = 0    
    prevButton.addEventListener('click', async() =>{
       console.log(currentIndex)
        if (currentIndex > 0){
            currentIndex = (currentIndex - 1)
        }
        console.log(currentIndex)
        nameContainer.textContent = (response.data.results[currentIndex].name)
        titleContainer.textContent = (response.data.results[currentIndex].species)
        statusContainer.textContent = (response.data.results[currentIndex].status)
        locationContainer.textcontent = (response.data.results[currentIndex].location.name)
        originContainer.textContent = (response.data.results[currentIndex].origin.name)
        imageContainer.setAttribute('src',  response.data.results[currentIndex].image)
    })
    
    
    // const sounds =[
    //     soundOne = ('https://www.myinstants.com/en/instant/oooweee-76745/?utm_source=copy&utm_medium=share'),
    //     soundTwo = ('https://www.myinstants.com/en/instant/wubba-lubba-dub-dub-2-23931/?utm_source=copy&utm_medium=share'),
    //     soundThree = ('https://www.myinstants.com/en/instant/oh-jeez-rick-56706/?utm_source=copy&utm_medium=share'),
        
    // ] 
    // let allSounds = 0
    
    // soundButton.addEventListener('click', () => {
    //      allSounds = (allSounds + 1)
    //      console.log(sounds[allSounds])
    // })


})
    