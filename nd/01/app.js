console.log('Pradedam!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// 1 Naudodami JS į tagus h1 - h4 įrašykite skaičius nuo 1 iki 4 (skaičius atitinka tagą).



const tagH1 = document.querySelector('h1');
tagH1.innerText = 1;

const tagH2 = document.querySelector('h2');
tagH2.innerText = 2;

const tagH3 = document.querySelector('h3');
tagH3.innerText = 3;

const tagH4 = document.querySelector('h4');
tagH4.innerText = 4;

// 2 Naudodami JS iš vieno div tago padarykite mėlyną keturkampį, o iš kito raudoną apskritimą.




const div1 = document.querySelector('div:nth-of-type(1)');
const div2 = document.querySelector('div:nth-of-type(2)');
  //div1.innerText = 'quadrilateral';
  //div2.innerText = 'circle';

div1.style.width = '100px';
div1.style.height = '100px';
div1.style.backgroundColor = 'blue';

div2.style.width = '40px';
div2.style.height = '40px';
div2.style.borderRadius = '20px';
div2.style.backgroundColor = 'red';




// 3 Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Kintamuosius ir gautą rezultatą įrašykite į atitinkamus span tagus, esančius section tage su id=go3.

function rand(main, max) {
    const minCeiled = Math.ceil(main);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

}

const A = rand(0, 4);
const B = rand(0, 4);
let bigger;
let smaller;
let suma;
console.log('A:', A, 'B:', B);

if (A > B) {
    bigger = A;
} else if (B > A) {
    bigger = B;
}

if (A < B) {
    smaller = A;
} else if (B < A) {
    smaller = B;
} else if ( A === B) {
    smaller = B;
    bigger = A;
}

if (A === 0 || B === 0) {
    Suma = "dalyba negalima";
} else if (A > B) {
    Suma = A / B;
} else if (B > A) {
    Suma = B / A;
} else if (A === B) {
    Suma = 1;
}
console.log(bigger, smaller);

const span3_1 = document.querySelector('#go3 span:nth-of-type(1)');

span3_1.innerText = bigger;

const span3_2 = document.querySelector('#go3 span:nth-of-type(2)');

span3_2.innerText = smaller;

const span3_3 = document.querySelector('#go3 span:nth-of-type(3)');

span3_3.innerText = Suma;



// 4 Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 50 iki 200. Iš section tage su id=go4 esančių div tagų padarykite atitinkamo dydžio (px) apskritimus. Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.


const D = rand(50, 200);
const E = rand(50, 200);
const F = rand(50, 200);
const go4 = document.querySelector('#go4')
go4.style.display = 'flex';

const divD = document.querySelector('#go4 div:nth-of-type(1)');
divD.style.backgroundColor = 'red';
divD.style.borderRadius = '50%';
divD.style.width = D + 'px';
divD.style.height = D + 'px';

const divE = document.querySelector('#go4 div:nth-of-type(2)');
divE.style.backgroundColor = 'red';
divE.style.borderRadius = '50%';
divE.style.width = E + 'px';
divE.style.height = E + 'px';

const divF = document.querySelector('#go4 div:nth-of-type(3)');
divF.style.backgroundColor = 'red';
divF.style.borderRadius = '50%';
divF.style.width = F + 'px';
divF.style.height = F + 'px';

//go4.innerText = divF.textContent

console.log('D:', D, 'E:', E, 'F', F);

if (D > E && D > F && E > F) {
    divF.width = F + 'px';
    divF.height = F + 'px';
}




// 5 Naudokite funkcija rand(). Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. Skaičius mažesnių už 0 spausdinkite raudonai,  didesnius už 0 mėlynai, o 0 žaliai.



// 6 Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuris skaičiuos žvakių kainą ir užpildykite formą easnčią section tage su id=go6. Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.


const span6 = document.querySelector('section#go6 [data-amount] span');

span6.innerText = 6;


// 7 Naudokite funkciją rand(). Parašykite skriptą, kuris atsitiktine tvarka generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, arba keturkampį arba trikampį.



// 8  Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8. Rezultatus įrašyti į šalia tam skirtas vietas.



// 9 Užpildyti daugybos lentelę, esančią tage section su id=go9.


const result1 = document.querySelector("#go9 > div:nth-child(1) > span:nth-child(3)");
const result2 = document.querySelector("#go9 > div:nth-child(2) > span:nth-child(3)");
const result3 = document.querySelector("#go9 > div:nth-child(3) > span:nth-child(3)");
const result4 = document.querySelector("#go9 > div:nth-child(4) > span:nth-child(3)");
const result5 = document.querySelector("#go9 > div:nth-child(5) > span:nth-child(3)");

result1.innerHTML = parseInt(document.querySelector("#go9 > div:nth-child(1) > span:nth-child(1)").innerHTML * parseInt(document.querySelector("#go9 > div:nth-child(1) > span:nth-child(1)").innerHTML;
result2.innerHTML = parseInt(document.querySelector("#go9 > div:nth-child(2) > span:nth-child(1)").innerHTML * parseInt(document.querySelector("#go9 > div:nth-child(2) > span:nth-child(1)").innerHTML;
result3.innerHTML = parseInt(document.querySelector("#go9 > div:nth-child(3) > span:nth-child(1)").innerHTML * parseInt(document.querySelector("#go9 > div:nth-child(3) > span:nth-child(1)").innerHTML;
result4.innerHTML = parseInt(document.querySelector("#go9 > div:nth-child(4) > span:nth-child(1)").innerHTML * parseInt(document.querySelector("#go9 > div:nth-child(4) > span:nth-child(1)").innerHTML;
result5.innerHTML = parseInt(document.querySelector("#go9 > div:nth-child(5) > span:nth-child(1)").innerHTML * parseInt(document.querySelector("#go9 > div:nth-child(5) > span:nth-child(1)").innerHTML;


// 10 Keturkampius, esančius tage section su id=go10, kurių plotas didesnis nei 10000 (px) nuspalvinkite raudonai.


const k = parseInt(document.querySelector("#go10 > div:nth-child(1)").style.width) * parseInt(document.querySelector("#go10 > div:nth-child(1)").style.height);
const k1 = parseInt(document.querySelector("#go10 > div:nth-child(2)").style.width) * parseInt(document.querySelector("#go10 > div:nth-child(2)").style.height);
const k2 = parseInt(document.querySelector("#go10 > div:nth-child(3)").style.width) * parseInt(document.querySelector("#go10 > div:nth-child(3)").style.height);
const k3 = parseInt(document.querySelector("#go10 > div:nth-child(4)").style.width) * parseInt(document.querySelector("#go10 > div:nth-child(4)").style.height);
const k4 = parseInt(document.querySelector("#go10 > div:nth-child(5)").style.width) * parseInt(document.querySelector("#go10 > div:nth-child(5)").style.height);


if (k1 > 10000) {
    document.querySelector("#go10 > div:nth-child(1)").style.backgroundColor = "red";
}
if (k2 > 10000) {
    document.querySelector("#go10 > div:nth-child(2)").style.backgroundColor = "red";
}
if (k3 > 10000) {
    document.querySelector("#go10 > div:nth-child(3)").style.backgroundColor = "red";
}
if (k4 > 10000) {
    document.querySelector("#go10 > div:nth-child(4)").style.backgroundColor = "red";
}
if (k5 > 10000) {
    document.querySelector("#go10 > div:nth-child(5)").style.backgroundColor = "red";
}
