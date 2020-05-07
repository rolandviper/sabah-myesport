import { gsap } from '../node_modules/gsap/index.js';

const tl = gsap.timeline();

const titleEl = document.querySelectorAll('.title')[0];

const baseEl = document.getElementById('base'),
	teamEl = document.getElementsByClassName('teams'),
	scoreEl = document.getElementsByClassName('score');

const team1 = document.querySelectorAll('#left .name')[0],
	team2 = document.querySelectorAll('#left .name ')[1],
	team3 = document.querySelectorAll('#left .name ')[2],
	team4 = document.querySelectorAll('#left .name ')[3],
	team5 = document.querySelectorAll('#left .name ')[4],
	team6 = document.querySelectorAll('#left .name ')[5],
	team7 = document.querySelectorAll('#left .name ')[6],
	team8 = document.querySelectorAll('#left .name ')[7],
	team9 = document.querySelectorAll('#right .name ')[0],
	team10 = document.querySelectorAll('#right .name ')[1],
	team11 = document.querySelectorAll('#right .name ')[2],
	team12 = document.querySelectorAll('#right .name ')[3],
	team13 = document.querySelectorAll('#right .name ')[4],
	team14 = document.querySelectorAll('#right .name ')[5],
	team15 = document.querySelectorAll('#right .name ')[6],
	team16 = document.querySelectorAll('#right .name ')[7];

const score1 = document.querySelectorAll('#left .score')[0],
	score2 = document.querySelectorAll('#left .score')[1],
	score3 = document.querySelectorAll('#left .score')[2],
	score4 = document.querySelectorAll('#left .score')[3],
	score5 = document.querySelectorAll('#left .score')[4],
	score6 = document.querySelectorAll('#left .score')[5],
	score7 = document.querySelectorAll('#left .score')[6],
	score8 = document.querySelectorAll('#left .score')[7],
	score9 = document.querySelectorAll('#right .score')[0],
	score10 = document.querySelectorAll('#right .score')[1],
	score11 = document.querySelectorAll('#right .score')[2],
	score12 = document.querySelectorAll('#right .score')[3],
	score13 = document.querySelectorAll('#right .score')[4],
	score14 = document.querySelectorAll('#right .score')[5],
	score15 = document.querySelectorAll('#right .score')[6],
	score16 = document.querySelectorAll('#right .score')[7];

var testURL = 'https://docs.google.com/spreadsheets/d/1ZMZVyhX3SBE4GJP5vjCY5GgU9kw2OAA2tHc9y_UhNJo/edit?usp=sharing';

function onLoad(data, tabletop) {
	console.log(data);

	titleEl.innerHTML = 'Grand Final PUBGM';

	team1.innerHTML = data[0].GrandFinalR3;
	team2.innerHTML = data[1].GrandFinalR3;
	team3.innerHTML = data[2].GrandFinalR3;
	team4.innerHTML = data[3].GrandFinalR3;
	team5.innerHTML = data[4].GrandFinalR3;
	team6.innerHTML = data[5].GrandFinalR3;
	team7.innerHTML = data[6].GrandFinalR3;
	team8.innerHTML = data[7].GrandFinalR3;
	team9.innerHTML = data[8].GrandFinalR3;
	team10.innerHTML = data[9].GrandFinalR3;
	team11.innerHTML = data[10].GrandFinalR3;
	team12.innerHTML = data[11].GrandFinalR3;
	team13.innerHTML = data[12].GrandFinalR3;
	team14.innerHTML = data[13].GrandFinalR3;
	team15.innerHTML = data[14].GrandFinalR3;
	team16.innerHTML = data[15].GrandFinalR3;

	score1.innerHTML = data[0].GrandFinalTP;
	score2.innerHTML = data[1].GrandFinalTP;
	score3.innerHTML = data[2].GrandFinalTP;
	score4.innerHTML = data[3].GrandFinalTP;
	score5.innerHTML = data[4].GrandFinalTP;
	score6.innerHTML = data[5].GrandFinalTP;
	score7.innerHTML = data[6].GrandFinalTP;
	score8.innerHTML = data[7].GrandFinalTP;
	score9.innerHTML = data[8].GrandFinalTP;
	score10.innerHTML = data[9].GrandFinalTP;
	score11.innerHTML = data[10].GrandFinalTP;
	score12.innerHTML = data[11].GrandFinalTP;
	score13.innerHTML = data[12].GrandFinalTP;
	score14.innerHTML = data[13].GrandFinalTP;
	score15.innerHTML = data[14].GrandFinalTP;
	score16.innerHTML = data[15].GrandFinalTP;
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('playfinal', () => {
	Tabletop.init(options);

	tl.to([ baseEl ], { duration: 1, opacity: 1 });

	tl.from([ baseEl ], { duration: 1, width: 0 });
	tl.from([ teamEl ], { duration: 1, opacity: 0 });
	tl.from([ scoreEl ], { duration: 1, opacity: 0 });
});

nodecg.listenFor('stopfinal', () => {
	tl.to([ baseEl ], { duration: 1, opacity: 0 });
});
