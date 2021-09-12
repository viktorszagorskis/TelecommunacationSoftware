console.log("lancement du script Javascript");


// je définis la cible de ma requête
const url = "https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev/application/json";


// je fais ma requête HTTP de type GET à l'URL du prof
// pour cela, j'utilise la commande fetch

fetch(url,{headers : {"Accept": "application/json","Content-Type" : "application/json"}})
.then(function(data) {
	// j'implémente le code qui sert à traiter le fichier Json transmis par le site du prof
	console.log(data);
})
.catch(function(error) {
	// j'écris le code qui s'exécute si mon script rencontre un problème
	console.log("On a rencontré un pb lors de l'exécution du script");
	console.log(error);

});







/*
// je conçois ma requête
let maRequest = new XMLHttpRequest();

maRequest.setHeader("Access-Control-Allow-Origin","*");

// je donne des propriétés à ma requête 
maRequest.open("GET",url,true);

maRequest.send();*/


