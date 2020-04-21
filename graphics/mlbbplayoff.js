import { gsap, Bounce } from '../node_modules/gsap/index.js';

const tl = gsap.timeline();

const container = document.getElementsByClassName('container');

const game = document.getElementById('game');

const team1 = document.querySelectorAll('.round32 .top')[0],
	team2 = document.querySelectorAll('.round32 .top')[1],
	team3 = document.querySelectorAll('.round32 .top')[2],
	team4 = document.querySelectorAll('.round32 .top')[3],
	team5 = document.querySelectorAll('.round32 .top')[4],
	team6 = document.querySelectorAll('.round32 .top')[5],
	team7 = document.querySelectorAll('.round32 .top')[6],
	team8 = document.querySelectorAll('.round32 .top')[7],
	team9 = document.querySelectorAll('.round32 .top')[8],
	team10 = document.querySelectorAll('.round32 .top')[9],
	team11 = document.querySelectorAll('.round32 .top')[10],
	team12 = document.querySelectorAll('.round32 .top')[11],
	team13 = document.querySelectorAll('.round32 .top')[12],
	team14 = document.querySelectorAll('.round32 .top')[13],
	team15 = document.querySelectorAll('.round32 .top')[14],
	team16 = document.querySelectorAll('.round32 .top')[15],
	team17 = document.querySelectorAll('.round32 .top')[16],
	team18 = document.querySelectorAll('.round32 .top')[17],
	team19 = document.querySelectorAll('.round32 .top')[18],
	team20 = document.querySelectorAll('.round32 .top')[19],
	team21 = document.querySelectorAll('.round32 .top')[20],
	team22 = document.querySelectorAll('.round32 .top')[21],
	team23 = document.querySelectorAll('.round32 .top')[22],
	team24 = document.querySelectorAll('.round32 .top')[23],
	team25 = document.querySelectorAll('.round32 .top')[24],
	team26 = document.querySelectorAll('.round32 .top')[25],
	team27 = document.querySelectorAll('.round32 .top')[26],
	team28 = document.querySelectorAll('.round32 .top')[27],
	team29 = document.querySelectorAll('.round32 .top')[28],
	team30 = document.querySelectorAll('.round32 .top')[29],
	team31 = document.querySelectorAll('.round32 .top')[30],
	team32 = document.querySelectorAll('.round32 .top')[31];

const team33 = document.querySelectorAll('.round16 .top')[0],
	team34 = document.querySelectorAll('.round16 .top')[1],
	team35 = document.querySelectorAll('.round16 .top')[2],
	team36 = document.querySelectorAll('.round16 .top')[3],
	team37 = document.querySelectorAll('.round16 .top')[4],
	team38 = document.querySelectorAll('.round16 .top')[5],
	team39 = document.querySelectorAll('.round16 .top')[6],
	team40 = document.querySelectorAll('.round16 .top')[7],
	team41 = document.querySelectorAll('.round16 .top')[8],
	team42 = document.querySelectorAll('.round16 .top')[9],
	team43 = document.querySelectorAll('.round16 .top')[10],
	team44 = document.querySelectorAll('.round16 .top')[11],
	team45 = document.querySelectorAll('.round16 .top')[12],
	team46 = document.querySelectorAll('.round16 .top')[13],
	team47 = document.querySelectorAll('.round16 .top')[14],
	team48 = document.querySelectorAll('.round16 .top')[15];

const team49 = document.querySelectorAll('.round8 .top')[0],
	team50 = document.querySelectorAll('.round8 .top')[1],
	team51 = document.querySelectorAll('.round8 .top')[2],
	team52 = document.querySelectorAll('.round8 .top')[3],
	team53 = document.querySelectorAll('.round8 .top')[4],
	team54 = document.querySelectorAll('.round8 .top')[5],
	team55 = document.querySelectorAll('.round8 .top')[6],
	team56 = document.querySelectorAll('.round8 .top')[7];

const team57 = document.querySelectorAll('.semifinals .top')[0],
	team58 = document.querySelectorAll('.semifinals .top')[1],
	team59 = document.querySelectorAll('.semifinals .top')[2],
	team60 = document.querySelectorAll('.semifinals .top')[3];

const team61 = document.querySelectorAll('.finals .top')[0],
	team62 = document.querySelectorAll('.finals .top')[1],
	team63 = document.querySelectorAll('.winner .top')[0];

// const team64 = document.querySelectorAll('.semifinals .top')[4],
// 	team65 = document.querySelectorAll('.semifinals .top')[5],
// 	team66 = document.querySelectorAll('.semifinals .top')[6],
// 	team67 = document.querySelectorAll('.semifinals .top')[7];

var testURL =
	// 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
	'https://docs.google.com/spreadsheets/d/1gif-dWIVW0UL7pUHSlb4oihPA-1csaCYXE6ibPonB-U/edit?usp=sharing'; //MLBBSABAH PLAYOFFS

