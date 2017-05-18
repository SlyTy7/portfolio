var projects = {
	wiki : {
		title: 'Wikipedia Searcher',
		info: 'placeholder',
		link: 'http://codepen.io/SlyTy7/full/LyEXEq/',
		image: {
			source: 'images/wikisearch.png',
			alt: 'wikipedia search'
		}
	},
	quotes : {
		title: 'Random Quote Machine',
		info: 'placeholder',
		link: 'http://codepen.io/SlyTy7/full/evxjze',
		image: {
			source: 'images/quotes.png',
			alt: 'random quote machine'
		}
	},
	weather : {
		title: 'Weather App',
		info: 'placeholder',
		link: 'http://codepen.io/SlyTy7/full/EWBXem',
		image: {
			source: 'images/weather.png',
			alt: 'local weather app'
		}
	},
	clock : {
		title: 'CSS Clock',
		info: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
		link: 'projects/clock/index.html',
		image: {
			source: 'images/clock.png',
			alt: 'pure css clock'
		}
	},
	drums : {
		title: 'Pure Javascript Drum Kit',
		info: 'placeholder',
		link: 'projects/drums/index.html',
		image: {
			source: 'images/drums.png',
			alt: 'pure javascript drum kit'
		}
	},
	voice : {
		title: 'The Voiceinator 5000',
		info: 'placeholder',
		link: 'projects/voiceinator/index.html',
		image: {
			source: 'images/voiceinator.png',
			alt: 'voiceinator 5000'
		}
	},
	ahead : {
		title: 'Type Ahead',
		info: 'placeholder',
		link: 'projects/ahead/index.html',
		image: {
			source: 'images/ahead.png',
			alt: 'type ahead'
		}
	},
	whack : {
		title: 'Whack a Mole',
		info: 'placeholder',
		link: 'projects/mole/index.html',
		image: {
			source: 'images/mole.png',
			alt: 'whack a mole'
		}
	},
	flex : {
		title: 'Flex Panels',
		info: 'placeholder',
		link: 'projects/flex/index.html',
		image: {
			source: 'images/flex.png',
			alt: 'flex panels'
		}
	},
}


function displayProjects(){
	var finish = "";
	var container = $('#projects').children('div');

	for(project in projects){
		var tileStart = "<div class='project-tile col-xs-12 col-sm-6 col-lg-4'>";
		var image = "<img class='project-img' src='" + projects[project].image.source + "' alt='" + projects[project].image.alt + "'>";
		var overlay = "<div class='overlay'><div class='overlay-content'>";
		var title = "<h3>" + projects[project].title + "</h3>";
		var infoLink = "<button class='info-button'>More Info</button>";
		var liveLink = "<button><a href='" + projects[project].link + "' target='_blank'>Live View</a></button>";
		var overlayEnd = "</div></div>"
		var tileEnd = "</div>";

		var modal = "<div class='modal'><div class='modal-content'><span class='close'>&times;</span><p>" + projects[project].info + "</p></div></div>"

		finish += tileStart + image + overlay + title + infoLink + liveLink + overlayEnd + tileEnd + modal;
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