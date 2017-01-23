function sandbox(obj, prop) {
	var tmp = document.createElement("div");
	tmp.className = "_tempSandbox_";
	if (typeof obj === "string") {
		tmp.id = obj;
	} else {
		tmp.id = "sandbox";
	}
	
	if (typeof obj === "object" || typeof prop === "object") {
		var attrs = typeof prop === "object" ? prop : obj;
		for(var p in attrs) {
			if(/class|className/.test(p)) {
				tmp.setAttribute(p, attrs[p] + " _tempSandbox_");
			} else {
				tmp.setAttribute(p, attrs[p]);
			}
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
