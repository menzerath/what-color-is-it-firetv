function updateScreen() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if (h < 10) { h = "0" + h; }
	if (m < 10) { m = "0" + m; }
	if (s < 10) { s = "0" + s; }

	document.getElementById("time").innerHTML = (h + " : " + m + " : " + s);
	document.body.style.background = "#" + h + m + s;
}

window.onload = setInterval(updateScreen, 100);
