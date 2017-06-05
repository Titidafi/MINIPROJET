var random_images_array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg"];
var is = new Array(32);
for (var n = 1; n <= 32; n++) {
	is[n] = 0;
}
var nbCartes = 0;
var cartesRet = Array(6);
var nb7 = 0;
var nb8 = 0;
var nb9 = 0;
var nb10 = 0;
var nbj = 0;
var nbq = 0;
var nbk = 0;
var nbas = 0;

function getRandomImage(imgAr, path) {
	path = path || "assets/img/"; // default path here
	var num = Math.floor(Math.random() * imgAr.length);
	var img = imgAr[num];
	var imgStr = '<img src="' + path + img + '" onclick="ret(this);"id="' + (num+1) + '" class="face" alt="' + img + '"/>';
	is[num] = 1;
	document.write(imgStr);
	document.close();
	for (var i = 1; i < 32; i++) {
		while (is[num] == 1) {
			var num = Math.floor(Math.random() * imgAr.length);
		}
		var img = imgAr[num];
		var imgStr = '<img src="' + path + img + '"onclick="ret(this);" class="face" id="' + (num+1) + '" alt= "' + img + '"/>';
		is[num] = 1;
		document.write(imgStr);
		document.close();
	}
}

function dos() {
	for (var i = 1; i < 33; i++) {
		var imgStr = '<img src="' + "assets/img/dos.jpg" + '" class="dos" id="" onclick="retourne();" alt = ""/>';
		document.write(imgStr);
		document.close();
	}

}
//Fonction de retournement
function ret(it) {
	if (nbCartes > 5) {
		document.getElementById('score').value=(parseInt(document.getElementById('score').value)+1);
		nbCartes = 0;
		//Cette partie vérifie si au bout de 6 coups une même carte a été plusieurs fois retournée
		if (nb7 != 4) {
			for (i = 1; i <= 4; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nb7=0;
			}
		}
		if (nb8 != 4) {
			for (i = 5; i <= 8; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nb8=0;
			}
		}
		if (nb9 != 4) {
			for (i = 9; i <= 12; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nb9=0;
			}
		}
		if (nb10 != 4) {
			for (i = 13; i <= 16; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nb10=0;
			}
		}
		if (nbj != 4) {
			for (i = 17; i <= 20; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nbj=0;
			}
		}
		if (nbq != 4) {
			for (i = 21; i <= 24; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nbq=0;
			}
		}
		if (nbk != 4) {
			for (i = 25; i <= 28; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nbk=0;
			}
		}
		if (nbas != 4) {
			for (i = 29; i <= 32; i++) {

				document.getElementById(i).style.opacity = 0;
				document.getElementById(i).setAttribute("onClick", "ret(this);");
				nbas=0;
			}
		}
	}
	//Cette partie du code compte le nombre de fois où une carte d'une certaine valeur a été retournée
	if (it.id >= 1 && it.id <= 4) {
		nb7 = nb7 + 1;
	}
	if (it.id >= 5 && it.id <= 8) {
		nb8 = nb8 + 1;
	}
	if (it.id >= 9 && it.id <= 12) {
		nb9 = nb9 + 1;
	}
	if (it.id >= 13 && it.id <= 16) {
		nb10 = nb10 + 1;
	}
	if (it.id >= 17 && it.id <= 20) {
		nbj = nbj + 1;
	}
	if (it.id >= 21 && it.id <= 24) {
		nbq = nbq + 1;
	}
	if (it.id >= 25 && it.id <= 28) {
		nbk = nbk + 1;
	}
	if (it.id >= 29 && it.id <= 32) {
		nbas = nbas + 1;
	}
	it.style.opacity = 1;
	cartesRet[nbCartes] = it.id;
	it.onclick = "";

	nbCartes = nbCartes + 1;
}