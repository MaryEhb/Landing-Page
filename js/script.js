/*variables*/

// Select the Landing page Element
let landingPageEl = document.querySelector(".landing-page");
// Get Array Of Images
let imagesArray = ["img.png","img5.png","img7.png"];let backgroundOption = true;
let backgroundInterval;
//menu button
let menuButton = document.querySelector(".nav-button");
let menuLinks = document.querySelector(".nav-button .links");
//Skills progress when scroll
let ourSkills = document.querySelector(".skills");
//Gallery
let ourGallery = document.querySelectorAll(".img-box img");


/*functions*/
//change Background Function
function randomizeBackground(){
	backgroundOption = true;
	if(backgroundOption===true){
		backgroundInterval = setInterval(() => {
	
		//Get Random Number
		let randomNumber = Math.floor(Math.random() * imagesArray.length);

	
		//Change Background Image
		landingPageEl.style.backgroundImage = "url('images/" + imagesArray[randomNumber] + "')";
	
		},7500);
	}	
}
randomizeBackground();


/*events*/
//menu button
menuButton.onclick = function() {
	menuLinks.classList.toggle("open");
	menuButton.classList.toggle("open");
}

window.onscroll = function(){
	//skills Outer Height
	let skillsOuterHeight = ourSkills.offsetHeight;
	
	//skills  top
	let skillsOffsetTop = ourSkills.offsetTop;
	
	//window height
	let windowHight = this.innerHeight;
	
	//window ScrollTop
	let WindowTop = this.pageYOffset;
	
	if(WindowTop >= skillsOffsetTop + skillsOuterHeight - windowHight){
		let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");
		
		allSkills.forEach(skill => {
			skill.style.width = skill.dataset.progress;
		});
	}
};

//Gallery
ourGallery.forEach(img => {
	img.addEventListener('click',(e) => {
		
		//create Overlay Element
		let overlay = document.createElement("div");
		
		//Add Class To Overlay
		overlay.className = "overlay";
		
		//Append the overlay Element to the body
		document.body.appendChild(overlay);
		
		//create popup box
		let popupBox = document.createElement("div");
		
		//Add class to PopUp
		popupBox.className = "popup";
		
		//Append the popupBox Element to the body
		document.body.appendChild(popupBox);
		
		// Put label to img 
		if(img.alt !== null){
			let label = document.createElement("h2");
			label.className = "img-label";
			let labelText = document.createTextNode(img.alt);
			label.appendChild(labelText);
			popupBox.appendChild(label);
		}
		
		
		//create image
		let popupImg = document.createElement("img");

		popupImg.src = img.src;	
		
		//Append the popupImg Element to the popupBox
		popupBox.appendChild(popupImg);
		
		
		//create the close button
		let closeButton = document.createElement("span");
		
		//create the close button text
		let buttonText = document.createTextNode("X");
		
		//append text to button
		closeButton.appendChild(buttonText);
		
		//Add class To Button
		closeButton.className = "popup-close";
		
		popupBox.appendChild(closeButton);
		
		closeButton.addEventListener('click',(e) => {
			overlay.remove();
			popupBox.remove();
		});
	});
});







