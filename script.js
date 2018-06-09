/* write your script here */
let database = [{
name: "Waitress",
mainCharacter: "Jenna Hunterson",
mainCharacterActor: "Jessie Mueller",
playwright: "Jessie Nelson",
picture:"img/Jenna_Hunterson.jpg"
},{
name: "Heathers",
mainCharacter: "Veronica Sawyer",
mainCharacterActor: "Barrett Wilbert Weed",
playwright: "Kevin Murphy + Laurence O'Keefe",
picture:"img/Barrett_Wilbert_Weed.jpg"
},{
name: "Natasha, Pierre and the Great Comet of 1812",
mainCharacter: "Natasha Rostova",
mainCharacterActor: "Phillipa Soo",
playwright: "Dave Malloy",
picture:"img/Phillipa_Soo.jpg"
},{
name: "Mean Girls",
mainCharacter: "Cady Heron",
mainCharacterActor: "Erika Henningson",
playwright: "Tina Fey",
picture:"img/Erika_Henningson.jpg"
},{
name: "Dear Evan Hansen",
mainCharacter: "Evan Hansen",
mainCharacterActor: "Ben Platt",
playwright: "Steven Levenson",
picture:"img/Ben_Platt.jpg"
}];

let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");
let autoSuggestions = document.getElementById("auto-suggestions");
let display = document.getElementById("display");

searchBar.addEventListener("keypress", checkKey);
searchButton.addEventListener("click", processInput);

function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
    //console.log("You pressed enter!");
    processInput();
  }
}

function processInput() {
  let cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = '';
  autoSuggestions.style.display = 'none';
  searchBar.value = '';
  let databaseRecord = getRecord(cleanedInput);

  if(databaseRecord != null) {
    displayRecord(databaseRecord);
  } else {
    alert('No results');
  }

}

function getRecord(cleanedInput) {
  console.log("get record is running");
  for(let i = 0; i < database.length; i++) {
    console.log("ayyyy");
    let cleanedRecordName = database[i].name.toLowerCase().trim();
    console.log(cleanedRecordName);
    if(cleanedInput==cleanedRecordName){
      return database[i];
    }
  }

  return null;
}

function getAutoSuggestions() {
  cleanedInput = searchBar.value.toLowerCase().trim()
  autoSuggestions.innerHTML = "";
  for (let i = 0; i < database.length; i++) {
    let cleanedRecordName = database[i].name.toLowerCase().trim();
    if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
    let matching = cleanedRecordName.substring(0,searchBar.value.length);
    let remaining = cleanedRecordName.substring(searchBar.value.length);
    let result = matching + "<b>" + remaining + "<b>";
    let button = document.createElement("button");

    button.innerHTML = result
    button.style.display = "block"
    button.className = "suggestion"
    activateSuggestionButton(button, database[i]);
    autoSuggestions.appendChild(button);
  }
}

if (autoSuggestions.hasChildNodes()) {
  autoSuggestions.style.display = "block"
}else {
  autoSuggestions.style.display = "none"
}
}

function displayRecord(databaseRecord) {
  let recordName = document.createElement("h2");
  recordName.innerHTML = databaseRecord.name;
  let recordmainCharacter = document.createElement("h2");
  recordmainCharacter.innerHTML = databaseRecord.mainCharacter;
  let recordmainCharacterActor = document.createElement("h2");
if(databaseRecord !=null) {
  recordmainCharacterActor.innerHTML = databaseRecord.mainCharacterActor;
}else {
  recordmainCharacterActor.innerHTML = "none";
}
let recordPicture = document.createElement("img");
recordPicture.src = databaseRecord.picture;
let recordPlaywright = document.createElement("h2");
recordPlaywright.innerHTML = databaseRecord.playwright;

display.appendChild(recordName);
display.appendChild(recordmainCharacter);
display.appendChild(recordmainCharacterActor);
display.appendChild(recordPlaywright);
display.appendChild(recordPicture);
}

function activateSuggestionButton(button, record) {
  button.addEventListener("click", function() {
    displayRecord(record).
    autoSuggestions.innerHTML = "";
    autoSuggestions.style.display = "none";
    searchBar.value = "";
  });
}
