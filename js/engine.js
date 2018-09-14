var datas;

window.onload = function() {
	datas = document.getElementById("datas");
	addLogo();
	addMenus();
	addTopics();
	addContent();
}

function addLogo() {
	var body = document.getElementById("datas");
	{
		var img = document.createElement("img");
		img.src = menus.logo;
		img.style.width = "100%";
		body.appendChild(img);
	}
}

function addMenus() {
	var center = document.createElement("center");
	for (var i = 0; i < menus.length; i++) {
		var o = menus[i];
		center.innerHTML += "<a href='" + o.link + "' class=m>" + o.caption + "</a>";
	}
	datas.appendChild(center);
}

function addTopics() {
	if (window.topics) {
		var div = document.createElement("div");
		datas.appendChild(div);
		for (var i = 0; i < topics.length; i++) {
			var o = topics[i];
			var ctx = "<div class=cbox><img src='" + o.image + "' class=cimg>"
						+ "<p class=ctxt>" + o.text + "</p>"
			if (o.link) ctx += "<br><a href='"+ o.link + "' class=m>&gt;&gt;&gt;&gt;</a>";
			ctx += "</div>";
			div.innerHTML += ctx;
		}
	}
}

function addContent() {
	if (window.content) {
		var div = document.createElement("div");
		datas.appendChild(div);
		div.innerHTML += "<hr><div class=ctxt>" + window.content + "</div>";
	}
}