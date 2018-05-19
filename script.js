/* write your script here */
let database = [{
name: "Waitress",
mainCharacter: "Jenna Hunterson",
mainCharacter actor: "Jessie Mueller",
openingNight: "April 24, 2016",
playwright: "Jessie Nelson"
},{
name: "Heathers",
mainCharacter: "Veronica Sawyet",
mainCharacter actor: "Barrett Wilbert Weed",
openingNight: "April 17, 2014",
playwright: "Kevin Murphy + Laurence O'Keefe"
},{
name: "Natasha, Pierre and the Great Comet of 1812",
mainCharacter: "Natasha Rostova",
mainCharacter actor: "Phillipa Soo",
openingNight: "September 27, 2013",
playwright: "Dave Malloy"
},{
name: "Mean Girls",
mainCharacter: "Cady Heron",
mainCharacter actor: "Erika Henningson",
openingNight: "April 8, 2018",
playwright: "Tina Fey"
},{
name: "Dear Evan Hansen",
mainCharacter: "Evan Hansen",
mainCharacter actor: "Ben Platt",
openingNight: "December 4, 2016",
playwright: "Steven Levenson"
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
