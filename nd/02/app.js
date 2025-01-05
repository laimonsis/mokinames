const uzduotis1 = document.querySelector(".uzduotis1")
const uzduotis2 = document.querySelector(".uzduotis2")
const uzduotis3 = document.querySelector(".uzduotis3")
const uzduotis4 = document.querySelector(".uzduotis4")
const uzduotis5 = document.querySelector(".uzduotis5")
const uzduotis6 = document.querySelector(".uzduotis6")
const uzduotis7 = document.querySelector(".uzduotis7")
const uzduotis8 = document.querySelector(".uzduotis8")
const uzduotis9 = document.querySelector(".uzduotis9")
const uzduotis10 = document.querySelector(".uzduotis10")

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
 
 
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

// console.log("veikiantis");

// 1uzduotis Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1.
//           Visi tagai turi rikiuotis į vieną eilutę.

 let h1 = "";
 let h4 = "";

 
 for (let i = 0; i < 14; i++) {
    h1 += '<h1>4</h1>';
    h4 += '<h4>1</h4>';
 }

 

 uzduotis1.style.display = "flex";
 uzduotis1.innerHTML = h1 + h4;








// 2uzduotis Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.

let number = "";


for (let i = 0; i < 44; i++) {
    const randNumber = rand(14, 44);

    if (randNumber % 4 === 0) {
        number +='<span style="color: red; margin-left: 10px;">${randNumber}</span>';
    
} else {
     number +='<span style="color: blue; margin-left: 10px;">${randNumber}</span>';
}
}

uzduotis2.innerHTML = number;





// 3uzduotis Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.

let circle = "";

for (let i = 0; i < 14; i++) {
    circle += '<span style="width: 50px; height: 50px; border-radius: 50%; background-color: blue"></span>'
}

uzduotis3.innerHTML = circle;




// 4uzduotis Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).

let circle2 = ""

for (let i = 0; i < 4; i++) {
    circle2 += '<span style="display:inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: blue"></span>'
    circle2 += '<span style="display:inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: red"></span>'
}

uzduotis4.innerHTML = circle2;


// 5uzduotis. Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.

let table = `<table border = 1 cellpadding = "10">`
 
for (let i = 4; i <= 14; i++) {
  let sum = 4 * i
 
  table+= `<tr><td>4*${i}</td> <td>${sum}</td></tr>`
 
}
 
table+= `</table>`
 
 
 
 
uzduotis5.innerHTML = table

// 6uzduotis. Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” 
//    (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.


let star = "";

for (let i = 1; i <= 444; i++) {
    star += "<span></span>"

    if (i % 44 === 0) {
        star+= '<br />'
    }
}


uzduotis6.innerHTML = star

// 7uzduotis. Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip

let size = 500
let kvadratas2 = "";
 
for (let i = 0; i < 14; i++) {
    kvadratas2 += `<div style="
    width: ${size}px;
    height: ${size}px;
    position: absolute;
    background-color: ${randomColor()};
    top: ${(500 - size) / 2}px;
    left: ${(500 - size) / 2}px;
    "></div>`
 
    size -= 35;
}
 
uzduotis7.style.position = "relative";
uzduotis7.innerHTML = kvadratas2;

// Domaus ir eIMAN variacijos <----gryzes atsikelsi pasikartok----->
//  ....................../´¯/)
//  ....................,/¯../
//  .................../..../
//  ............./´¯/'...'/´¯¯`·¸
//  ........../'/.../..../......./¨¯\
//  ........('(...´...´.... ¯~/'...')
//  .........\.................'...../
//  ..........''...\.......... _.·´
//  ............\..............(
//  ..............\.............\...

// 8uzduotis. Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle


let kvadratasIsZenklu = ""

for (let i = 0; i < 41; i++) {
    let row = '<div style="display:grid; grid-template-columns: repeat(41, 10px);">'

    for (let j = 0; j < 41; j++) {
        row += '<span style="color: green;">&#9632</span>'
    }

    row+= '</div>'
    kvadratasIsZenklu+= row

}

uzduotis8.style.position = "relative";
uzduotis8.style.marginTop = "150px";


uzduotis8.innerHTML = kvadratasIsZenklu




// 9uzduotis. Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite atitinkamus simbolius). #ciklasCikle


let kvadratasSuIstrizaine = "";


let sizes = 41

for (let i = 0; i < sizes; i++) {

    let row = '<div style= "display:flex">'

    for (let j = 0; j < sizes; j++) {
        let color = ""

        if (i===j || sizes-1-i===j) {
            color = "yellow"
        }
        else {
            color = "green"
        }

        row+= '<span style= "color: ${color}">&#9632;</span>'
    }

    row += '</div>'
    kvadratasSuIstrizaine += row
        
}

uzduotis9.innerHTML = kvadratasSuIstrizaine

// 10uzduotis. Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun


