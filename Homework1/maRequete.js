console.log("lancement du script Javascript");

// je définis la cible de ma requête
const url = "https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev";

// je conçois ma requête
let maRequest = new XMLHttpRequest();

// je donne des propriétés à ma requête 
maRequest.open("GET",url,false);

maRequest.send( null);

data = JSON.parse(maRequest.responseText);

console.log(data);

let nameOfTheSubject = data.course;
let courseActive = data.courseActive;
let courseName = data.courseName;
let date = data.date;
let year = data.releaseYear;