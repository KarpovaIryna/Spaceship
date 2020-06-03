;(function() {
	"use strict";
		let space = document.querySelector('.ba-space');//div with space
		let rocket = document.querySelector('.ba-space__rocket');//rocket.svg
function flyRocket(event) {
//Get coordinates
	let x = event.clientX;
	let y = event.clientY;
//Bound mous and rocket
	let spaceCoords = space.getBoundingClientRect();
	let yWalk =  y - spaceCoords.top - space.clientTop - rocket.clientHeight / 2;
	let xWalk = x - spaceCoords.left - space.clientLeft - rocket.clientWidth / 2;
//Set rocket's coordinats in CSS
console.log(xWalk, yWalk);

//Set borders for space-field
if(xWalk < 0) xWalk = 0;
if(yWalk < 0) yWalk = 0;
	if(xWalk + rocket.offsetWidth > space.clientWidth) xWalk = xWalk - rocket.offsetWidth / 2;	
if(yWalk + rocket.offsetHeight > space.clientHeight) yWalk = yWalk - rocket.offsetHeight / 2;	

rocket.style.left = `${xWalk}px`;
rocket.style.top = `${yWalk}px`;
};
//Clicken
space.addEventListener('click', flyRocket);
})();