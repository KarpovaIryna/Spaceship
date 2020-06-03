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
rocket.style.left = `${xWalk}px`;
rocket.style.top = `${yWalk}px`;
//Set borders for space-field
if(rocket.top < 0) rocket.top = 0;
if(rocket.left < 0) rocket.left = 0;
if(rocket.top > space.clientHeight) rocket.top = space.clientHeight;
if(rocket.left > space.clientWidth) rocket.left = space.clientWidth;	
};
//Clicken
space.addEventListener('click', flyRocket);
})();

