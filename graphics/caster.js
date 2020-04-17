import { gsap } from '../node_modules/gsap/index.js';

const tl = gsap.timeline();

const nameplateEl = document.getElementById('nameplate');
const titleEl = document.getElementById('title');
const subEl = document.getElementById('sub');

var testURL =
	// 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
	'https://docs.google.com/spreadsheets/d/1pgX-v5riwLGzNLjHUCS1ScJnR0fzGP-wTaAMXsd6ls4/edit?usp=sharing'; //Input scoresheet
//'https://docs.google.com/spreadsheets/d/1gif-dWIVW0UL7pUHSlb4oihPA-1csaCYXE6ibPonB-U/edit?usp=sharing'; //MLBBSCORE
function onLoad(data, tabletop) {
	console.log(data);

	titleEl.innerHTML = data[0].Caster;
	subEl.innerHTML = data[1].Caster;
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('playcaster', () => {
	Tabletop.init(options);

	tl.to([ nameplateEl ], 1, { opacity: 1 });
	tl.from([ nameplateEl ], 1, { width: 0 }, '-=1');

	tl.to([ nameplateEl ], 1, { opacity: 0 }, '+=5');
	tl.to([ nameplateEl ], 1, { width: 0 }, '-=1');

	tl.call(() => {});

	tl.set([ nameplateEl ], { opacity: '', width: '' });
});
