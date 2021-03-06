var projects = {
	wiki : {
		title: 'Wikipedia Searcher',
		info: 'placeholder',
		link: 'http://codepen.io/SlyTy7/full/LyEXEq/',
		tileImage: {
			source: 'images/wikisearch.png',
			alt: 'wikipedia search'
		},
		modalImage: {
			source: 'images/wikisearchFull.png',
			alt: 'full size image of flex application'
		},
	},
	quotes : {
		title: 'Random Quote Machine',
		info: 'An application to give you some random quotes when you click on a button.  It also has the ability to tweet the quote to your Twitter profile on the push of a button.',
		link: 'http://codepen.io/SlyTy7/full/evxjze',
		tileImage: {
			source: 'images/quotes.png',
			alt: 'random quote machine'
		},
		modalImage: {
			source: 'images/quotesFull.png',
			alt: 'full size image of random quote application'
		},
	},
	weather : {
		title: 'Local Weather App',
		info: 'This is a small and basic application built to show weather in your current location.',
		link: 'http://codepen.io/SlyTy7/full/EWBXem',
		tileImage: {
			source: 'images/weather.png',
			alt: 'local weather app'
		},
		modalImage: {
			source: 'images/weatherFull.png',
			alt: 'full size image of weather application'
		},
	},
	clock : {
		title: 'CSS Clock',
		info: 'A clock built to highlight the animation aspects of CSS.  This was a project I built under the teachings of Wes Bos at Javascript30.com.',
		link: 'projects/clock/index.html',
		tileImage: {
			source: 'images/clock.png',
			alt: 'pure css clock'
		},
		modalImage: {
			source: 'images/clockFull.png',
			alt: 'full size image of clock application'
		},
	},
	drums : {
		title: 'Drum Kit',
		info: 'This is a small drum kit application built with pure Javascript, no frameworks.  This was a project I built under the teachings of Wes Bos at Javascript30.com',
		link: 'projects/drums/index.html',
		tileImage: {
			source: 'images/drums.png',
			alt: 'thumbnail image of drum kit application'
		},
		modalImage: {
			source: 'images/drumsFull.png',
			alt: 'full size image of drum kit application'
		},
	},
	voice : {
		title: 'The Voiceinator 5000',
		info: 'This is an appliction that reads user entered information, out loud.  It is a text-to-speech application with a few options to change how the voice sounds.  This was a project I built under the teachings of Wes Bos at Javascript30.com',
		link: 'projects/voiceinator/index.html',
		tileImage: {
			source: 'images/voiceinator.png',
			alt: 'voiceinator 5000'
		},
		modalImage: {
			source: 'images/voiceinatorFull.png',
			alt: 'full size image of text to voice application'
		},
	},
	ahead : {
		title: 'Type Ahead',
		info: 'A web application that predicts what the user will be typing into the text field.  It is similiar to Google\'s search functionality',
		link: 'projects/ahead/index.html',
		tileImage: {
			source: 'images/ahead.png',
			alt: 'type ahead'
		},
		modalImage: {
			source: 'images/aheadFull.png',
			alt: 'full size image of type ahead application'
		},
	},
	whack : {
		title: 'Whack a Mole',
		info: 'A simple game built based on the whack-a-mole arcade game.',
		link: 'projects/mole/index.html',
		tileImage: {
			source: 'images/mole.png',
			alt: 'whack a mole'
		},
		modalImage: {
			source: 'images/moleFull.png',
			alt: 'full size images of whack-a-mole game'
		},
	},
	/*flex : {
		title: 'Flex Panels',
		info: 'An image gallery that can be expanded and minimized with flexible panels.  Built with vanilla Javascript with no compilers, libraries, or frameworks',
		link: 'projects/flex/index.html',
		tileImage: {
			source: 'images/flex.png',
			alt: 'flex panels'
		},
		modalImage: {
			source: 'images/flexFull.png',
			alt: 'full size image of flex panels application'
		},
	},*/
}


function displayProjects(){
	var finish = "";
	var container = $('#projects').children('div');

	for(project in projects){
		var tileStart = "<div class='project-tile col-xs-12 col-sm-6 col-md-4 col-lg-3'>";
		var tileImage = "<img class='project-img' src='" + projects[project].tileImage.source + "' alt='" + projects[project].tileImage.alt + "'>";
		var overlay = "<div class='overlay'><div class='overlay-content'>";
		var title = "<h3>" + projects[project].title + "</h3>";
		var infoLink = "<button class='info-button'>More Info</button>";
		var liveLink = "<a href='" + projects[project].link + "' target='_blank'>Live View</a>";
		var overlayEnd = "</div></div>"
		var tileEnd = "</div>";

		var modalStart = "<div class='modal'><div class='modal-content'><span class='close'>&times;</span>"
		var modalImage = "<img class='modal-img' src='" + projects[project].modalImage.source + "' alt='" + projects[project].modalImage.alt + "'>";;
		var modalInfo = "<p>" + projects[project].info + "</p>";
		var modalEnd = "</div></div>";

		finish += tileStart + tileImage + overlay + title + infoLink + liveLink + overlayEnd + tileEnd + modalStart + modalImage + modalInfo + modalEnd;
	};
	
	container.html(finish)
}


function modalDisplay(){
	var btn = $('.info-button');
	var close = $('.close');
	var popup = $('.modal');

// User clicks on More Info open popup
	btn.click(function(){
		var popup = $(this).parents('.project-tile').next('.modal')[0];
		$(this).parents('.project-tile').next('.modal')[0].style.display = "block";
	});


// User clicks on <span> (x), close the modal
	close.click(function() {
    	$(this).parents('.modal')[0].style.display = "none";
	});

// User clicks outside modal, close it
	popup.click(function(event){
		if(event.target.className == "modal"){
			this.style.display = "none";
		}
	});

};

$(document).ready(function(){
	displayProjects();
	modalDisplay();
});