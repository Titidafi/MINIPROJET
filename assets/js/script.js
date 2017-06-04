var random_images_array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg"];
var is = new Array(32);
for (var n = 1; n <= 32; n++) {
	is[n] = 0
}

function getRandomImage(imgAr, path) {
	path = path || "assets/img/"; // default path here
	var num = Math.floor(Math.random() * imgAr.length);
	var img = imgAr[num];
	var imgStr = '<img src="' + path + img + '" id="0" class="face" alt="carte' + img + '"/>';
	is[num] = 1;
	document.write(imgStr);
	document.close();
	for (var i = 1; i < 32; i++) {
		while (is[num] == 1) {
			var num = Math.floor(Math.random() * imgAr.length);
		}
		var img = imgAr[num];
		var imgStr = '<img src="' + path + img + '" class="face" id="' + i + '" alt= "carte' + img + '"/>';
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
