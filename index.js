document.querySelector('.header').addEventListener('click', (e) => {    
    scrollUp(e);        
});

const now = new Date();
let currentSliderSet = now.getMonth() < 2 || now.getMonth() > 9 ? 'mixed' : 'founds';
const pierChecker = document.getElementById('gallery-piers');
const foundChecker = document.getElementById('gallery-founds');
const sliderItems = Array.from(document.querySelectorAll('.gallery__item'));
const vertItems = Array.from(document.querySelectorAll('.gallery__item__vert'));
const horItems = Array.from(document.querySelectorAll('.gallery__item__hor'));
const mixedSet = [18,0,1,21,2,22,28,10,7,25,12,27,11,35,13,24,6,33];
let activeCalcs = [];
const calcImgs = Array.from(document.querySelectorAll('.calc__item__a'));
const calcTitles = Array.from(document.querySelectorAll('.calc__item__title'));
const calcContents = Array.from(document.querySelectorAll('.calc__item__content'));
const calcPrices = Array.from(document.querySelectorAll('.calc__item__price'));
const orderRes = document.querySelector('.order__result');

checkSliderBtns();
setSliderItems();

//CALCULATION CHECKBOXES
const pierCalcChecker = document.querySelector('.pier__btn');
const frameCalcChecker = document.querySelector('.frame__btn');
const bathCalcChecker = document.querySelector('.bath__btn');
const gasCalcChecker = document.querySelector('.gas__btn');

checkCalcs();
setCalcItems.apply(this, activeCalcs);

document.querySelector('.calc__pier__wrapper').addEventListener('click', () => {        
    if (pierCalcChecker.checked == true) {
        pierCalcChecker.checked = false;
    } else {
        pierCalcChecker.checked = true;        
    };
    checkCalcs();
    setCalcItems.apply(this, activeCalcs);             
});

document.querySelector('.calc__frame__wrapper').addEventListener('click', () => {        
    if (frameCalcChecker.checked == true) {
        frameCalcChecker.checked = false;
    } else {
        frameCalcChecker.checked = true;
    }; 
    checkCalcs();
    setCalcItems.apply(this, activeCalcs);               
});

document.querySelector('.calc__bath__wrapper').addEventListener('click', () => {        
    if (bathCalcChecker.checked == true) {
        bathCalcChecker.checked = false;
    } else {
        bathCalcChecker.checked = true;
    }; 
    checkCalcs();
    setCalcItems.apply(this, activeCalcs);             
});

document.querySelector('.calc__gas__wrapper').addEventListener('click', () => {        
    if (gasCalcChecker.checked == true) {
        gasCalcChecker.checked = false;
    } else {
        gasCalcChecker.checked = true;
    };  
    checkCalcs();
    setCalcItems.apply(this, activeCalcs);                  
});

function checkCalcs() {
    activeCalcs = [];
    if (pierCalcChecker.checked == true) activeCalcs.push('pier_calc.json');
    if (frameCalcChecker.checked == true) activeCalcs.push('frame_calc.json');
    if (bathCalcChecker.checked == true) activeCalcs.push('bath_calc.json');
    if (gasCalcChecker.checked == true) activeCalcs.push('gas_calc.json');

    if (activeCalcs.length == 0) {
        pierCalcChecker.checked = true;
        frameCalcChecker.checked = true;
        bathCalcChecker.checked = true;
        gasCalcChecker.checked = true;
        checkCalcs();
    };
};

//SLIDER CHECKBOXES
document.querySelector('.gallery-piers__btn').addEventListener('click', () => {        
    if (pierChecker.checked == true) {
        pierChecker.checked = false;
        if (foundChecker.checked == false) foundChecker.checked = true;
    } else {
        pierChecker.checked = true;
    };
    setSliderSet();
    setSliderItems();        
});

document.querySelector('.gallery-founds__btn').addEventListener('click', () => {        
    if (foundChecker.checked == true) {
        foundChecker.checked = false;
        if (pierChecker.checked == false) pierChecker.checked = true;
    } else {
        foundChecker.checked = true;
    };
    setSliderSet();
    setSliderItems();        
});

//SLIDER
const prev = document.querySelector('.gallery__slider__left');
const next = document.querySelector('.gallery__slider__right');
const items = document.querySelector('.gallery__items');
const slider = document.querySelector('.gallery__items__visible');
let counter = 1;
let offset = 0;

prev.addEventListener('click', () => {
    if (counter == 1) {
        if (window. innerWidth > 830) {
            counter = 3
        } else if (window. innerWidth <= 830 && window. innerWidth > 570) {
            counter = 6;
        } else {
            counter = 12
        }                
        offset = slider.offsetWidth * (counter - 1);                 
    } else {
        counter = --counter;  
        offset = offset - slider.offsetWidth;              
    }; 
    items.style.left = `-${offset}px`;
});

next.addEventListener('click', () => {
    if (counter == 3 && window. innerWidth > 830 ||
        counter == 6 && window. innerWidth <= 830 && window. innerWidth > 570 ||
        counter == 12 && window. innerWidth <= 570) {
        counter = 1;
        offset = 0;         
        items.style.left = `-${offset}`;                    
    } else {
        counter = ++counter;
        offset = offset + slider.offsetWidth;       
        items.style.left = `-${offset}px`;    
    };     
});

//BURGER
const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menu__items');
const overlay = document.querySelector('.overlay');
const burgerItems = Array.from(document.querySelectorAll('.menu__item'));

burgerIcon.addEventListener('click', (e) => {
    if (!burgerMenu.classList.contains('menu__items_active')) {
        openBurgermenu();
    } else {
        closeBurgerMenu();
    };
});

overlay.addEventListener('click', closeBurgerMenu);

