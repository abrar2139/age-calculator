const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const color5 = document.getElementById('color5');
const color6 = document.getElementById('color6');
const color7 = document.getElementById('color7');
const heading = document.getElementById('#heading');

color1.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'blue');
    document.documentElement.style.setProperty('--heading', 'black');
});
color2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'pink');
    document.documentElement.style.setProperty('--heading', 'purple');
});
color3.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'lightgreen');
    document.documentElement.style.setProperty('--heading', 'green');
});
color4.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'orange');
    document.documentElement.style.setProperty('--heading', 'orangered');
});

color5.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'silver');
    document.documentElement.style.setProperty('--heading', 'yellow');
});

color6.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'olive');
    document.documentElement.style.setProperty('--heading', 'salmon');
});

color7.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background1', 'aqua');
    document.documentElement.style.setProperty('--heading', 'silver');
});


let userInput = document.getElementById('date');
userInput.max= new Date().toISOString().split("T")[0];

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

let d3, m3, y3;

y3 = y2 - y1;

if(m2 >= m1) {
    m3 = m2 - m1;
}else{
    y3--;
    m3 = 12 + m2 - m1;
}
if(d2 >= d1) {
    d3= d2 - d1;
}else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
}
if(m3 < 0) {
    m3 = 11;
    y3--;
    
}

let result =  `You are `;
if(y3 > 0){
    result += `<span>${y3}</span> years`;
    }
if(m3 > 0){
    if (y3 > 0) {
        result += `, `;
    }
result += `<span>${m3}</span> months`;
}

if(d3 > 0){
    if (y3 > 0 || m3 > 0) {
        result += ` and `;
    }

result += `<span>${d3}</span> days old.`;
}else {
    result += ` old.`;
}

console.log(result);

let resultDiv = document.getElementById("result");
if (!resultDiv) {
    resultDiv = document.createElement('div');
    resultDiv.id='result';
    document.getElementById('age-calculator').appendChild(resultDiv);
}
resultDiv.innerHTML=`${result}`;
}





