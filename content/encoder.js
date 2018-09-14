{
	var el = document.createElement("textarea");
	el.id = "txt";
	el.innerHTML = "some text here";
	el.style.width = "100%";
	el.style.height = "200px";
	second.appendChild(el);
}

{
	var el = document.createElement("textarea");
	el.id = "b64";
	el.style.width = "100%";
	el.style.height = "100px";
	el.readOnly = true;
	el.style.color = "gray";
	second.appendChild(el);
	el.onclick = function(e) {
		var o = e.target;
		o.select();
		document.execCommand("copy");
	}
}

setInterval(function() {
	var txt = document.getElementById("txt").value;
	var b64 = btoa(txt);
	document.getElementById("b64").innerHTML = b64;
}, 500);