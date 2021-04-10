//weapon-type-name-stats[price, magazine size, origin]
var weapon = [
	["Pistols",
		["USP", "$200", "12", "Germany"],
		["P2000", "$200", "13", "Germany"],
		["Glock", "$200", "20", "Austria"],
		["P250", "$300", "12", "Switzerland"],
		["Deagle", "$700", "7", "Israel"],

	],
	["Smgs",
		["MAC-10", "$1050", "30", "United States"],
		["MP9", "$1250", "30", "United States"],
		["UMP45", "$1200", "25", "Germany"],
		["Bizon", "$1400", "64", "Russia"],
		["MP7", "$1700", "30", "Germany"],
		["P90", "$2350", "50", "Belgium"]
	],
	["Rifles",
		["Famas", "$2250", "25", "France"],
		["Galil", "$2000", "35", "Israel"],
		["M4", "$3100", "30", "United States"],
		["AK47", "$2700", "30", "Russia"],
		["Scout", "$1700", "10", "Austria"],
		["AWP", "$4750", "10", "United Kingdom"]
	]
];

var listTable = document.getElementById("ancor");

for(var k = 0; k < weapon.length; k++){
	var x = document.createElement("ul");
	document.body.appendChild(x);
	x.innerHTML = "<h2>" + (weapon[k][0]) + "</h2><hr>";
	for(var i = 1; i < weapon[k].length; i++){
		var y = document.createElement("li");
		x.appendChild(y);
		y.innerHTML = "<p>" + 
			(weapon[k][i][0] + ":").bold() +
			" Price: " + weapon[k][i][1] +
			", Magazine Size: " + weapon[k][i][2] +
			", Country Origin: " + weapon[k][i][3] +
		"</p>";
	};
};

/*
var x = document.createElement("audio");
document.body.appendChild(x);

//Sets music

function musicSetup(){
	var currentSong = songsDB[Math.floor((Math.random() * songsDB.length) + 0)];
	document.getElementById("album-name").innerHTML = currentSong;
	album.style.backgroundImage = "url('img/albums/" + currentSong + ".jpg')";
	x.src = "audio/" + currentSong + ".mp3";
	//x.controls = true;
	x.play();
};
*/

document.body.style.fontFamily = "sans-serif";