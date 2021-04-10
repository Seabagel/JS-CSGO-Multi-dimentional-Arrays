/*	<style type="text/css">
	h2, hr {
		margin: 0;
	}
	ul {
		width: 90%;
	}
	li {
		background-color: rgba(0, 0, 0, 0.2);
		padding: 16px;
	}
	li:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
	h2 {
		padding-top: 10px;
	}
	</style>*/

for (var i = 0; i < document.getElementsByTagName("h2").length; i++) {
	document.getElementsByTagName("h2")[i].style.margin = "0";
	document.getElementsByTagName("h2")[i].style.paddingTop = "10px";

};

for (var a = 0; a < document.getElementsByTagName("li").length; a++) {
	document.getElementsByTagName("li")[i].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
	document.getElementsByTagName("li")[i].style.padding = "16px";
	document.getElementsByTagName("li")[i].mouseenter.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
};

for (var i = 0; i < document.getElementsByTagName("hr").length; i++) {
	document.getElementsByTagName("hr")[i].style.margin = "0";
};

for (var i = 0; i < document.getElementsByTagName("ul").length; i++) {
	document.getElementsByTagName("ul")[i].style.width = "90%";
};
