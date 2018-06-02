/* write your script here */
let database = [{
name: "Waitress",
mainCharacter: "Jenna Hunterson",
mainCharacterActor: "Jessie Mueller",
openingNight: "April 24, 2016",
playwright: "Jessie Nelson",
picture:"img/Jenna_Hunterson.jpg"
},{
name: "Heathers",
mainCharacter: "Veronica Sawyet",
mainCharacterActor: "Barrett Wilbert Weed",
openingNight: "April 17, 2014",
playwright: "Kevin Murphy + Laurence O'Keefe",
picture:"img/Barrett_Wilbert_Weed.jpg"
},{
name: "Natasha, Pierre and the Great Comet of 1812",
mainCharacter: "Natasha Rostova",
mainCharacterActor: "Phillipa Soo",
openingNight: "September 27, 2013",
playwright: "Dave Malloy",
picture:"img/Phillipa_Soo.jpg"
},{
name: "Mean Girls",
mainCharacter: "Cady Heron",
mainCharacteractor: "Erika Henningson",
openingNight: "April 8, 2018",
playwright: "Tina Fey",
picture:"img/Erika_Henningson.jpg"
},{
name: "Dear Evan Hansen",
mainCharacter: "Evan Hansen",
mainCharacteractor: "Ben Platt",
openingNight: "December 4, 2016",
playwright: "Steven Levenson",
picture:"img/Ben_Platt.jpg"
}];

let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");
let autoSuggestions = document.getElementById("auto-suggestions");
let display = document.getElementById("display");

searchBar.addEventListener("keypress", checkKey);
searchButton.addEventListener("click", processInput);j

function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
    //console.log("You pressed enter!");
    processInput();
  }
}

function processInput() {
  let cleanedRecordName = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML + '';
  autoSuggestions.style.display = 'none';
  autoSuggestions.innerHTML = '';
  let databaseRecord = getRecord(cleanedInput);

  if(databaseRecord != null) {
    displayRecord(databaseRecord);
  } else {
    alert('No results');
  }

}

funciton getRecord(cleanedInput) {
  for(let i = 0; i < database.length; i++) {
    let cleanedRecordName = database[i].species.toLowerCase().trim();
    if(cleanedInput==cleanedRecordName){
      return database[i];
    }
  }

  return null;
}
