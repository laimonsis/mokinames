const uzduotis1 = document.querySelector("select1");
const uzduotis2 = document.querySelector("select2");
const uzduotis3 = document.querySelector("select3");
const uzduotis4 = document.querySelector("select4");
const uzduotis5 = document.querySelector("select5");
const uzduotis6 = document.querySelector("select6");
const uzduotis7 = document.querySelector("select7");
const uzduotis8 = document.querySelector("select8");
const uzduotis9 = document.querySelector("select9");
const uzduotis10 = document.querySelector("select10");


//uzduotis1

const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log("Veikia")
console.log("veikia")

const skaicius = rand(-1000, 1000);

console.log(skaicius);

if (skaicius>0) {
  uzduotis1.innerText = 'Skaicius ${skaicius} yra teigiamas'
}

else if (skaicius<0) {
 uzduotis1.innerText = 'Skaicius ${skaicius} yra neigiamas'
}

  else {
 uzduotis1.innerText = 'Skaicius yra nulis'
}


//uzduotis2 


const skaicius1 = rand(0,1000)
console.log(skaicius1);

if (skaicius % 2===0) {
  uzduotis1.innerText ='Skaicius $(skaicius1) yra lyginis'
}

else {
 uzduotis1.innerText ='Skaicius $(skaicius1) yra nelyginis'
 uzduotis1.innerText = 'Mano skaicius ${skaicius1}'

}

//uzduotis3


const temp = rand(-30,100)

if(temp>0) {
  uzduotis3.innerText = 'temperatura ${temp} yra teigiama'
}

else if (temp<0) {
  uzduotis3.innerText = 'temperatura ${temp} yra neigiama'
}

else {
  uzduotis3.innerText = 'temperatura ${temp} yra nulis'
}

//uzduotis5

const skaicius5 = rand(1000,2000);
const skaicius50 = rand(1000,2000);

console.log(skaicius5, skaicius50);
if (skaicius5>skaicius50) {
  uzduotis5.innerText = 'Skaicius ${skaicius5} yra didesnis uz $(skaicius50)'
}

else if (skaicius5<skaicius50) {
  uzduotis5.innerText = 'Skaicius ${skaicius50} yra didesnis uz $(skaicius5)'
}

else {
  uzduotis5.innerText = 'Skaiciai ${skaicius5} ir ${skaicius50} yra lygios'
}

//uzduotis6

//uzduotis7
 const vardas = rand(1, 3);
 let vardas1 = "Jonas";
 let vardas2 = 'Maryte';
  if (vardas === 1) {
    uzduotis7.innerText = 'Labas, ${vardas1}'
  }
  else if (vardas === 2) {
    uzduotis7.innerText = 'Labas, ${vardas2}'
  }
  else {
    uzduotis7.innerText = 'Labas, Vardas'
  }
//uzduotis10


const studentas1 = rand (1, 100);
const studentas2 = rand (1, 100);

if (studentas1<studentas2) {
  uzduotis10.innerText = 'Studentas2 gavo ${studentas2}. Studentas 1 gavo ${studentas1}.Studentas2 gavo daugiau balu'
} else {
  uzduotis10.innerText = 'Studentas1 gavo ${studentas1}. Studentas 2 gavo ${studentas2}.Studentas1 gavo daugiau balu'
}