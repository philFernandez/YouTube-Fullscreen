document.addEventListener('DOMContentLoaded', function() {
	var videos = document.getElementsByTagName('iframe');
	for (i = 0; i < videos.length; i++) {
		videos[i].setAttribute('allowfullscreen', '');
	}
});

// document.addEventListener('DOMContentLoaded', function() {
// 	var button = document.getElementById('doIt');

// 	button.addEventListener('click', function() {
// 		var videos = document.getElementsByTagName('iframe');
// 		for (i = 0; i < videos.length; i++) {
// 			videos[i].setAttribute('allowfullscreen', '');
// 		}
// 	});
// });


// var videos = document.getElementsByTagName('iframe');
// for (i = 0; i < videos.length; i++) {
// 	videos[i].setAttribute('allowfullscreen', '');
// }