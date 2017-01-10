function sandbox(obj) {
	var tmp = document.createElement("div");
	tmp.className = "_tempSandbox_";
	tmp.id = "sandbox";
	for(var p in obj) {
		if(/class|className/.test(p)) {
			tmp.setAttibute(p, obj[p] + " _tempSandbox_");
		} else {
			tmp.setAttibute(p, obj[p]);
		}
	}
	return document.body.appendChild(tmp);
}

function cleanup() {
	var elements = [].slice.call(document.querySelectorAll("._tempSandbox_"));
	elements.forEach(function(v) {
		v.parentNode.removeChild(v);
	});
}
