let hero1 = document.getElementById('hero1');
let hero2 = document.getElementById('hero2');
let hero3 = document.getElementById('hero3');
let leftArrow = document.getElementById('leftarrow');
let rightArrow = document.getElementById('rightarrow');
let leftArrow2 = document.getElementById('leftarrow2');
let rightArrow2 = document.getElementById('rightarrow2');
let leftArrow3 = document.getElementById('leftarrow3');
let rightArrow3 = document.getElementById('rightarrow3');


function changePic() {
    if (hero2.style.display = 'none') {
        hero3.style.display = 'none';
        hero1.style.display = 'none';
        hero2.style.display = 'unset';
        hero2.style.display = 'grid';
    }
}

function changePic2() {
    if (hero3.style.display = 'none') {
        hero1.style.display = 'none';
        hero2.style.display = 'none';
        hero3.style.display = 'unset';
        hero3.style.display = 'grid';
    }
}

function changePic3() {
    if (hero1.style.display = 'none') {
        hero2.style.display = 'none';
        hero3.style.display = 'none';
        hero1.style.display = 'unset';
        hero1.style.display = 'grid';
    }
}

rightArrow.addEventListener('click', changePic);
rightArrow2.addEventListener('click', changePic2);
rightArrow3.addEventListener('click', changePic3);

leftArrow.addEventListener('click', changePic2);
leftArrow2.addEventListener('click', changePic3);
leftArrow3.addEventListener('click', changePic);