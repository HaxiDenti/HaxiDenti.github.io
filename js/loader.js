window.addEventListener("load", function(){
	var toLoad = getAskParam("f");
	if (toLoad != "" && toLoad != undefined) { addScript(toLoad, _init); return; }
	addScript("index", _init)
});

function getAskParam(par) {
	var loc = window.location.href;
	var param = "?" + par + "=";
	var askIndex = loc.indexOf(param);
	if (askIndex < 0) return "";
	askIndex += param.length
	var found = loc.substr(askIndex);
	{
		var secondAskIndex = found.indexOf("?");
		if (secondAskIndex > 0) {
			found = found.substr(0, secondAskIndex);
		}
		var sharpIndex = found.indexOf("#")
		if (sharpIndex > 0) {
			found = found.substr(0, sharpIndex);
		}
	}
	return found;
}

function getAskParam64(par) {
	var res = getAskParam(par);
	return unescape(atob(res));
}

function addScript(src, onload) {
		if (!src || src==="") {
			src = "index";
		}
		var destination = document.body;
		var el = document.createElement("script");
		el.type = "text/javascript";
		el.src = "content/" + src + ".js";
		if (onload) el.addEventListener("load", onload);
		destination.appendChild(el);
		return el;
	}