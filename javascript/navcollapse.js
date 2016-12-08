// JavaScript Document

function expandnav() {
	if (document.getElementById("nav").style.display = "none") {
		document.getElementById("nav").style.display = "block";
		document.getElementById("closenav").style.display = "block";
		document.getElementById("opennav").style.display = "none";
		document.getElementById("uhoh").style.top = "65%";
	}
}

function collapsenav() {
	if (document.getElementById("nav").style.display = "block") {
		document.getElementById("nav").style.display = "none";
		document.getElementById("closenav").style.display = "none";
		document.getElementById("opennav").style.display = "block";
		document.getElementById("uhoh").style.top = "25%";
	}
}