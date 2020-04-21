import { gsap } from '../node_modules/gsap/index.js';

const baseEl = document.getElementById('base');
const nameplateEl = document.getElementById('nameplate');

const leftTeam = document.getElementById('leftteam');
const rightTeam = document.getElementById('rightteam');

const middle = document.getElementById('middle');
const series = document.getElementById('series');
const game = document.getElementById('game');
const round = document.getElementById('round');

const vs = document.getElementById('vs');

const logoEl = document.getElementById('logo');
const bgEl = document.getElementById('bg');
const sponsorEl = document.getElementById('sponsor');

var testURL =
	// 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
	'https://docs.google.com/spreadsheets/d/1pgX-v5riwLGzNLjHUCS1ScJnR0fzGP-wTaAMXsd6ls4/edit?usp=sharing'; //Input scoresheet
//'https://docs.google.com/spreadsheets/d/1gif-dWIVW0UL7pUHSlb4oihPA-1csaCYXE6ibPonB-U/edit?usp=sharing'; //MLBBSCORE
function onLoad(data, tabletop) {
	console.log(data);

	leftTeam.innerHTML = data[0].Versus;
	rightTeam.innerHTML = data[1].Versus;
	series.innerHTML = data[0].Format;
	game.innerHTML = data[1].Format;
	round.innerHTML = data[0].Stages;
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('playDraft', (data) => {
	Tabletop.init(options);
	const tl = gsap.timeline();

	tl.from([ baseEl ], 1, { opacity: 0 });
	tl.to([ baseEl ], 1, { opacity: 1 });

	tl.from([ vs ], 1, { opacity: 0 });
	tl.to([ vs ], 1, { opacity: 1 }, '-=1');

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 1 });
});

nodecg.listenFor('stopDraft', () => {
	const tl = gsap.timeline();

	tl.to([ baseEl, vs ], 1, { opacity: 0 });

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 0 });

	tl.call(() => {
		leftTeam.innerHTML = '';
		rightTeam.innerHTML = '';
		series.innerHTML = '';
		game.innerHTML = '';
		round.innerHTML = '';
	});

	tl.set([ baseEl, vs, logoEl, sponsorEl ], { opacity: '' });
});
