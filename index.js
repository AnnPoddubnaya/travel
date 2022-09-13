//console.log('1.Вёрстка соответствует макету. Ширина экрана 390px +48\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3.На ширине экрана 390рх и меньше реализовано адаптивное меню +22');


//------------------burger
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const bg = document.querySelector('.bg');
const link = document.querySelectorAll('.nav__link');



burger.addEventListener('click', function(){
	burger.classList.toggle('active');
   menu.classList.toggle('active');
	bg.classList.toggle('active-color');
   
});

bg.addEventListener('click', function() {
	burger.classList.toggle('active');
   menu.classList.toggle('active');
	bg.classList.toggle('active-color');
});

link.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
	 (bg.classList.remove('active-color') + e.target.classList);
	 burger.classList.remove('active');
   menu.classList.remove('active');
	})
 });

//-----------------pop-up
const popup = document.querySelector('.pop-up');
const button = document.querySelector('.header__button');


console.log(button);
button.addEventListener('click', function(){
	popup.classList.remove('hidden');
	bg.classList.add('active-color');
	popup.classList.toggle('transition__down');
});


bg.addEventListener('click', function() {
   popup.classList.add('hidden');
	bg.classList.remove('active-color');
	popup.classList.remove('transition__down');
	
});

//--------------------pop-up---register
const registerButton = document.querySelector('.pop-up__link');


registerButton.addEventListener('click', createNewPopUp);
function createNewPopUp(){
	document.querySelector('.pop-up__title').innerHTML = 'Create account';
	document.querySelector('.google').style.display = 'none';
	document.querySelector('.fb').style.display = 'none';
	document.querySelector('.pop-up__forgot').style.display = 'none';
	document.querySelector('.pop-up__button').innerHTML = 'Sign Up';
	document.querySelector('.pop-up__acc').textContent = 'Already have an account?';
	document.querySelector('.pop-up__text_different').style.display = 'none';
	document.querySelector('.pop-up__contant').style.height = '440px';

	
};

//-------------pop-up----mob
const buttonAccount = document.querySelector('.nav__link_burger-account');
function createNewPopUpMob(){
	
	document.querySelector('.pop-up__contant').style.height = '550px';
	document.querySelector('.pop-up__contant').style.width = '300px';

	document.querySelector('.input__email').style.height = '50px';
	document.querySelector('.input__email').style.width = '280px';
	document.querySelector('.input__password').style.height = '50px';
	document.querySelector('.input__password').style.width = '280px';
	document.querySelector('.fb').style.height = '50px';
	document.querySelector('.fb').style.width = '280px';
	document.querySelector('.google').style.width = '280px';
	document.querySelector('.google').style.height = '50px';
	document.querySelector('.pop-up__button').style.height = '50px';
	document.querySelector('.pop-up__button').style.width = '280px';
	document.querySelector('.pop-up__contant').style.marginTop = '240px';
	document.querySelector('.pop-up__title').style.fontSize = '16px';
	document.querySelector('.fb__link').style.fontSize = '16px';
	document.querySelector('.google__link').style.fontSize = '16px';
	document.querySelector('.pop-up__button').style.fontSize = '16px';
	document.querySelector('.input__email').style.marginBottom = '0px';
	document.querySelector('.pop-up__text_different').style.marginBottom = '0px';
	document.querySelector('.pop-up__title').style.marginBottom = '0px';
	document.querySelector('.pop-up__contant').style.marginTop = '350px';
	document.querySelector('.pop-up__text_different').style.width = '275px'; 
	document.querySelector('.pop-up__line').style.width = '275px'; 
};
buttonAccount.addEventListener('click', function(){
	popup.classList.remove('hidden');
	bg.classList.add('active-color');
	createNewPopUpMob()
	
});

// -----------slider-deskopt

let images = document.querySelectorAll('.slider__item');
let current = 0;
const arrowRight = document.querySelector('.slider__arrow-right');
const arrowLeft = document.querySelector('.slider__arrow-left');

function slider() {
	for (i = 0; i < images.length; i++) {
		images[i].classList.add('opacity');
	}
	images[current].classList.remove('opacity');

};
slider();

arrowRight.addEventListener('click', function () {
	if( current + 1 === images.length){
		current = 0;
	} else {
		current++;
	}
	slider();
});

arrowLeft.addEventListener('click', function () {
	if( current - 1 === -1){
		current = images.length - 1;
	} else {
		current--;
	}
	slider();

});


//--------slider-mob
let img = document.querySelectorAll('.item');
let current2 = 0;
const arrowR = document.querySelector('.item-mob__arrow-right');
const arrowL = document.querySelector('.item-mob__arrow-left');

function slider2(){
	for( i = 0; i < img.length; i++){
		img[i].classList.add('opacity');
	}
img[current2].classList.remove('opacity');
}
slider2();



arrowL.addEventListener('click', function(){
	if(current2 - 1 === - 1){
		current2 = img.length - 1;
	} else {
		current2--;
	}
	slider2();
});

arrowR.addEventListener('click', function(){
	if(current2 + 1 === img.length){
		current2 = 0;
	} else {
current2++;
	}
	slider2();
});

