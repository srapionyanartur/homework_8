let timer
let deleteFirstPhotoDelay

async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
    
  } catch (e) {
    console.log("There was a problem fetching the breed list.")
  }
}

start()

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option> Select a breed </option>
        ${Object.keys(breedList).reduce(function (breed) {
          
          return `<option value = "akita" > Akita </option>
                  <option value = "beagle" > Beagle </option>
                  <option value = "dalmatian" > Dalmatian </option>
                  <option value = "germanshepherd" > German Shepherd </option>
                  <option value = "husky" > Husky  </option>
                  <option value = "labrador" > Labrador  </option>
                  <option value = "pug" > Pug  </option>
                  <option value = "retriever" > Golden Retriever  </option>
                  <option value = "spaniel" > Cocker Spaniel </option>
          `
        })}
      </select>
  `
}

async function loadByBreed(breed) {
  if (breed != "Select a breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    createSlideshow(data.message)
  }
}

function createSlideshow(images) {
  
  document.getElementById("slideshow").innerHTML = `
  <div class="slide" style="background-image: url('${images[0]}')"></div>
  <div class="slide" style="background-image: url('${images[1]}')"></div>
  `
}




