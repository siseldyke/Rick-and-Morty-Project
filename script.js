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

    // let charLocate = response.data.results[0].location.name
    // locationContainer.textContent = (charLocate)

    // let charOrigin = response.data.results[0].origin.name
    // originContainer.textContent = (charOrigin)

    let charImage = response.data.results[0].image
    imageContainer.setAttribute('src', charImage)


    let charIndex = response.data.results[0].id
    let currentIndex = 0;
    
    nextButton.addEventListener('click' , async() =>{
       console.log(currentIndex)
        currentIndex = (currentIndex + 1)
        console.log(charIndex)
        console.log(response.data.results[currentIndex])
        nameContainer.textContent = (response.data.results[currentIndex].name)
        titleContainer.textContent = (response.data.results[currentIndex].species)
        statusContainer.textContent = (response.data.results[currentIndex].status)
        imageContainer.setAttribute('src',  response.data.results[currentIndex].image)
        
    })
})



    