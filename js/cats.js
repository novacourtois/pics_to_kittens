function catPics() {
	var links = ["http://placekitten.com/", "http://placekitten.com/g/"];
	var url;

	var imgs = document.getElementsByTagName('img');
	for(var i = 0; i < imgs.length;++i) {
		url = (Math.random() > .5) ? links[0] : links[1]; 
		imgs[i].src = url+imgs[i].width+"/"+imgs[i].height;
	}

	// var iframes = document.getElementsByTagName('iframe');
	// for(var i = 0; i < iframes.length;++i) {
	// 	console.log(i);

	// 	console.log(iframes[i]);

	// 	var innerDoc = (iframes[i].contentDocument) ? iframes[i].contentDocument : iframes[i].contentWindow.document;
	// 	console.log(innerDoc);

	// 	var iframe_imgs;
	// 	if(iframes[i].contentDocument) {
	// 		iframe_imgs = iframes[i].contentDocument.getElementsByTagName('img');

	// 	}
	// 	else if(iframes[i].contentWindow.document){
	// 		iframe_imgs = iframes[i].contentWindow.document.getElementsByTagName('img');
	// 	}

	// 	console.log('# of pics: '+iframe_imgs.length);
	// 	for(var j = 0; j < iframe_imgs.length; ++j) {
	// 		url = (Math.random() > .5) ? links[0] : links[1]; 
	// 		iframe_imgs[j].src = url+iframe_imgs[j].width+"/"+iframe_imgs[j].height;
	// 	}
	// }
}



$(document).ready(function(){
	chrome.runtime.sendMessage({greeting: ""}, function(response) {
		if(response.farewell == "run") {

			catPics();

			document.addEventListener("DOMNodeInserted", function(evt) {
		    	catPics();
			}, false);
		}
	});
});