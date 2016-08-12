document.addEventListener('DOMContentLoaded', function() {
	var videos = document.getElementsByTagName('iframe');
	for (i = 0; i < videos.length; i++) {
		videos[i].setAttribute('allowfullscreen', '');
	}
});

