if (document.readyState == "loading") {
	document.body.classList.add('loaded_hiding');
} else {
	document.body.classList.add('loaded');
	document.body.classList.remove('loaded_hiding');

	// youtube image insertion
	var youtube = document.querySelectorAll(".youtube");
	
	// loop
 
	for (var i = 0; i < youtube.length; i++) {
		// thumbnail image source.
		var source = "https://img.youtube.com/vi/" + youtube[i].getAttribute('data-embed') + "/hqdefault.jpg";
		
		// Load the image 
		youtube[i].setAttribute("data-src",source);
		youtube[i].classList.add("b-lazy");
		
		// show video on click
		youtube[i].addEventListener("click", function() {
			var iframe = document.createElement("iframe");
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.getAttribute('data-embed') + "?rel=0&showinfo=0&autoplay=1");
			this.innerHTML = "";
			this.appendChild(iframe);
		});
	}

	// image lazy load
	var bLazy = new Blazy();
}