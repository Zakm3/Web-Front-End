console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function imgMouseOver(){
	alert("you're a rockstar")
}

let form = document.querySelector('#contact');
let img = document.querySelector('#rubberduck')
form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', imgMouseOver)