/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum rétt og hægt er af 10 dæmum');
  do {
    play();
  } while(confirm('Spila annan ?'));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
var date1 = new Date();
let time = 0;
let spilun = 0;
let stats = 0;

do {
	let result = ask();
	var date2 = new Date();
	time = date2 - date1;

	if (result == true) {
		stats++;
		spilun++;
	} else if (result == false) {
		spilun++;
	} else if( result === null ) {
		return alert('Hætt í leik');
	}
   }	

	while (spilun < GAMES_TO_PLAY) {
	}

	avg = stats/(time/1000);
	alert('Þú svaraðir ' + stats + ' spurningum rétt af 10 á ' + (time/1000).toFixed(4) + ' sekúndum.');
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
let spurning = randomNumber(1, 4);
let tala1 = 0;
let tala2 = 0;
let string1 = tala1.toString();
let string2 = tala2.toString();

switch(spurning) {
	case 1: 
		tala1 = randomNumber(1,100);
		tala2 = randomNumber(1,100);
		var svar = prompt(`Hvað er ${tala1} + ${tala2} ?`);
			if(guess(svar) === (tala1 + tala2)) {
				return true;
			} else if(guess(svar) === null) {
				return null;
			} else {
				return false;
			}
		break;

	case 2: 
		tala1 = randomNumber(1,100);
		tala2 = randomNumber(1,100);
		svar = prompt(`Hvað er ${tala1} - ${tala2} ?`);
			if(guess(svar) === (tala1 - tala2)) {
				return true;
			} else if(guess(svar) === null) {
				return null; 
			} else {
				return false;
			}
		break;
	
	case 3: 
		tala1 = randomNumber(1,10);
		tala2 = tala1 * randomNumber(1,10);
		svar = prompt(`Hvað er ${tala1} / ${tala2} ?`);
			if(guess(svar) === (tala1 / tala2)) {
				return true;
			} else if(guess(svar) === null) {
				return null;
			} else {
				return false;
			}
		break;

	case 4: 
		tala1 = randomNumber(2,10);
		tala2 = randomNumber(2,10);
		svar = prompt(`Hvað er ${tala1} * ${tala2} ?`);
			if(guess(svar) === (tala1 * tala2)) {
				return true;
			} else if (guess(svar) === null) {
				return null; 
			} else {
				return false; 
			}
		break;
	default: 
		alert('villa');
		break;
	} 

}

function guess(input) {
	const parse = parseInt(input, 10);

	if(isNaN(parse)) {
		return null;
	} 
	return parse; 
} 

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