function onLoad(data, tabletop) {
	// console.log(data);

	game.innerHTML = 'KEJOHANAN MYESPORTS PERINGKAT KEBANGSAAN 2.0 : SABAH STAY AT HOME CHALLENGE MLBB PLAYOFF BRACKET';

	//round32
	team1.innerHTML = data[0].S32 + ' ' + data[0].R32;
	team2.innerHTML = data[1].S32 + ' ' + data[1].R32;
	team3.innerHTML = data[2].S32 + ' ' + data[2].R32;
	team4.innerHTML = data[3].S32 + ' ' + data[3].R32;
	team5.innerHTML = data[4].S32 + ' ' + data[4].R32;
	team6.innerHTML = data[5].S32 + ' ' + data[5].R32;
	team7.innerHTML = data[6].S32 + ' ' + data[6].R32;
	team8.innerHTML = data[7].S32 + ' ' + data[7].R32;
	team9.innerHTML = data[8].S32 + ' ' + data[8].R32;
	team10.innerHTML = data[9].S32 + ' ' + data[9].R32;
	team11.innerHTML = data[10].S32 + ' ' + data[10].R32;
	team12.innerHTML = data[11].S32 + ' ' + data[11].R32;
	team13.innerHTML = data[12].S32 + ' ' + data[12].R32;
	team14.innerHTML = data[13].S32 + ' ' + data[13].R32;
	team15.innerHTML = data[14].S32 + ' ' + data[14].R32;
	team16.innerHTML = data[15].S32 + ' ' + data[15].R32;
	team17.innerHTML = data[16].S32 + ' ' + data[16].R32;
	team18.innerHTML = data[17].S32 + ' ' + data[17].R32;
	team19.innerHTML = data[18].S32 + ' ' + data[18].R32;
	team20.innerHTML = data[19].S32 + ' ' + data[19].R32;
	team21.innerHTML = data[20].S32 + ' ' + data[20].R32;
	team22.innerHTML = data[21].S32 + ' ' + data[21].R32;
	team23.innerHTML = data[22].S32 + ' ' + data[22].R32;
	team24.innerHTML = data[23].S32 + ' ' + data[23].R32;
	team25.innerHTML = data[24].S32 + ' ' + data[24].R32;
	team26.innerHTML = data[25].S32 + ' ' + data[25].R32;
	team27.innerHTML = data[26].S32 + ' ' + data[26].R32;
	team28.innerHTML = data[27].S32 + ' ' + data[27].R32;
	team29.innerHTML = data[28].S32 + ' ' + data[28].R32;
	team30.innerHTML = data[29].S32 + ' ' + data[29].R32;
	team31.innerHTML = data[30].S32 + ' ' + data[30].R32;
	team32.innerHTML = data[31].S32 + ' ' + data[31].R32;

	//round16
	team33.innerHTML = data[0].S16 + ' ' + data[0].R16;
	team34.innerHTML = data[1].S16 + ' ' + data[1].R16;
	team35.innerHTML = data[2].S16 + ' ' + data[2].R16;
	team36.innerHTML = data[3].S16 + ' ' + data[3].R16;
	team37.innerHTML = data[4].S16 + ' ' + data[4].R16;
	team38.innerHTML = data[5].S16 + ' ' + data[5].R16;
	team39.innerHTML = data[6].S16 + ' ' + data[6].R16;
	team40.innerHTML = data[7].S16 + ' ' + data[7].R16;
	team41.innerHTML = data[8].S16 + ' ' + data[8].R16;
	team42.innerHTML = data[9].S16 + ' ' + data[9].R16;
	team43.innerHTML = data[10].S16 + ' ' + data[10].R16;
	team44.innerHTML = data[11].S16 + ' ' + data[11].R16;
	team45.innerHTML = data[12].S16 + ' ' + data[12].R16;
	team46.innerHTML = data[13].S16 + ' ' + data[13].R16;
	team47.innerHTML = data[14].S16 + ' ' + data[14].R16;
	team48.innerHTML = data[15].S16 + ' ' + data[15].R16;

	//quater finals round of 8
	team49.innerHTML = data[0].S8 + ' ' + data[0].R8;
	team50.innerHTML = data[1].S8 + ' ' + data[1].R8;
	team51.innerHTML = data[2].S8 + ' ' + data[2].R8;
	team52.innerHTML = data[3].S8 + ' ' + data[3].R8;
	team53.innerHTML = data[4].S8 + ' ' + data[4].R8;
	team54.innerHTML = data[5].S8 + ' ' + data[5].R8;
	team55.innerHTML = data[6].S8 + ' ' + data[6].R8;
	team56.innerHTML = data[7].S8 + ' ' + data[7].R8;
	//semi finals
	team57.innerHTML = data[0].S4 + ' ' + data[0].R4;
	team58.innerHTML = data[1].S4 + ' ' + data[1].R4;
	team59.innerHTML = data[2].S4 + ' ' + data[2].R4;
	team60.innerHTML = data[3].S4 + ' ' + data[3].R4;

	//5/6 placing
	// team64.innerHTML = data[4].S4 + ' ' + data[4].R4;
	// team65.innerHTML = data[5].S4 + ' ' + data[5].R4;
	// team66.innerHTML = data[6].S4 + ' ' + data[6].R4;
	// team67.innerHTML = data[7].S4 + ' ' + data[7].R4;

	team61.innerHTML = data[0].S2 + ' ' + data[0].R2;
	team62.innerHTML = data[1].S2 + ' ' + data[1].R2;

	team63.innerHTML = data[0].C;
}

const options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('playPlayoff', () => {
	Tabletop.init(options);

	tl.from([ container ], { duration: 1, width: '50%', ease: 'back.out(1.7)' });
	tl.to([ container ], 1, { opacity: 1 }, '-=1');
});

nodecg.listenFor('stopPlayoff', () => {
	tl.to([ container ], { duration: 1, width: '50%', ease: 'back.in(1.7)' });
	tl.to([ container ], 1, { opacity: 0 }, '-=1');

	tl.call(() => {});

	tl.set([ container ], { width: '' });

	Tabletop.init(options);
});
