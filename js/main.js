/*variables*/

//Select setting-box
const settingBoxEl = document.querySelector(".setting-box")
const gearEl = document.getElementById("gear");
//switch colors
const colorLi = document.querySelectorAll(".colors-list li");
const colorsBorder = document.querySelectorAll(".color-list");
//random Background Option
const backgroundButtons = document.querySelectorAll(".random-background span");
//Dark Mode
const darkModeButtons = document.querySelectorAll(".setting-box .page-mode span");
let bulletsButtons = document.querySelectorAll(".setting-container .bullets-option span");
let bulletsEl = document.querySelector(".nav-bullets");
//Bullets On the right
const bullets = document.querySelectorAll(".nav-bullets .bullets");
//Reset Options
const resetEl = document.getElementById('reset');


/*functions*/

//open and close the setting-box
function openSettingBox(){
	settingBoxEl.classList.toggle('open-setting-box');
	gearEl.classList.toggle('spin');
}

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

//show bullets
function showBullets() {
	bulletsEl.style.display = "block";
}

//hide bullets
function hideBullets() {
	bulletsEl.style.display = "none";
}


/*events*/

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
darkModeButtons.forEach(span => {
	span.addEventListener('click', (e) => {
		

		for(i=0;i<darkModeButtons.length;i++){
			darkModeButtons[i].classList.remove("active");
		}
		span.classList.add("active");
		
	});
});

//bullets Option
//Change The opacity of the buttons 

bulletsButtons.forEach(span => {
	span.addEventListener('click', (e) => {
		
		for(i=0;i<bulletsButtons.length;i++){
			bulletsButtons[i].classList.remove("active");
		}
		span.classList.add("active");
		
	});
});


//Bullets On the right
bullets.forEach(bullet => {
	bullet.addEventListener('click', (e)=> {
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior:'smooth'
		});
	});
	
});


//Reset Options
resetEl.onclick = function(){
	window.location.reload();
};


// sending the form

function submitForm(e){
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    let phone = document.querySelector(".phone").value;
    let subject = document.querySelector(".subject").value;

    sendEmail(name,email,message,phone,subject);
    document.querySelector(".contact_form").reset();
}

function sendEmail(name,email,message,phone,subject){
    Email.send({
        Host:"smtp.gmail.com",
        Username:'monicahans99@gmail.com',
        Password: "mhhjqiqbeofwyojo",
        To: "monicahans99@gmail.com",
        From: "monicahans99@gmail.com",
        Subject:`${name} sent you a message on subject:${subject}`,
        Body:`Name:${name} <br/> Email: ${email}<br/> phone:${phone} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"));
}

document.querySelector(".submit").addEventListener('click',submitForm);