burgerMenu.addEventListener('click', (e) => {
if (!e.target.classList.contains('menu__item_active')) closeBurgerMenu();
});

//CONTACTS

document.querySelector('.header__phone__icon'). addEventListener('click', () => {
    window.open('tel:+375295997769', '_self');
});

document.querySelector('.contacts__phone'). addEventListener('click', () => {
    window.open('tel:+375295997769', '_self');
});

// FUNCTIONS

function scrollUp(e) {                   
    if (e.target.classList.contains('header__phone__icon')||
        e.target.classList.contains('header__phone__text')||
        e.target.classList.contains('menu__items')||
        e.target.classList.contains('burger')||
        e.target.classList.contains('menu_item__link')||
        burgerMenu.classList.contains('menu__items_active'))
        {
            return;
        }    
        window.scrollTo(0, 0);     
};

function openBurgermenu() {
    burgerMenu.classList.add('menu__items_active');
        burgerIcon.classList.add('burger_close');
        overlay.classList.add('overlay_active');
        document.body.classList.add('body_no-scroll');
};

function closeBurgerMenu() {
    burgerMenu.classList.remove('menu__items_active');
    burgerIcon.classList.remove('burger_close');
    overlay.classList.remove('overlay_active');
    document.body.classList.remove('body_no-scroll');
};

async function setCalcItems() {
    let res;
    let data;
    let dataSet;    

    if (arguments.length == 1) {        
        res = await fetch(arguments[0]);
        data = await res.json(); 
    } else if (arguments.length <= 4) {               
        data = [];
        let n = {'2':'3', '3':'2', '4':'2'};

        for (let i = 0; i < arguments.length; i++) {
            res = await fetch(arguments[i]);
            dataSet = await res.json();                      
            setData(data, dataSet, (n[arguments.length]));
        };       
    };

    if (arguments.length == 4) {
        data.splice(0,1);
        data.splice(5,1);
        data.sort(() => Math.random() - 0.5);
    }      
    
    calcImgs.forEach((elem,i) => {                                
        elem.innerHTML = `<img src=${data[i].img} alt="пример расчета" class="calc__item__img"/>`;
        elem.href = `${data[i].img}`;
    });

    calcTitles.forEach((elem,i) => {
        elem.innerHTML = `${data[i].title}`;
    });

    calcContents.forEach((elem,i) => {
        elem.innerHTML = `${data[i].content}`;
    });

    calcPrices.forEach((elem,i) => {
        elem.innerHTML = `${data[i].price}`;
    });    

    refreshFsLightbox();
};

function setData(arr, set, n) {
    for (let i = 0; i < n; i++) {
        arr.push(set[i]) 
    }  
};

async function setSliderItems() {
    const sliderImgs = 'slider.json';
    const res = await fetch(sliderImgs);
    const data = await res.json();       

    let n; 
    if (currentSliderSet == 'founds') {
        n = 0;
    } else if (currentSliderSet == 'piers') {
        n = 18;
    };  

    if(currentSliderSet == 'mixed') {
        vertItems.forEach((current, i) => {               
            current.innerHTML = `<img src="${data[mixedSet[i]].src}" class="gallery__vertical" alt="фото"/>`      
            current.href = `${data[mixedSet[i]].src}`;
        });    
        horItems.forEach((current, i) => {              
            current.innerHTML = `<img src="${data[mixedSet[i+6]].src}" class="gallery__horizontal" alt="фото"/>`      
            current.href = `${data[mixedSet[i+6]].src}`;
        });        
    } else {
        vertItems.forEach((current, i) => {               
            current.innerHTML = `<img src="${data[n + i].src}" class="gallery__vertical" alt="фото"/>`       
            current.href = `${data[n + i].src}`;
        });
    
        horItems.forEach((current, i) => {              
            current.innerHTML = `<img src="${data[n + 6 + i].src}" class="gallery__horizontal" alt="фото"/>`       
            current.href = `${data[n + 6 + i].src}`;
        });        
    };  
    refreshFsLightbox();   
};

function setSliderSet() {
    if (pierChecker.checked && foundChecker.checked) {
        currentSliderSet = 'mixed';
    } else if (pierChecker.checked && !foundChecker.checked) {
        currentSliderSet = 'piers';
    } else if (!pierChecker.checked && foundChecker.checked) {
        currentSliderSet = 'founds';
    };
};

function checkSliderBtns() {    
    if (currentSliderSet == 'mixed') {
        pierChecker.checked = true;
        foundChecker.checked = true;
    } else if (currentSliderSet == 'founds') {
        pierChecker.checked = false;
        foundChecker.checked = true;
    } else {
        pierChecker.checked = true;
        foundChecker.checked = false;
    };
};  

// FORM
const myForm = document.getElementById('calc-request');

myForm.addEventListener('submit', function (event) {    
    event.preventDefault();     
    const formData = new FormData(myForm); 
    
  fetch('https://ppst.by/bot/piles_gate_7fea911620989149c0d3ff8520e16d29.php', {
    method: 'POST',    
    body: formData,
  })    
    .then((response) => {            
      return response.json();  
    }).then(function(data) {
        if (data.status == 'success') {
        document.querySelector('.order-form__submit').style.display = 'none';
        document.querySelector('.recaptcha').style.display = 'none';
        orderRes.innerHTML = data.message;
      } else if (data.status == 'error') {
        if (grecaptcha) {
            grecaptcha.reset();
          };
          orderRes.innerHTML = data.message;
        orderRes.style.color = 'red';
      };     
    })
    .catch((error) => {      
      console.error(error);
      if (grecaptcha) {
        grecaptcha.reset();
      };    
      orderRes.innerHTML = 'Что-то пошло не так, попробуйте позже.'
      orderRes.style.color = 'red';
    });
  });