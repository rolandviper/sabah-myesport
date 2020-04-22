import { gsap } from '../node_modules/gsap/index.js';

const baseEl = document.getElementById('base');
// const nameplateEl = document.getElementById('nameplate');

//The information of the teams playing
// const leftTeam = document.getElementById('leftteam');
// const rightTeam = document.getElementById('rightteam');

//The information ingame on the top left
const series = document.getElementById('series');
const game = document.getElementById('game');
const round = document.getElementById('round');

const vs = document.getElementById('vs');
// const middle = document.getElementById('versus'); //VERSUS word

const logoEl = document.getElementById('logo');
const bgEl = document.getElementById('bg');
const sponsorEl = document.getElementById('sponsor');

var testURL =
	// 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
	'https://docs.google.com/spreadsheets/d/1pgX-v5riwLGzNLjHUCS1ScJnR0fzGP-wTaAMXsd6ls4/edit?usp=sharing'; //Input scoresheet
//'https://docs.google.com/spreadsheets/d/1gif-dWIVW0UL7pUHSlb4oihPA-1csaCYXE6ibPonB-U/edit?usp=sharing'; //MLBBSCORE
function onLoad(data, tabletop) {
	console.log(data);

	series.innerHTML = data[0].pubg;
	game.innerHTML = data[1].pubg;
	round.innerHTML = data[2].pubg;
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

const tl = gsap.timeline();

Tabletop.init(options);

nodecg.listenFor('playPUBG', () => {
	Tabletop.init(options);
	// leftTeam.innerHTML = data.leftTeam;
	// rightTeam.innerHTML = data.rightTeam;

	tl.from([ baseEl ], 1, { opacity: 0 });
	tl.to([ baseEl ], 1, { opacity: 1 });

	// tl.from([ middle ], 1, { opacity: 0, width: 0 });
	// tl.from([ nameplateEl ], 1, { opacity: 0 });

	tl.from([ series ], 1, { opacity: 0, width: 0 });
	tl.from([ game ], 1, { opacity: 0, width: 0 });
	tl.from([ round ], 1, { opacity: 0, width: 0 });

	tl.from([ bgEl ], 1, { opacity: 0, width: 0 });

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 1 });
});

nodecg.listenFor('stopPUBG', () => {
	tl.to([ logoEl, sponsorEl ], 1, { opacity: 0 });
	tl.to([ bgEl, vs ], 1, { opacity: 0, width: 0 });

	tl.to([ baseEl ], 1, { opacity: 0 });

	tl.call(() => {
		// leftTeam.innerHTML = '';
		// rightTeam.innerHTML = '';
		series.innerHTML = '';
		game.innerHTML = '';
		round.innerHTML = '';
	});

	tl.set([ baseEl, vs, logoEl, sponsorEl, bgEl ], { opacity: '', width: '' });
});
