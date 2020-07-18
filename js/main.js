
//Select setting-box
let settingBoxEl = document.querySelector(".setting-box");
let gearEl = document.getElementById("gear");


//open and close the setting-box
function openSettingBox(){
	settingBoxEl.classList.toggle('open-setting-box');
	gearEl.classList.toggle('spin');
}

//switch colors
const colorLi = document.querySelectorAll(".colors-list li");
var colorsBorder = document.querySelectorAll(".color-list");

//event when the color is clicked
colorLi.forEach(li => {
	li.addEventListener('click', (e) => {
		//set color in root
		document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
		
		//add border to the active color
		for(i=0;i<colorsBorder.length;i++){
			colorsBorder[i].classList.remove("active");
		}
		li.classList.add("active");
	});
});

//random Background Option
const backgroundButtons = document.querySelectorAll(".random-background span");



//Change The opacity of the buttons 
backgroundButtons.forEach(span => {
	span.addEventListener('click', (e) => {
		

		for(i=0;i<backgroundButtons.length;i++){
			backgroundButtons[i].classList.remove("active");
		}
		span.classList.add("active");
		
	});
});

//stop Random Background option function
function stopRandomizeBackground(){
	backgroundOption = false;
	clearInterval(backgroundInterval);
}

//Dark Mode
let darkModeButtons = document.querySelectorAll(".setting-box .page-mode span");
darkModeButtons.forEach(span => {
	span.addEventListener('click', (e) => {
		

		for(i=0;i<darkModeButtons.length;i++){
			darkModeButtons[i].classList.remove("active");
		}
		span.classList.add("active");
		
	});
});

function darkMode(){
	let body = document.getElementById("body");
	body.style.backgroundColor = "#17222b";
	body.style.color="#fff";
	
	
	let progressContainers = document.querySelectorAll(".skills .skill-box");
	progressContainers.forEach(container => {
		container.style.backgroundColor = "#17222b";		
	});
	
	let settingBox = document.querySelector(".setting-box");
	settingBox.style.backgroundColor = "#17222b";
	
	let faCog  = document.querySelector(".fa-cog");
	faCog.style.backgroundColor = "#17222b";
	
	let timelineContent = document.querySelectorAll(".timeline .timeline-content .content");
	timelineContent.forEach(content => {
		content.style.backgroundColor = "#17222b";	

	let menuButton = document.querySelector(".nav-button");
	let menuLinks = document.querySelector(".nav-button ul");
	menuButton.classList.add("black-open");
	menuLinks.style.backgroundColor = "#17222b";
	menuLinks.style.color = "#fff";
	
	let rightArrow = document.querySelectorAll(".timeline .timeline-content .right");
	rightArrow.forEach(arrow => {
		arrow.classList.add("dark-right");
	});
	
	let leftArrow = document.querySelectorAll(".timeline .timeline-content .left");
	leftArrow.forEach(arrow => {
		arrow.classList.add("dark-left");
	});
	});
}

function whiteMode(){
	let body = document.getElementById("body");
	body.style.backgroundColor = "#fff";
	body.style.color = "#263238";
	
	
	let progressContainers = document.querySelectorAll(".skills .skill-box");
	progressContainers.forEach(container => {
		container.style.backgroundColor = "#fff";		
	});
	
	let settingBox = document.querySelector(".setting-box");
	settingBox.style.backgroundColor = "#fff";
	
	let faCog  = document.querySelector(".fa-cog");
	faCog.style.backgroundColor = "#fff";
	
	let timelineContent = document.querySelectorAll(".timeline .timeline-content .content");
	timelineContent.forEach(content => {
		content.style.backgroundColor = "#fff";		
		
	let menuButton = document.querySelector(".nav-button");
	let menuLinks = document.querySelector(".nav-button ul");
	menuButton.classList.remove("black-open");
	menuLinks.style.backgroundColor = "#fff";
	menuLinks.style.color = "#263238";
	
	let rightArrow = document.querySelectorAll(".timeline .timeline-content .right");
	rightArrow.forEach(arrow => {
		arrow.classList.remove("dark-right");
	});
	
	let leftArrow = document.querySelectorAll(".timeline .timeline-content .left");
	leftArrow.forEach(arrow => {
		arrow.classList.remove("dark-left");
	});
	
	});
}



//bullets Option
//Change The opacity of the buttons 
let bulletsButtons = document.querySelectorAll(".setting-container .bullets-option span");

bulletsButtons.forEach(span => {
	span.addEventListener('click', (e) => {
		
		for(i=0;i<bulletsButtons.length;i++){
			bulletsButtons[i].classList.remove("active");
		}
		span.classList.add("active");
		
	});
});

let bulletsEl = document.querySelector(".nav-bullets");
//show bullets
function showBullets() {
	bulletsEl.style.display = "block";
}

//hide bullets
function hideBullets() {
	bulletsEl.style.display = "none";
}

//Bullets On the right
var bullets = document.querySelectorAll(".nav-bullets .bullets");

bullets.forEach(bullet => {
	bullet.addEventListener('click', (e)=> {
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior:'smooth'
		});
	});
	
});


//Reset Options
var resetEl = document.getElementById('reset');

resetEl.onclick = function(){
	window.location.reload();
};