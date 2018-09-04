const dog_api = 'https://dog.ceo/api/breeds/list/all'
const nameBreed = document.querySelector("#selectBreed");
const viewDog = document.querySelector("#viewDog");
const breedImage = document.querySelector("#breedImage");

function random(){
    //This is the code
    $.ajax({
        
        url: "https://dog.ceo/api/breeds/list",
        dataType: "json",
        success: data => {
        console.log(data)
        for(let i=0; i<data.message.length; i++)
          nameBreed.innerHTML += `
        {
            <option value="${data.message[i]}"> ${data.message[i]} </option>
        }
            `
        },
        error: error =>
        console.log("eerererererorroroorror")
        
    })
    

}
random()
viewDog.addEventListener('click', getDogName =>{
    
    const breedName = selectBreed.options[selectBreed.selectedIndex].value;
    $.ajax({
        type: "GET",
        url: `https://dog.ceo/api/breed/${breedName}/images/random`,
        dataType: "JSON",
        success: data =>{
        console.log(data)
        
        breedImage.setAttribute('src',data.message);
    },
    error: error => 
    console.log("eeeeeeerrrrrrrrrrrerrrrrrrrrrrrrrrrrrroooooooooorrrrrrrrrrrrrr")
    })
})
